<template>
 <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible" :class="{[`position-${position}`]: true}">
        <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block">
        <slot></slot>
    </span>
 </div>
</template>

<script>
export default {
 name: 'VioPopover',
 data() {
  return {
      visible: false
  }
 },
 props: {
     position: {
         type: String,
         default: 'top',
         validator(val) {
            return ['top', 'bottom', 'left', 'right'].indexOf(val) >= 0
         }
     }
 },
 components: {

 },
 methods: {
     positionContent() {
        const {contentWrapper, triggerWrapper} = this.$refs
        document.body.appendChild(contentWrapper)
        let {width, height, top, left} = triggerWrapper.getBoundingClientRect()
        let {height: height2} = contentWrapper.getBoundingClientRect()
        console.log(height, height2)
        if(this.position === 'top') {
            contentWrapper.style.left = left + window.scrollX + 'px'
            contentWrapper.style.top = top + window.scrollY + 'px'
        } else if(this.position === 'bottom') {
            contentWrapper.style.left = left + window.scrollX + 'px'
            contentWrapper.style.top = top + height + window.scrollY + 'px'
        } else if(this.position === 'left') {
            contentWrapper.style.left = left + window.scrollX + 'px'
            contentWrapper.style.top = top + (height - height2)/2 + window.scrollY + 'px'
        } else if(this.position === 'right') {
            contentWrapper.style.left = left + width + window.scrollX + 'px'
            contentWrapper.style.top = top + (height - height2)/2 + window.scrollY + 'px'
        }
        
     },
     onClickDocument(e) {
        // TODO: 此处还有 bug , refs.popover 里面获取不到 contentWrapper
        if(this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {
            return
        }
        if(this.$refs.contentWrapper && (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))) {
            return
        }
        this.close()
    },
     open() {
         this.visible = true
         this.$nextTick(() => {
            this.positionContent()
            document.addEventListener('click', this.onClickDocument)
        })
     },
     close() {
        this.visible = false
        // 监听完毕之后就要移除, 不然的话每一次点击都会新增一个监听器
        document.removeEventListener('click', this.onClickDocument)
     },
     onClick(event) {
         if (this.$refs.triggerWrapper.contains(event.target)) {
            //  this.visible = !this.visible
             if(this.visible) {
                this.close()
            } else {
                this.open()
            }
         }
     }
 },
 mounted() {
     
 }
}
</script>

<style scoped lang="scss">
$border-color: #333;
$border-radius: 4px;
.popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
}
.content-wrapper {
    max-width: 20em;
    background: #fff;
    position: absolute;
    z-index: 999;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    // box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.5));
    padding: .5em 1em;
    word-break: break-all;
    &::before, &::after {
        content: '';
        display: block;
        border: 10px solid transparent;
        width: 0;
        height: 0px;
        position: absolute;
    }
    &.position-top {
        transform: translateY(-100%);
        margin-top: -10px;
        &::before, &::after {
            left: 10px;
        }
        &::before {
            border-top-color: black;
            top: 100%;
        }
        &::after {
            border-top-color: white;
            top: calc(100% - 1px);
        }
    }
    &.position-bottom {
        margin-top: 10px;
        &::before, &::after {
            left: 10px;
        }
        &::before {
            border-bottom-color: black;
            bottom: 100%;
        }
        &::after {
            border-bottom-color: white;
            bottom: calc(100% - 1px);
        }
    }
    &.position-left {
        transform: translateX(-100%);
        margin-left: -10px;
        &::before, &::after {
            top: 50%;
            transform: translateY(-50%);
        }
        &::before {
            border-left-color: black;
            left: 100%;
        }
        &::after {
            border-left-color: white;
            left: calc(100% - 1px);
        }
    }
    &.position-right {
        margin-left: 10px;
        &::before, &::after {
            top: 50%;
            transform: translateY(-50%);
        }
        &::before {
            border-right-color: black;
            right: 100%;
        }
        &::after {
            border-right-color: white;
            right: calc(100% - 1px);
        }
    }
}
</style>
