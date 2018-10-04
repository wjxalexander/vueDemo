<template>
  <div class="input" :class="{'error':error}">
    <input type="text" v-bind:value = 'value' :disabled = 'disabled' :readonly = 'readonly'
    @change="$emit('change',$event.target.value)"
    @input="$emit('input', $event.target.value)"
    @focus="$emit('focus', $event.target.value)"
    @blur="$emit('blur', $event.target.value)">
    <!-- input本身是拥有change事件的 当用户change后会出现一个事件，这个$event就是浏览器原生触发的事件 $event会被透传过去 还可以传多个参数-->
    <!-- 注意这个template的用法：无需额外的div解决两个v-if -->
    <template v-if="error"> 
      <g-icon name = 'error-circle' class="icon-error"></g-icon>
      <span class="error-msg">{{error}}</span>  
    </template>
  </div>
</template>
<script>
import Icon from "./icon";
export default {
  components: {
    "g-icon": Icon
  },
  name: "user-input",
  props: {
    value: {
      type: String
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
      type: String
    }
    //错了之前 disable 需要在props；里面
  }
};
</script>
<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-hover-color: #666;
$border-radius: 4px;
$font-size: 12px;
$box-focus-color: rgba(0, 0, 0, 0.5);
$red: #f1453d;
.input { font-size: $font-size; display: inline-block; > :not(:last-child){margin-right: 0.5em; } &.error { display: inline-flex; justify-content: center; align-items: center; > input { border-color: red; } .icon-error, { fill: red; } .error-msg{ color: red; } } > input { height: 32px; border: 1px solid $border-color; border-radius: $border-radius; padding: 0 8px; font-size: inherit; &:hover { border-color: $border-hover-color; } &:focus { box-shadow: inset 0 1px 3px $box-focus-color; outline: none; } &[disabled] { border-color: #aaa; color: #aaa; cursor: not-allowed; } } }
</style>

