<template>
  <div class= 'popover' @click.stop="changeState">
    <div class="content-wrapper" v-if="visible" @click.stop>
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
    }
  },
  methods: {
    changeState() {
      console.log(this.visible);
      this.visible = !this.visible;
      if (this.visible === true) {
        this.$nextTick(() => {
          let eventHandler = () => {
            this.visible = false;
            console.log("document隐藏");
            document.removeEventListener("click", eventHandler);
          };
          document.addEventListener("click", eventHandler);
        });
      } else {
        console.log("vm隐藏");
      }
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
