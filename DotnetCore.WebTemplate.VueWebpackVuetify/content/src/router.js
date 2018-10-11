import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './pages/Home.vue';

Vue.use(VueRouter)

// Set vue router
const router = new VueRouter({
    mode: 'history',
    fallback: false, // Setting this to false essentially makes every router-link navigation a full page refresh in IE9.
    routes: [
        {
            path: `${ROOT_FOLDER}/`,
            component: Home,
        },
        // {
        //     path: `${ROOT_FOLDER}/browser-not-support`,
        //     component: BrowserNotSupport
        // },
        // {
        //     path: `${ROOT_FOLDER}/no-auth`,
        //     component: NoAuth
        // },
        // {
        //     path: `${ROOT_FOLDER}/`,
        //     component: Compliance,
        //     children: [{
        //             path: '',
        //             component: ComplianceHome
        //         },
        //     ]
        // },
        // {
        //     path: '*',
        //     component: ErrorPage
        // },
    ]
})

export default router
