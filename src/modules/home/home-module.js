import  homeRoutes  from './router/home-routes.js'

export class HomeModule {
     name = 'home'
     constructor(router){
      this.router=router
  }
    install(){
       this.router.addRoute(homeRoutes)
       
    }

}