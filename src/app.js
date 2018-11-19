import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Icon from './icon'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Footer from './footer'
import Sider from './sider'
import Content from './content'
import Toast from './toast'
import Plugin from './plugin'

Vue.component('v-button', Button)
Vue.component('v-button-group', ButtonGroup)
Vue.component('v-icon', Icon)
Vue.component('v-input', Input)
Vue.component('v-row', Row)
Vue.component('v-col', Col)
Vue.component('v-layout', Layout)
Vue.component('v-header', Header)
Vue.component('v-footer', Footer)
Vue.component('v-sider', Sider)
Vue.component('v-content', Content)
Vue.component('v-toast', Toast)
Vue.use(Plugin)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: 'hello'
    },
    created() {
        // this.$toast('测试toast')
    },
    methods: {
        inputChange(e) {
            console.log(e)
        },
        showToast() {
            this.$toast('你的智商需要充值', {
                enableHtml: true,
                position: 'bottom',
                closeButton: {
                    text: '已充值',
                    callback(toast) {
                        toast.log()
                        // console.log('用户说他知道了')
                    }
                }
            })
        }
    }
})