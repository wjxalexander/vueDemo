<template>
  <div class="tabs-nav">
    <slot></slot>
    <div class="line" ref = 'line'></div>
    <div class="actions-wrapper">
          <slot name = 'actions' ></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabNav',
  inject: ['eventBus'],
  mounted(){
   this.eventBus.$on('update:selected',(name,vm)=>{
     let {width,left} = vm.$el.getBoundingClientRect()
     this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left}px`
   })
  }
}
</script>

<style lang="scss" scoped>
  $tab-height: 40px;
  $blue: blue;
  .tabs-nav{
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    border-bottom: 1px solid #ddd;
    >.line{
      position: absolute;
      bottom: 0;
      border-bottom: $blue 1px solid;
       transition: all 300ms;
    }
    > .actions-wrapper{
      margin-left: auto;
    }

  }
</style>
