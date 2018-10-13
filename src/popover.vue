<template>
  <div class= 'popover' @click="changeState" ref="popover">
    <div ref='contentwrap' class="content-wrapper" v-if="visible" >
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
    };
  },
  methods: {
    postionContent() {
      document.body.appendChild(this.$refs.contentwrap);
      let {width, height, top, left} = this.$refs.triggerwrap.getBoundingClientRect();
      this.$refs.contentwrap.style.left = left + window.scrollX + "px";
      this.$refs.contentwrap.style.top = top + window.scrollY + "px";
    },
    ListenToDoc() {
      let eventHandler = e => {
        if (this.$refs.contentwrap&&!this.$refs.contentwrap.contains(e.target)) {
          this.close(eventHandler)
        }
      };
      document.addEventListener("click", eventHandler);
    },
    close(node){
      this.visible = false
      document.removeEventListener("click", node);

    },
    onOpen(){
      this.visible = true;
      this.$nextTick(() => {
          this.postionContent();
          this.ListenToDoc();
        });
  },
    changeState(event) {
      if (this.$refs.triggerwrap.contains(event.target)) {
        if (this.visible === true) {
          this.close()
        }else{
         this.onOpen()
        }
      } 
    }
  },
  mounted() {
    console.log(this.$refs.contentwrap);
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
  transform: translateY(-100%);
}
</style>
