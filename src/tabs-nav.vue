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
  created(){
   this.eventBus.$on('update:selected',(name,vm)=>{
     console.log(name)
     console.log(vm.$el.getBoundingClientRect().height)
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
    >.line{
      position: absolute;
      bottom: 0;
      border-bottom: $blue 1px solid;
       width: 100px;
    }
    > .actions-wrapper{
      margin-left: auto;
    }

  }
</style>
