<template>
<!-- 不能直接使用slot，放在一个根节点之下 -->
<div class="buttongroup">
  <slot></slot>        
</div>
</template>
<script>
export default {
    
}
</script>

<style lang="scss">
.buttongroup{
  display:inline-flex;
  vertical-align: middle;
  >.g-button{
    border-radius: 0;
    margin-left: -1px;
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
