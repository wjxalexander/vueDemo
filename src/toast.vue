<template>
  <div class="toast" ref="wrapper">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">
      {{closeButton.text}}
    </span>
  </div>
  
</template>

<script>
export default {
  //构造组件的选项
  name: "toast",
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 50
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: "close",
          callback: toast => {
            toast.close();
          }
        };
      }
    },
    enableHtml:{
      type: Boolean,
      default: false
    }
  },
  created() {
    console.log(this.closeButton);
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close();
      }, this.autoCloseDelay * 1000);
    };
    //mounted过后wrapper的高度可能为0，需要异步解决，settimeOut tricky
    this.$nextTick(()=>{
      this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`
    })

  },
  methods: {
    endClose(){

    },
    close() {
      this.$el.remove();
      this.$destroy();
    },
    onClickClose() {
      this.close();
      this.closeButton.callback();
    }
  }
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
  $toast-min-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  .toast {
    font-size: $font-size; min-height: $toast-min-height; line-height: 1.8;
    position: fixed; top: 0; left: 50%; transform: translateX(-50%); display: flex;
    color: white; align-items: center; background: $toast-bg; border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50); padding: 0 16px;
    .message {
      padding: 8px 0;
    }
    .close {
      padding-left: 16px;
      flex-shrink: 0;
    }
    .line {
      height: 100%;
      border-left: 1px solid #666;
      margin-left: 16px;
    }
  }
</style>
