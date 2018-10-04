<template>
  <div class="input">
    <input type="text" v-bind:value = 'value' :disabled = 'disabled' :readonly = 'readonly'>
  </div>
</template>
<script>
export default {
  name:'user-input',
  props:{
    value: {
      type: String
    },
    disabled:{
      type: Boolean,
      default: false
    },
    readonly:{
      type:Boolean,
      default:false,
    }
  //错了之前 disable 需要在props；里面
  },
 
}
</script>
<style lang="scss" scoped>
  // --button-height: 32px;
  // --font-size: 14px;
  // --button-bg: white;
  // --button-active-bg: #eee;
  // --border-radius: 4px;
  // --color: #333;
  // --border-color: #999;
  // --border-color-hover: #666; 
  $height: 32px;
  $border-color: #999;
  $border-hover-color: #666;
  $border-radius: 4px;
  $font-size: 12px;
  $box-focus-color: rgba(0,0,0,0.5);

  .input{
    font-size: $font-size;
    display: inline-block;
    >input{
      height: 32px;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      padding: 0 8px;
      font-size: inherit;
      &:hover{
        border-color: $border-hover-color;
      }
      &:focus{
        box-shadow: inset 0 1px 3px $box-focus-color;
        outline: none;
      }
      &[disabled]{
        border-color: #aaa;
        color: #aaa; 
        cursor: not-allowed;
      }
    }
  }
</style>

