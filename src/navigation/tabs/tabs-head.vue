<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
          <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: "VioTabsHead",
  inject: ['eventBus'],
  data() {
    return {}
  },
  components: {},
  mounted() {
    this.eventBus.$on('update:selected', (name, vm) => {
      let {width, height, top, left} = vm.$el.getBoundingClientRect()
      let offsetLeft = vm.$el.offsetLeft
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${offsetLeft}px`
    })
  }
}
</script>

<style scoped lang="scss">
$tab-height: 40px;
$blue: blue;
$border-color: #ddd;
.tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  border-bottom: 1px solid $border-color;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 2px solid $blue;
    transition: all 350ms;
  }
  > .actions-wrapper {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
  }
}
</style>
