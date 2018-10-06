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
            autoClose: 0.3
          }
        }).$mount(div) 
        setTimeout(()=>{
          console.log(document.body.contains(vm.$el))
          expect(document.body.contains(vm.$el)).to.equal(false)
          done()
        },1500)
  
        vm.$destroy()
    })
    it('接受 closeButton', (done) => {
      const callback = sinon.fake();
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          closeButton: {
            text: '关闭吧',
            callback,
          },
        }
      }).$mount()
      let closeButton = vm.$el.querySelector('.close')
      expect(closeButton.textContent.trim()).to.eq('关闭吧')
      setTimeout(()=>{
        closeButton.click()
        expect(callback).to.have.been.called
        done()
      },200)
      vm.$destroy()
    }) 

    })
    

})