<template>
    <div class="col" :class="colClass" :style="colStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: "VioCol",
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    }
  },
  data() {
    return {
      gutter: 0
    }
  },
  computed: {
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px"
      }
    },
    colClass() {
      let { span, offset } = this
      return [span && `col-${span}`, offset && `offset-${offset}`]
    }
  },
  components: {}
}
</script>

<style scoped lang="scss">
.col {
  width: 50%;
  height: 50px;
  //   background: rgba(0, 153, 229, 0.7);
  //   border: 1px solid blueviolet;

  $class: col-;

  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: ($n / 24) * 100%;
    }
  }

  $class_prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class_prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>
