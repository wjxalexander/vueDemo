const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    //  BDD 行为驱动测试
    it('存在.', () => {
        expect(Toast).exist
    })
    describe('props',function(){
      it('可以接受autoClose', (done) => {
        let div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
          propsData: {
            autoClose: 1,
          }
        }).$mount(div) 
        vm.$on('close',()=>{
          expect(document.body.contains(vm.$el)).to.equal(false)
          done()
        })
        vm.$destroy()
    })

    })
    

})