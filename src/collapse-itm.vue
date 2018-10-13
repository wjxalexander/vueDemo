<template>
<div class="collapse-item">
   <div class="collapseitemtitle" @click="toggle">
     {{title}}
   </div>
   <div class="contentwarp" v-if='open'>
       <slot></slot>
   </div> 
  </div>
</template>
<script>
export default {
  name: "collapseitem",
  props:{
    title:{
      type:String,
      required:true
    },
    name:{
      type:String,
      required:true
    }
  },
  data(){
    return{
      open: false
    }
  },
  inject: ['eventBus'],
  mounted(){
    this.eventBus.$on('update:selected',(name)=>{
      console.log('nameis',name)
      if(name!==this.name){
        this.close()
      }else{
        console.log('name=name')
        this.show()
      }
    })
  },
  methods:{
    toggle(){
      if(this.open){
        this.open = false
      }else{  
        this.eventBus.$emit('update:selected',this.name)
      }
    },
    close(){
      this.open = false;
    },
    show(){
        this.open = true      
    }
  }
};
</script>
<style lang="scss" scoped>
  .collapse-item{
    >.collapseitemtitle{
    border: 1px solid #ddd;
    border-radius: 4px
    }
  }
</style>
