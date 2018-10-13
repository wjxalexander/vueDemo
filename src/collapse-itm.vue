<template>
<div class="collapse-item">
   <div class="collapseitemtitle" @click="toggle">
     {{single}}{{title}}
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
    },
  },
  data(){
    return{
      open: false,
      single:false
    }
  },
  inject: ['eventBus'],
  mounted(){
    this.eventBus.$on('update:selected',(names)=>{
      console.log(names.indexOf(this.name))
      if(names.indexOf(this.name)<0){
        if(this.single){
          this.close()
        }
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
        this.eventBus.$emit('update:removeselected',this.name)
      }else{  
        this.eventBus.$emit('update:addselected',this.name)
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
