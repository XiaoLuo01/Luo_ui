<template>
 <div class="popover" @click.stop="xxx">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible" @click.stop>
        <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
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
     xxx() {
         this.visible = !this.visible
         if(this.visible) {
             // 监听外面的点击事件
             this.$nextTick(() => {
                 document.body.appendChild(this.$refs.contentWrapper)
                 let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
                 console.log(left, top)
                 this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
                 this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
                 let eventHandler = () => {
                     this.visible = false
                     // 监听完毕之后就要移除, 不然的话每一次点击都会新增一个监听器
                     document.removeEventListener('click', eventHandler)
                 }
                 document.addEventListener('click', eventHandler)
             })
         }
     }
 },
 mounted() {
     
 }
}
</script>

<style scoped lang="scss">
.popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
}
.content-wrapper {
    width: 200px;
    position: absolute;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    transform: translateY(-100%);
}
</style>
