<template>
 <div class="popover" @click.stop="xxx">
    <div class="content-wrapper" v-if="visible" @click.stop>
        <slot name="content"></slot>
    </div>
    <slot></slot>
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
                 let eventHandler = () => {
                     this.visible = false
                     // 监听完毕之后就要移除, 不然的话每一次点击都会新增一个监听器
                     document.removeEventListener('click', eventHandler)
                 }
                 document.addEventListener('click', eventHandler)
             })
         }
     }
 }
}
</script>

<style scoped lang="scss">
.popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
    .content-wrapper {
        position: absolute;
        bottom: 100%;
        left: 0;
        border: 1px solid red;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5)
    }
}
</style>
