<template>
  <div class= 'popover' @click="changeState">
    <div class="content-wrapper" v-if="visible">
      <slot name='content'></slot>
    </div>
    <slot ></slot>
  </div>
</template>
<script>
export default {
  name: "popover",
  data() {
    return {
      visible: false
    };
  },
  methods: {
    changeState() {
      let _this = this;
      console.log("visble change1");
      this.visible = !this.visible;
      setTimeout(() => {
        let eventHandler = () =>{
          this.visible =false
          document.removeEventListener('click',eventHandler)
        }
        document.addEventListener('click',eventHandler)
      }, 1000);
    }
  }
};
</script>


<style lang="scss" scoped>
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
  > .content-wrapper {
    position: absolute;
    bottom: 100%;
    left: 0;
    background: #ccc;
    border: 1px solid red;
  }
}
</style>
