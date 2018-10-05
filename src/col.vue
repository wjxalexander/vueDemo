<template>
  <div class="col" :class="colClasses" :style="colStyle">
    <slot> </slot>
  </div>
</template>
<script>
let validator = value => {
  let keys = Object.keys(value);
  let valid = true;
  keys.forEach(key => {
    if (!["span", "offset"].includes(key)) {
      valid = false;
    }
  });
  return valid;
};

export default {
  name: "vueCol",
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
    phone: { type: Object, validator },
    ipad: { type: Object, validator },
    narrowPc: { type: Object, validator },
    pc: { type: Object, validator },
    widePc: { type: Object, validator }
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
      let { span, offset, phone, ipad, narrowPc, pc, widePc } = this; //结构
      let phoneClass = [];
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        ...(phone && [`col-phone-${phone.span}`]),
        ...(ipad && [`col-ipad-${ipad.span}`]),
        ...(narrowPc && [`col-narrow-pc-${narrowPc.span}`]),
        ...(pc && [`col-pc-${pc.span}`]),
        ...(widePc && [`col-wide-pc-${widePc.span}`])
      ];
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
  @media (max-width: 576px) {
    $class-prefix: col-phone-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-phone-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
  }

  @media (min-width: 576px) and(max-width: 768px) {
    $class-prefix: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 769px) and(max-width: 992px) {
    $class-prefix: col-narrowPc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 769px) and (max-width: 992px) {
      $class-prefix: col-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 993px) and (max-width: 1200px) {
      $class-prefix: col-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 1201px) {
      $class-prefix: col-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
}
</style>

