<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name:'collapse',
  props:{
    selected:{
      type: Array,
    },
    single:{
      type:Boolean,
    }
  },
  data(){
    return {
      eventBus: new Vue(),
    }
  },
  provide(){
    return{
      eventBus: this.eventBus
    }
  },
  mounted(){
    console.log(this.selected)
    this.eventBus.$emit('update:selected',this.selected)
    this.eventBus.$on('update:addselected',name=>{
      this.selected.push(name)
      this.$emit('update:selected',this.selected)
      this.eventBus.$emit('update:selected',this.selected)
    })
     this.eventBus.$on('update:removeselected',name=>{
      let index = this.selected.indexOf(name)
      this.selected.splice(index,1)
      this.$emit('update:selected',this.selected)
      this.eventBus.$emit('update:selected',this.selected)
    })
    this.$children.forEach(vm=>{
      vm.single = this.single
    })
  }
}
</script>
<style lang="scss" scoped>

</style>
