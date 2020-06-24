import Vue from 'vue';
import VueRouter from 'vue-router';
import ExampleComponent from './components/ExampleComponent'
import Dashboard from './components/Dashboard'
import User from './components/User'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { path: '/dashboard', component: Dashboard },
        { path: '/user', component: User }
    ],
    mode: 'history'
});