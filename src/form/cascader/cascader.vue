<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <!-- <slot></slot> -->
    </div>
    <div class="popover" v-if="popoverVisible">
       <cascader-items :items="options"></cascader-items>
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
    }
  },
  components: {
    CascaderItems
  },
  data() {
    return {
      popoverVisible: false,
      firstLevelSelected: null,
      secondLevelSelected: null
    }
  },
  computed: {
    secondLevelItems() {
      if (this.firstLevelSelected) {
        return this.firstLevelSelected.children
      } else {
        return []
      }
    },
    thirdLevelItems() {
      if (this.secondLevelSelected) {
        return this.secondLevelSelected.children
      } else {
        return []
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import '/static/var';
  .cascader {
    > .trigger {
      height: 32px;
      width: 100px;
      border: 1px solid red;
    }
    > .popover {
      height: 200px;
      // width: 240px;
      border: 1px solid blue;
      display: flex;
      > .label {
        white-space: nowrap;
      }
    }
  }
</style>
