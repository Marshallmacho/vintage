import Vue from 'vue'
import Router from 'vue-router'
import GoogleMap from '../components/Contacts/Map/GoogleMap'

Vue.use(Router)

let router = new Router ({
	routes: [
        {
            name: 'MainMap',
            path: '/',
            props: {
                dataFile: 'all_resv.csv',
                mapFile: 'contig_us.geo.json',
                mapType: 'us'
            },
            folder: true,
            component: GoogleMap
        },
        {
            name: 'Arizona',
            path: '/arizona',
            props: {
                dataFile: 'az.csv',
                mapFile: 'az.counties.json',
                mapType: 'state'
            },
            folder: true,
            component: GoogleMap
        }

	]
})


export default router