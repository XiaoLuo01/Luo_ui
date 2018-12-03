<template>
    <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: "VioTabsItem",
  inject: ['eventBus'],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String|Number,
      required: true
    }
  },
  data() {
    return {
      active: false
    }
  },
  computed: {
    classes() {
      return {
        active: this.active,
        disabled: this.disabled
      }
    }
  },
  components: {},
  methods: {
    onClick() {
      if(this.disabled) return
      this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
      this.$emit('click', this)
    }
  },
  created() {
    this.eventBus && this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name
    })
  },
  // mounted() {
  //   this.eventBus.$emit('update:selected', this.name)
  // }
}
</script>

<style scoped lang="scss">
$blue: blue;
$disabled-text-color: grey;
.tabs-item {
  // flex-grow: 1;
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  &.active {
    font-weight: bold;
    color: $blue;
  }
  &.disabled {
    color: $disabled-text-color;
    cursor: not-allowed;
  }
}
</style>