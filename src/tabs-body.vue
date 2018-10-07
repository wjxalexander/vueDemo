<template>
  <div class="tab-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tab-body',
  inject: ['eventBus'],
  created(){
    console.log(this.eventBus)
  }
}
</script>

<style lang="scss" scoped>
  .tab-body{

  }
</style>
