import Vue from 'vue'
import Router from 'vue-router'
import Main from 'views/main'
import home from 'views/home/home'
import operate from 'views/operate/operate'
import yemianshezhi from 'views/operate/pages/yemianshezhi'
import qitashezhi from 'views/operate/pages/qitashezhi'
Vue.use(Router)
const router = new Router({
    routes: [
        {
            path: '/home',
            component: Main,
            children: [{path: '/', component: home, name: 'home'}]
        },
        {
            path: '/yemianshezhi',
            component: Main,
            children: [{
                path: '/',
                component: operate, 
                name: 'operate',
                children:[
                    {path: '/yemianshezhi', component: yemianshezhi, name: 'yemianshezhi'},
                    {path: '/qitashezhi', component: qitashezhi, name: 'qitashezhi'}
                ]
            }]
        }
    ]
})
export default router