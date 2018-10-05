<template>
<transition name='slide'> 
  <div class="sider" v-if='visible'>
    <slot> </slot>
    <button @click="visible=!visible">close</button>
  </div>
</transition>
</template>
<script>
export default {
  name: "sider",
  data() {
    return {
      visible: true
    };
  }
  // methods:{
  //   hide()
  // }
};
</script>
<style lang="scss" scoped>
.sider {
  position: relative;
  > button {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: all .5s;
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
 margin-left: -200px;
}
</style>
