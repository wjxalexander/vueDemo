<template>
  <div class= 'popover' @click="changeState" ref="popover">
    <div ref='contentwrap' class="content-wrapper" v-if="visible" :class="{[`position-${position}`]:true}" >
      <slot name='content' :close='close'></slot>
    </div>
    <span ref='triggerwrap' style="display:inline-flex">
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
  props:{
    position:{
      type:String,
      default:'top',
      validator(value){
        return ['top','bottom','left','right'].indexOf(value)>=0
      }
    }
  },
  methods: {
    postionContent() {
      document.body.appendChild(this.$refs.contentwrap);
      let {width, height, top, left} = this.$refs.triggerwrap.getBoundingClientRect();
      if(this.position === 'top'){
        this.$refs.contentwrap.style.left = left + window.scrollX + "px";
        this.$refs.contentwrap.style.top = top + window.scrollY + "px";
      }else if(this.position ==='bottom'){
        this.$refs.contentwrap.style.left = left + window.scrollX + "px";
        this.$refs.contentwrap.style.top = top + window.scrollY + height + "px";
      }

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
  max-width: 20em;
  word-break: break-all;
  &.position-top{
      transform: translateY(-100%);
      margin-top: -10px;
  }
}
</style>
