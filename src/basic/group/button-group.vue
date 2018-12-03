<template>
 <div class="v-button-group">
    <slot></slot>
 </div>
</template>

<script>
export default {
 data() {
  return {

  }
 },
 mounted() {
    for(let key of this.$el.children) {
        let name = key.nodeName.toLowerCase()
        if(name !== 'button') {
            console.warn(`v-button-group 的子元素应该全是 v-button, 但是你写的是 ${name}`)
        }
    }
 },
 components: {
 }
}
</script>

<style scoped lang="scss">
.v-button-group {
    display: inline-flex;
    vertical-align: middle;
    > .v-button {
        border-radius: 0;
        &:not(:first-child) {
            margin-left: -1px;
        }
        &:first-child {
            border-top-left-radius: var(--border-radius);
            border-bottom-left-radius: var(--border-radius)
        }
        &:last-child {
            border-top-right-radius: var(--border-radius);
            border-bottom-right-radius: var(--border-radius)
        }
        &:hover {
            position: relative;
            z-index: 1;
        }
    }
}
</style>
