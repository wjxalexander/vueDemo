import Toast from './toast'
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, toastOptions) {//j见appvue
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor({
        propsData: toastOptions
      })
      toast.$slots.default = [message]
      //传值方法注意
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}