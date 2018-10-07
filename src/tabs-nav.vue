<template>
  <div class="tabs-nav">
    <slot></slot>
    <slot name = 'actions'></slot>
  </div>
</template>

<script>
export default {
  name: 'tabNav'
}
</script>

<style lang="scss" scoped>
  .tabs-nav{

  }
</style>
