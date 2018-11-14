import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Icon from './icon'
import Input from './input'
import Row from './row'
import Col from './col'

Vue.component('v-button', Button)
Vue.component('v-button-group', ButtonGroup)
Vue.component('v-icon', Icon)
Vue.component('v-input', Input)
Vue.component('v-row', Row)
Vue.component('v-col', Col)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: 'hello'
    },
    methods: {
        inputChange(e) {
            console.log(e)
        }
    }
})