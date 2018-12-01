<template>
 <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
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
 components: {

 },
 methods: {
     positionContent() {
        document.body.appendChild(this.$refs.contentWrapper)
        let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
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
    transform: translateY(-100%);
    margin-top: -10px;
    padding: .5em 1em;
    word-break: break-all;
    &::before, &::after {
        content: '';
        display: block;
        border: 10px solid transparent;
        width: 0;
        height: 0px;
        position: absolute;
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
</style>
