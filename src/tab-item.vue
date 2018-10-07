<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tabsItem',
  data(){
    return{
      active: false
    }
  },
  props:{
    disabled:{
      type:Boolean,
      default: false,
    },
    name:{
      required:true,
      type: String || Number
    }
  },
  inject: ['eventBus'],
  created(){
    this.eventBus.$on('update:selected',(name)=>{
      console.log(name)
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
  methods:{
    xxx(){
      this.eventBus.$emit('update:selected',this.name,this)
    }
  }
}

</script>

<style lang="scss" scoped>
$blue: blue;
  .tabs-item{
    height: 100%;
    cursor: pointer;
    flex-shrink: 0;
    padding: 0 2em;
    display: flex;
    align-items: center;
    &.active{
      color: $blue;
    }
  }
</style>
