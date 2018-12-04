<template>
  <div class="cascader">
    <div class="trigger">
      <slot></slot>
    </div>
    <div class="popover">
      <div v-for="(item, index) in options" :key="index">
        <cascader-item :source-item="item"></cascader-item>
      </div>
    </div>
  </div>
</template>

<script>
import CascaderItem from './cascader-item'
export default {
  name: 'VioCascader',
  props: {
    options: {
      type: Array
    }
  },
  components: {
    CascaderItem
  },
  data() {
    return {

    }
  },
}
</script>

<style scoped lang="scss">
  @import '/static/var'
</style>
