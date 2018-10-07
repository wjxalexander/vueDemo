<template>
  <div class="tab-pane" :class="classes" v-if='active'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tabPane',
  data(){
    return{
      active: false
    }
  },
  props:{
    name:{
      required:true,
      type: String || Number
    }
  },
  inject: ['eventBus'],
  
  created(){
    this.eventBus.$on('update:selected',(name)=>{
      if(name === this.name){
       this.active = true;
      }else{
        this.active = false;
      }
    })
  },
  mounted(){
    
  },
  computed:{
    classes(){
      return{ active: this.active}
    }
  },
}
</script>

<style lang="scss" scoped>
  .tab-pane{
    &.active{
      padding: 1em;
    }
  }
</style>
