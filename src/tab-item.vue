<template>
  <div class="tabs-item" @click="xxx">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tabsItem',
  props:{
    disabled:{
      type:Boolean,
      default: false,
    },
    name:{
      required:true,
      type: Boolean || Number
    }
  },
  inject: ['eventBus'],
  created(){
    this.eventBus.$on('updated:selected',(name)=>{
      console.log(name)
    })
  },
  methods:{
    xxx(){
      this.eventBus.$emit('updated:selected',this.name)
    }
  }
}

</script>

<style lang="scss" scoped>
  .tabs-item{
    
  }
</style>
