import aboutRoutes from './router/about-routes.js'

export class AboutModule {
    name="about";
    constructor(router){
        this.router=router
    }
    install(){
        this.router.addRoute(aboutRoutes)
    }

}