<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
let validator = value => {
  let keys = Object.keys(value)
  let valid = true
  keys.forEach(key => {
    if (!["span", "offset"].includes(key)) {
      valid = false
    }
  })
  return valid
}
export default {
  name: "VioCol",
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
    phone: {
      type: Object,
      validator
    },
    ipad: {
      type: Object,
      validator
    },
    narrowPc: {
      type: Object,
      validator
    },
    pc: {
      type: Object,
      validator
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
      let { span, offset, phone, ipad, narrowPc, pc } = this
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        ...(phone && [`col-phone-${phone.span}`]),
        ...(ipad && [`col-ipad-${ipad.span}`]),
        ...(narrowPc && [`col-narrowPc-${narrowPc.span}`]),
        ...(pc && [`col-pc-${pc.span}`])
      ]
    }
  },
  components: {}
}
</script>

<style scoped lang="scss">
.col {
  // width: 50%;
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

  @media (max-width: 576px) {
    $class: col-phone-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $class_prefix: offset-phone-;
    @for $n from 1 through 24 {
      &.#{$class_prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }

  @media (min-width: 576px) and (max-width: 768px) {
    $class: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $class_prefix: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$class_prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }

  @media (min-width: 769px) and (max-width: 992px) {
    $class: col-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $class_prefix: offset-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class_prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    $class: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $class_prefix: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$class_prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
}
</style>
