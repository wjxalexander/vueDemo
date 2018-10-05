<template>  
  <div class="row" :style="{marginLeft:-gutter/2+'px', marginRight:-gutter/2+'px',}">
    <slot></slot>
  </div>  
</template>
<script>
export default {
  name: "g-row",
  props:{
    gutter:{
      type:[String,Number],
      default:0
    }
  },
  created(){
    console.log('row cretd') 
    //这时没有儿子，
  },
  mounted(){
    console.log('row mounted') 
    //放在DOM里了
    this.$children.forEach((vm)=>{
      vm.gutter = this.gutter;
      //获取子元素传gutter
    })
  }
}
</script>

<style lang="scss" scoped>
  .row{
    display: flex;
  }
</style>
