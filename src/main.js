import Vue from 'vue'
import { RouterModule } from '@/modules/router'
import { HomeModule } from '@/modules/home'
import  {CoreModule}  from '@/modules/core'
import { AboutModule } from '@/modules/about'


function bootstrap() {
  Vue.config.productionTip = false
  const routerModule = new RouterModule()
  routerModule.install(Vue)

  const coreModule = new CoreModule(routerModule.router)
  coreModule.install(Vue)

  const homeModule = new HomeModule(routerModule.router)
  homeModule.install(Vue)

  const aboutModule = new AboutModule(routerModule.router)
  aboutModule.install(Vue)

  

}
bootstrap()
