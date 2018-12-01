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
    },
    selected: {
      type: String
    }
  },
  data() {
    return {
      eventBus: new Vue
    }
  },
  provide() {
    // if(this.accordion) {
      return {
        eventBus: this.eventBus
      }
    // }
  },
  mounted() {
    this.eventBus.$emit('updata:selected', this.selected)
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
