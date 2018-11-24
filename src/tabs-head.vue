<template>
    <div class="tabs-head">
        <slot></slot>
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
    console.log(this.eventBus);
  }
}
</script>

<style scoped lang="scss">
$tab-height: 40px;
.tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  align-items: center;
  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>
