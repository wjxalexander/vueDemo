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

describe('Tab', () => {
  it('tab存在', () => {
    expect(Tab).exist
  })

  it('接受selected', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <g-tab selected='finace'>
    <g-tab-nav>
        <g-tab-item name='weather'> 天气</g-tab-item>
        <g-tab-item name='sports' >体育</g-tab-item>
        <g-tab-item name='finace'>财经</g-tab-item>
        <g-tab-item name='stars' >娱乐</g-tab-item>
    </g-tab-nav>
    <g-tab-body>
        <g-tab-panel name='weather'>天气</g-tab-panel>
        <g-tab-panel name='sports'>体育</g-tab-panel>
        <g-tab-panel name='finace'>财经</g-tab-panel>
        <g-tab-panel name='stars'>娱乐</g-tab-panel>
    </g-tab-body>
</g-tab>
    `
    let vm = new Vue({
      el: div
    })
    setTimeout(() => {
      let checkElment = vm.$el.querySelector('.tabs-item[data-name="finace"]')
      expect(checkElment.classList.contains('active')).to.be.true
      done()
    }, 1000)
  })
})