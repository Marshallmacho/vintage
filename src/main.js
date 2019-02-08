import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate';
import {Tabs, Tab} from 'vue-tabs-component';
import * as VueGoogleMaps from 'vue2-google-maps'
import router from './router'

Vue.use(VeeValidate);
Vue.component('tabs', Tabs);
Vue.component('tab', Tab);
Vue.config.productionTip = false


Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyBfsskRHTsBZMWmj7ltiOwzhkrgPmhO-Cw',
        libraries: "places"
    }

})
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
