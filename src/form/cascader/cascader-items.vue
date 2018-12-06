<template>
  <div class="cascader-items" :style="{height}">
    <div class="left">
      <div class="label" v-for="(item, index) in items" :key="index" @click="leftSelected = item">
        {{item.name}}
        <Icon class="icon" v-if="item.children" name="right1"></Icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <vio-cascader-items :items="rightItems" :height="height"></vio-cascader-items>
    </div>
  </div>
</template>

<script>
import Icon from './../../basic/icon/icon'
export default {
  name: 'VioCascaderItems',
  props: {
    items: {
      type: Array
    },
    height: {
      type: String
    }
  },
  components: {
    Icon
  },
  data() {
    return {
      leftSelected: null
    }
  },
  computed: {
    rightItems() {
      if(this.leftSelected && this.leftSelected.children) {
        return this.leftSelected.children
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import '/static/var';
  .cascader-items {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: 150px;
    .left {
      height: 100%;
      padding: .3em 0;
    }
    .right {
      height: 100%;
      border-left:  1px solid $border-color-light;
    }
    .label {
      padding: .3em 1em;
      white-space: nowrap;
      display: flex;
      align-items: center;
      .icon {
        margin-left: 1em;
        fill: $icon-light;
      }
    }
  }
</style>
