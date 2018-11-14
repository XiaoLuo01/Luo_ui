<template>
    <div class="col" :class="[`col-${span}`]">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'VioCol',
    props: {
        span: {
            type: [Number, String]
        }
    },
    data() {
    return {

    }
    },
    components: {

    }
}
</script>

<style scoped lang="scss">
.col {
  width: 50%;
  height: 100px;
  background: rgba(0, 153, 229, 0.7);
  border: 1px solid blueviolet;

  $class: col-;

  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
}
</style>
