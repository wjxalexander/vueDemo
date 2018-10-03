import Vue from 'vue'
import Button from './button'
import Icon from './icon'
Vue.component('g-button', Button)//g-button 对应的就是BUtton
Vue.component('g-icon', Icon)//g-button 对应的就是BUtton

var app = new Vue({
  el: '#app',
})