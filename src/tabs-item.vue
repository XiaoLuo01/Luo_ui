<template>
    <div class="tabs-item">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: "VioTabsItem",
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  components: {}
}
</script>

<style scoped lang="scss">
</style>