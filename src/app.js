import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import Buttongroup from './button-group'
import Input from './input'

//以下两个都将组件全局化
Vue.component('g-button', Button)//g-button 对应的就是BUtton
Vue.component('g-icon', Icon)//g-button 对应的就是BUtton
Vue.component('buttongroup', Buttongroup)
Vue.component('g-input',Input)
var app = new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
  },
  methods:{
    inputChange: function(e){
      console.log(e.target)
    }
  }
})

