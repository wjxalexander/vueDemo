<template>
<!-- 不能直接使用slot，放在一个根节点之下 -->
<div class="buttongroup">
  <slot></slot>        
</div>
</template>
<script>
export default {
  // mounted:当该元素出现在页面中触发的函数
    mounted(){
      for(let node of this.$el.children){
        let name = node.nodeName.toLowerCase()
        if(name !== 'button'){
          console.warn(`g-button的子元素必须是g-button,但是 这里是${name}`)
        }
      }
    }
}
</script>

<style lang="scss" scoped>
.buttongroup{
  display:inline-flex;
  vertical-align: middle;
  >.g-button{
    border-radius: 0;
    &:not(:first-child){
      margin-left: -1px;
    }
    &:first-child{
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child{
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
  }
  &:hover{
    position: relative;
    z-index: 1;
  }
}
</style>
