import Toast from './toast'
function createToast({Vue,message,propsData}){
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({propsData})
  toast.$slots.default = [message]
  //传值方法注意
  toast.$mount()
  document.body.appendChild(toast.$el)
  return toast;
}
let currentToast;
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, toastOptions) {//j见appvue
      if(currentToast){
        currentToast.close()
      }
      currentToast = createToast({Vue,message,propsData:toastOptions});
    }
  }
}