import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import Buttongroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Content from './content'
import Header from './header'
import Footer from './footer'
import Sider from './sider'
import Toast from './toast'
import Plugin from './plugin'

//以下两个都将组件全局化
Vue.component('g-button', Button)//g-button 对应的就是BUtton
Vue.component('g-icon', Icon)//g-button 对应的就是BUtton
Vue.component('buttongroup', Buttongroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-layout',Layout)
Vue.component('g-content',Content)
Vue.component('g-header',Header)
Vue.component('g-footer',Footer)
Vue.component('g-sider',Sider)
Vue.component('g-toast',Toast)
Vue.use(Plugin)

var app = new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: "hi"
  },
  created(){
    
  },
  methods:{
    changeLoading(stu){
      console.log(typeof(stu))
      let ret = !stu;
      console.log(`loading = ${ret}`)
      return (`loading = ${ret}`);
    },
    showToast(){
      this.$toast('hi',{
        enableHtml:false,
        position: 'middle',
        closeButton:{
          text:'close',
          callback(){
            console.log('okoko3')
          }
        },
        autoClose: false 
        })
    }
  }
})

