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
  created() {
    this.eventBus.$on('update:selected', (name, vm) => {

    })
  }
}
</script>

<style scoped lang="scss">
$tab-height: 40px;
$border-bottom: blue;
.tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 2px solid $border-bottom;
    width: 100px;
  }
  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>
