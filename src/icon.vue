<template>
  <!-- 这里删除了v-if -->
  <svg class="g-icon" aria-hidden="true">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>
<script>
import './svg'//svg的本地化
export default {
    props:['name']
};
</script>
<style lang="scss" scoped>
    .g-icon {
        width: 1em;
        height: 1em;
    }
</style>

