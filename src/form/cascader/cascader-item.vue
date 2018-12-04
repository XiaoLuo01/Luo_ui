<template>
  <div class="cascader-item">
    {{sourceItem.name}}
    <cascader-item v-if="sourceItem.children" v-for="(item, index) in sourceItem.children" :key="index" :source-item="item"></cascader-item>
  </div>
</template>

<script>
export default {
  name: 'cascaderItem',
  props: {
    sourceItem: {
      type: Object
    }
  },
  data() {
    return {
      
    }
  },
}
</script>

<style scoped lang="scss">
  .cascader-item {
    border: 1px solid red;
    margin: 10px;
  }
</style>
