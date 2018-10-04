import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import Buttongroup from './button-group'

//以下两个都将组件全局化
Vue.component('g-button', Button)//g-button 对应的就是BUtton
Vue.component('g-icon', Icon)//g-button 对应的就是BUtton
Vue.component('buttongroup', Buttongroup)
var app = new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
  }
})

//单元测试
import chai from 'chai'
const expect = chai.expect
import spies from 'chai-spies'
chai.use(spies)
{
  //由于button是一个对象，没法通过对象实例化，所以将对象改成函数
  //按钮含有icon
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: "setting",
    }
  })
  vm.$mount()
  let useElement =  vm.$el.querySelector('use');
  //console.log(useElement)
  let href = useElement.getAttribute('xlink:href')
  //console.log(href)
  expect(href).to.eq('#i-setting')
  vm.$el.remove()
  vm.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: "setting",
      loading: true,
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use');
  console.log(useElement)
  let href = useElement.getAttribute('xlink:href')
  console.log(href)
  expect(href).to.eq('#i-loading')
  vm.$el.remove()
  vm.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('1')
  vm.$el.remove()
  vm.$destroy()
}
{
  // 使用chaispies
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'setting',
    }
  })
  vm.$mount()
  let spy = chai.spy(function(){})
  vm.$on('click',spy)
  // 希望这个函数被执行
  let button = vm.$el
  button.click()
  expect(spy).to.have.been.called()
}


  // {
  //   const div = document.createElement('div')
  //   document.body.appendChild(div)
  //   const Constructor = Vue.extend(Button)
  //   const vm = new Constructor({
  //     propsData:{
  //       icon:"setting",
  //       iconPosition: "left"
  //     }
  //   })
  //   vm.$mount("div")
  //   let svg = vm.$el.querySelector('svg');

  //   console.log(svg)
  //   let {order} = window.getComputedStyle(svg)
  //   expect(order).to.eq("1")
  // vm.$el.remove()
  // vm.$destroy()
  // }
