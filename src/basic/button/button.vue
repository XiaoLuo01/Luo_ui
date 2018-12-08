<template>
    <button class="v-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
      <v-icon class="icon" v-if="icon && !loading" :name="icon"></v-icon>
      <v-icon class="loading icon" name="loading" v-if="loading"></v-icon>
      <div class="v-button-content">
        <slot></slot>
      </div>
    </button>
</template>

<script>
import Icon from './../icon/icon'
export default {
  name: "VioButton",
  data() {
    return {}
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return value === 'left' || value === 'right'
      }
    }
  },
  components: {
    'v-icon': Icon
  }
}
</script>

<style scoped lang="scss">
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.v-button {
  font-size: $font-size;
  height: $button-height; 
  padding: 0 1em;
  border-radius: $border-raduis; 
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex; 
  justify-content: center; 
  align-items: center;
  vertical-align: middle;
  cursor: pointer;
  &:hover {
     border-color: $border-color-hover;
  }
  &:active {
    background-color: $button-active-bg;
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    margin-right: .3em;
  }
  > .v-button-content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: .3em;
    }
    > .v-button-content {
      order: 1;
    }
  }
  .loading {
    animation: spin 2s infinite linear;
  }
}
</style>

