<template>
  <div class= 'popover' @click.stop="changeState">
    <div ref='contentwrap' class="content-wrapper" v-if="visible" @click.stop>
      <slot name='content'></slot>
    </div>
    <span ref='triggerwrap'>
      <slot ></slot>
    </span>
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
          document.body.appendChild(this.$refs.contentwrap)
          let {width,height,top, left}=this.$refs.triggerwrap.getBoundingClientRect()
          this.$refs.contentwrap.style.left = left + window.scrollX+ 'px'
          this.$refs.contentwrap.style.top = top + window.scrollY+ 'px'
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
  },
  mounted(){
     console.log(this.$refs.contentwrap)
  }
};
</script>


<style lang="scss" scoped>
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
    position: absolute;
    background: #ccc;
    border: 1px solid red;
    transform:translateY(-100%)
  }
</style>
