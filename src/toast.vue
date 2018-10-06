<template>
  <div class="toast" ref="wrapper" :class="toastClasses">
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
      default: 5
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: "close",
          callback:undefined
        }
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position:{
      type: String,
      validator(key){
        return (['top','middle','bottom'].indexOf(key)>=0)
      },
      default:'top'
    },
  },
  created() {
    console.log(this.closeButton);
  },
  mounted() {
    this.endClose();
    this.updateLineStyle();
    //mounted过后wrapper的高度可能为0，需要异步解决，settimeOut tricky
  },
  computed:{
    toastClasses(){
      return {
        [`position-${this.position}`]:true
        }
    }

  },
  methods: {
    endClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000);
      }
    },
    updateLineStyle() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`;
      });
    },
    close() {
      this.$el.remove();
      this.$emit('close')
      this.$destroy();
    },
    onClickClose() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
          this.closeButton.callback(this)//this === toast实例
      }
    }
  }

};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
@keyframes fadein {
  0% {opacity: 0; transform: translateY(100%)}
  100% {opacity: 1;transform: translateY(0%)}
}
.toast {
  animation: fadein 1s;
  font-size: $font-size;
  min-height: $toast-min-height;
  line-height: 1.8;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  color: white;
  align-items: center;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  padding: 0 16px;
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
  &.position-top{
     top: 0;
     transform: translateX(-50%);
  }
  &.position-bottom{
     bottom: 0;
     transform: translateX(-50%);
  }
  &.position-middle{
     top: 50%;
     transform: translate(-50%,-50%);
  }
}
</style>
