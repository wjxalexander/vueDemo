<template>
  <div class="layout" :class='layoutClass'>
    <slot> </slot>
  </div>

</template>
<script>
export default {
  name:'layout',
  data(){
    return {
      layoutClass: {
        hasSider: false
        //注意vue添加class的方法
      }
    }
  },
  mounted(){
    // console.log(this.$children)
    this.$children.forEach((vm)=>{
      if(vm.$options.name ==='sider'){
        this.layoutClass.hasSider = true
      }
    })
  }
}
</script>
<style lang="scss" scoped>
  .layout{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    &.hasSider{
      flex-direction: row;
    }
  }
</style>
