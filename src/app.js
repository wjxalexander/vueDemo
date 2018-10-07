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
import Tabitem from './tab-item'
import Tabpanel from './tab-panel'
import Tab from './tab'
import Tabbody from './tabs-body'
import Tabnav from './tabs-nav'
import Popover from './popover'
//以下两个都将组件全局化
Vue.component('g-button', Button)//g-button 对应的就是BUtton
Vue.component('g-icon', Icon)//g-button 对应的就是BUtton
Vue.component('buttongroup', Buttongroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-content', Content)
Vue.component('g-header', Header)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)
Vue.component('g-toast', Toast)
Vue.component('g-tab-item', Tabitem)
Vue.component('g-tab-panel', Tabpanel)
Vue.component('g-tab', Tab)
Vue.component('g-tab-body', Tabbody)
Vue.component('g-tab-nav', Tabnav)
Vue.component('g-popover', Popover)
Vue.use(Plugin)

var app = new Vue({
  el: '#app',
  data: {
    selectedTab: 'sports'
  },
  created() {

  },
  methods: {
    showToast1() {
      this.showToast('top')
    },
    showToast2() {
      this.showToast('middle')
    },
    showToast3() {
      this.showToast('bottom')
    },
    showToast(position) {
      this.$toast('hi', {
        enableHtml: false,
        position: position,
        closeButton: {
          text: 'close',
          callback() {
            console.log('他说已经充值智商了')
          }
        },
        autoClose: 3
      })
    }
  }
})

