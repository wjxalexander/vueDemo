<template>  
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>  
</template>
<script>
export default {
  name: "g-row",
  props: {
    gutter: {
      type: [String, Number],
      default: 0
    },
    align:{
      type: String,
      validator(value){
        return ["left","right","center"].includes(value)
      },
      default: 'left'
    }
  },
  computed: {
    rowStyle() {
      let { gutter } = this;
      return {
        marginLeft: -gutter / 2 + "px",
        marginRight: -gutter / 2 + "px"
      };
    },
    rowClass(){
      let {align} = this
      return[align && `align-${align}`]
    }
  },
  created() {
    console.log("row cretd");
    //这时没有儿子，
  },
  mounted() {
    console.log("row mounted"); 
    //放在DOM里了
    this.$children.forEach(vm => {
      vm.gutter = this.gutter;
      //获取子元素传gutter
    });
  }
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  &.align-left{
    justify-content: flex-start;
  }
  &.align-center{
    justify-content: center;
  }
  &.align-right{
    justify-content: flex-end;
  }
}

</style>
