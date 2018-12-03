<template>
    <div class="wrapper" :class="{error}">
        <input :value="value" :disabled="disabled" :readonly="readonly" type="text" @change="$emit('change', $event.target.value)" @input="$emit('input', $event.target.value)" @focus="$emit('focus', $event.target.value)" @blur="$emit('blur', $event.target.value)">
        <template v-if="error">
            <Icon name="error" class="icon-error"></Icon>
            <span class="error-msg">{{error}}</span>
        </template>
    </div>
</template>

<script>
import Icon from "./../../basic/icon/icon"
export default {
  name: "VioInput",
  data() {
    return {}
  },
  props: {
    value: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: ""
    }
  },
  components: {
    Icon
  }
}
</script>

<style scoped lang="scss">
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-raduis: 4px;
$font-size: 12px;
$borx-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f1453d;
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 0.5em;
  }
  &.error {
    > input {
      border-color: $red;
    }
  }
  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-raduis;
    padding: 0 8px;
    font-size: inherit;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $borx-shadow-color;
    }
    &[disabled],
    &[readonly] {
      border-color: #aaa;
      color: #aaa;
      cursor: not-allowed;
    }
  }
  .icon-error {
    fill: $red;
  }
  .error-msg {
    color: $red;
  }
}
</style>
