<template>
<div class="toast">
 <slot></slot>
</div>
  
</template>

<script>

export default {
  name:'toast'
}
</script>

<style lang="scss" scoped>
 .toast{
   color: white;
   position: fixed; top:0; left: 50%; 
   transform: translateX(-50%); line-height: 1.8; font-size: 14px; 
   display: flex; align-items: center; 
   background-color: black;
   border-radius: 4px;
   box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.50);
   padding: 0 16px;
   } </style>
