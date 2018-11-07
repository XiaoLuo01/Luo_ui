import Vue from 'vue'
import Button from './button'
import Icon from './icon'

Vue.component('v-button', Button)
Vue.component('v-icon', Icon)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
    }
})