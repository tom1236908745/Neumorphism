import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCHZ6eFIH50X0obcfqG72fTrKa9Un7SXMY',
    libraries: 'places', 
  },
})