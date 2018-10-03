<template>
   <!-- 冒号是v-bind的缩写，··字符串模板
    ${icon}为占位符
    插槽slot
    对于iconPosition: 有三种情况： ‘undefined‘：true， ‘left’：true；’right‘：true’
    -->
   <button class = "g-button" :class="{[`icon-${iconPosition}`]:true}">
    <g-icon v-if="icon" :name = 'icon'></g-icon>
    <div class = 'content'>
      <slot></slot>
    </div>
  </button>

</template>
<script>
export default {
  //设置接受的参数
//   props: ["icon", "iconPosition"],避免undefined的出现
  props: {
      icon:{},
      iconPosition:{
        type: String,
        default: "left",
        // 属性检查器：validator
        validator(value){
          return (value=== "left" || value=== "right")
        }
        //   left 是字符串！
      }
  }
}; 
</script>
<style lang = "scss">
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 0.5em; /*CSS技巧不写死宽度*/
  font: inherit;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background-color: var(--button-bg);
  display: inline-flex; justify-content: center; align-items: center;
  vertical-align: middle;
  &:hover {border-color: var(--border-color-hover);}
  &:active {background-color: var(--button-active-bg);}
  &:focus {outline: none;}
  > .content{order: 2;}
  > .icon{order: 1; margin-right: .3em}
  
  &.icon-right{
    > .content{order: 1;}
    > .icon{order: 2; margin-right: 0em; margin-left: .3em}
  }
}
</style>
