<template>
  <div class="collapse">
        <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'VioCollapse',
  props: {
    accordion: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      
    }
  },
  provide() {
    if(this.accordion) {
      return {
        eventBus: new Vue
      }
    }
  }
}
</script>

<style scoped lang="scss">
$grey: #ddd;
$border-radius: 4px;
.collapse {
  border: 1px solid $grey;
  border-radius: $border-radius;
}
</style>
