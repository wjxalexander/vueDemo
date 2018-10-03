<template>
   <!-- 冒号是v-bind的缩写，··字符串模板
    ${icon}为占位符
    插槽slot
    对于iconPosition: 有三种情况： ‘undefined‘：true， ‘left’：true；’right‘：true’
    :name = 'icon'： 变量icon
    通过flex布局来确定icon的左右位置
     @click="$emit('click')": 当button被点击是触发点击事件，否则不会触发
    -->
   <button class = "g-button" :class="{[`icon-${iconPosition}`]:true}"
   @click="clickEvent">
     <g-icon class="icon" v-if="icon&& !loading" :name = 'icon'></g-icon>
     <g-icon class="icon loading" v-if="loading" name = 'loading'></g-icon>
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
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: "left",
      // 属性检查器：validator检查用户的输入是否合规
      validator(value) {
        return value === "left" || value === "right";
      }
      //   left 是字符串！
    }
  },
  methods:{
    clickEvent(){
      this.$emit('click')
    }
  }
};
</script>
<style lang = "scss">
@keyframes rotate{
  from{
    transform: rotate(-360deg);
  }
}
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 0.5em; /*CSS技巧不写死宽度*/
  font: inherit;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background-color: var(--button-bg);
  display: inline-flex;  justify-content: center;
  align-items: center;  vertical-align: middle;
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-right: 0.3em;
  }
  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-right: 0em;
      margin-left: 0.3em;
    }
  }
  .loading{
    animation: rotate 1.5s infinite linear;
  }
}
</style>
