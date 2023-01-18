import Router from 'vue-router'
export class RouterModule {
    name = 'router';
    router;
    install(Vue) {
        Vue.use(Router)
        this.router = new Router({
            mode: 'history',
        })
    }
}
