<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: "VioTabs",
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(value) {
        return ['horizontal', 'vertical'].indexOf(value) >= 0
      }
    }
  },
  data() {
    return {}
  },
  components: {},
  created() {
    // this.$emit('update:selected', 'xxx')
  }
}
</script>

<style scoped lang="scss">
</style>
