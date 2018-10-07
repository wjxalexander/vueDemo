const expect = chai.expect;
import Vue from 'vue'
import Tab from '../src/tab'
import Tabitem from '../src/tab-item'
import Tabpanel from '../src/tab-panel'
import Tabbody from '../src/tabs-body'
import Tabnav from '../src/tabs-nav'
Vue.component('g-tab-item', Tabitem)
Vue.component('g-tab-panel', Tabpanel)
Vue.component('g-tab', Tab)
Vue.component('g-tab-body', Tabbody)
Vue.component('g-tab-nav', Tabnav)
Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabItem', () => {
  it('tab存在', () => {
    expect(Tabitem).exist
  })

  it('接受name', () => {
    const Constructor = Vue.extend(Tabitem)
    const vm = new Constructor({
        propsData: {
            name: '123'
        }
    }).$mount()
    console.log(vm.$el)
    expect(vm.$el.getAttribute('data-name')).to.equal('123')
    vm.$destroy()
  })
  it('接受disabled', () => {
    const Constructor = Vue.extend(Tabitem)
    const vm = new Constructor({
        propsData: {
            disabled: true
        }
    }).$mount()
    console.log(vm.$el)
    expect(vm.$el.getAttribute('disabled')).to.equal('disabled')
    const callback = sinon.fake()
    vm.$on('click',callback)
    vm.$el.click()
    expect(callback).to.have.not.been.called
    vm.$destroy()
  })


})