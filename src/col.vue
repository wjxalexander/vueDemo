<template>
  <div class="col">
    <slot> </slot>
  </div>
</template>
<script>
export default {
  name:'vueCol',
  props:{
    span: {
      type:Number,
    }
  } 
}
</script>

<style lang="scss" scoped>
  .col{
    height: 100px;
    background:#cccc;
    width: 50%;
    border: 1px solid red;
    $class-prefix: col-;
  //说明class前缀
    @for $n from 1 through 24{
    //.col.col-1
    //.col.col-2
    //.col.col-3
      .#{$class-prefix}#{$n}{
      //col-n
        width: ($n / 24) * 100%
       }
    }
  }
</style>

