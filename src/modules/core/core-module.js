import App from './components/App.vue'
import Vue from 'vue'
export class CoreModule {
  name = 'core'
  router;
  constructor(router){
    this.router=router;
  }
  install() {
    console.log(this.router)
    new Vue({
      router:this.router,
      render: h => h(App)
    }).$mount('#app')
  }
}
