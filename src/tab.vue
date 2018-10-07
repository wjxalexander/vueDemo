<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "tabs",
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertiacal"].indexOf(value) >= 0;
      }
    }
  },
  created() {
  },
  data() {
    return {
      eventBus: new Vue()
    };
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  mounted() {
    if(this.$children === 0){
      console.warn('tabs没有子组件')
    }
    this.$children.forEach((vm)=>{
      if(vm.$options.name==='tabNav'){
        vm.$children.forEach((item)=>{
          if(item.$options.name ==='tabsItem' && item.name === this.selected){
                 this.eventBus.$emit('update:selected', this.selected, item)//事件发布
          }
        })
      }
    })
  }
};
</script>

<style lang="scss" scoped>
.tabs {
}
</style>
