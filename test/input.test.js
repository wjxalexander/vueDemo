const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'
import { eventNames } from 'cluster';

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    //  BDD 行为驱动测试
    it('存在.', () => {
        //不是false值就OK
        expect(Input).exist
        // false: expect([1,2]).to.eq([1,2]) 指针问题
        //expect([1,2]).to.deep.eq([1,2])
    })

    describe('props',()=>{
      const Constructor = Vue.extend(Input)
      let vm;
      afterEach(()=>{
        vm.$destroy()
      })
      it('接收 value',()=>{
          vm = new Constructor({
              propsData: {
                  value: "1234"
              }
          }).$mount()
          const inputElment = vm.$el.querySelector('input')
          expect(inputElment.value).to.equal('1234')
      })
      it('接收 disabled',()=>{
          vm = new Constructor({
              propsData: {
                  disabled: true
              }
          }).$mount()
          const inputElment = vm.$el.querySelector('input')
          expect(inputElment.disabled).to.equal(true)
      })
      it('接收 readonly',()=>{
         vm = new Constructor({
              propsData: {
                readonly: true
              }
          }).$mount()
          const inputElment = vm.$el.querySelector('input')
          //console.log(inputElment.outerHTML);
          // readOnly要大写
          expect(inputElment.readOnly).to.equal(true)
      })
      it('接收 error',()=>{
          vm = new Constructor({
              propsData: {
                  error: 'wrong'
              }
          }).$mount()
          const inputElement = vm.$el.querySelector('use')
          expect(inputElement.getAttribute('xlink:href')).to.equal('#i-error-circle')
          const erromsg = vm.$el.querySelector('.error-msg')
          expect(erromsg.innerText).to.equal('wrong')
          // readOnly要大写
      })
    })
    describe('event',()=>{
      const Constructor = Vue.extend(Input)
      let vm;
      afterEach(()=>{
        vm.$destroy()
      })
      it('支持 change/input/focus/blur事件',()=>{
        ["change","input","focus","blur"].forEach((eventName)=>{
        vm = new Constructor({}).$mount()
        const callback = sinon.fake()
        vm.$on(eventName,callback)
        var event = new Event(eventName)
        let inputElment = vm.$el.querySelector('input')
        inputElment.dispatchEvent(event)
        expect(callback).to.have.been.calledWith(event)
        // sinon-chai
        })
      })
      
    })

})