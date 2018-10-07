<template>
  <div class="tab-pane">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tabPane',
  inject: ['eventBus'],
  created(){
    this.eventBus.$on('updated:selected',(name)=>{
      console.log(name)
    })
  }
}
</script>

<style lang="scss" scoped>
  .tabs-pane{

  }
</style>
