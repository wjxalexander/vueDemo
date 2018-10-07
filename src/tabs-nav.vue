<template>
  <div class="tabs-nav">
    <slot></slot>
    <slot name = 'actions'></slot>
  </div>
</template>

<script>
export default {
  name: 'tabNav',
  inject: ['eventBus'],
  created(){
    console.log(this.eventBus)
  }
}
</script>

<style lang="scss" scoped>
  .tabs-nav{

  }
</style>
