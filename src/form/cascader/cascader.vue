<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <!-- <slot></slot> -->
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
       <cascader-items :items="options" class="popover" :height="popoverHeight"></cascader-items>
    </div>
  </div>
</template>

<script>
import CascaderItems from './cascader-items'
export default {
  name: 'VioCascader',
  props: {
    options: {
      type: Array
    },
    popoverHeight: {
      type: String
    }
  },
  components: {
    CascaderItems
  },
  data() {
    return {
      popoverVisible: false
    }
  }
}
</script>

<style scoped lang="scss">
  .cascader {
    position: relative;
    > .trigger {
      height: 32px;
      width: 100px;
      border: 1px solid #000;
    }
    > .popover-wrapper {
      position: absolute;
      top: 100%;
      left: 0;
      z-index: 99;
      background: #fff;
      display: flex;
      @extend .box-shadow;
    }
  }
</style>
