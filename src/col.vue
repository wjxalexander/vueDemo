<template>
  <div class="col" :class="colClasses" :style="colStyle">
    <slot> </slot>
  </div>
</template>
<script>
export default {
  name: "vueCol",
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    }
  },
  data() {
    //一开始就去读data,data中的属性是不会变的
    return {
      gutter: 0
      //  没毛用： colStyle:{
      //     paddingLeft: this.gutter / 2 + 'px',
      //     paddingRight: this.gutter / 2 + 'px'
      //   }
    };
  },
  computed: {
    colClasses() {
      let { span, offset } = this; //结构
      return [span && `col-${span}`, offset && `offset-${offset}`];
    },
    colStyle() {
      // console.log('gutter变了我也要变')
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px"
      };
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.col {
  $class-prefix: col-;
  //说明class前缀
  @for $n from 1 through 24 {
    //.col.col-1
    //.col.col-2
    //.col.col-3
    &.#{$class-prefix}#{$n} {
      //col-n
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    //.col.col-1
    //.col.col-2
    //.col.col-3
    &.#{$class-prefix}#{$n} {
      //col-n
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>

