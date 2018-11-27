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
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsBody from './tabs-body'
import TabsPane from './tabs-pane'
import Popover from './popover'

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
Vue.component('v-tabs', Tabs)
Vue.component('v-tabs-head', TabsHead)
Vue.component('v-tabs-body', TabsBody)
Vue.component('v-tabs-item', TabsItem)
Vue.component('v-tabs-pane', TabsPane)
Vue.component('v-popover', Popover)
Vue.use(Plugin)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: 'hello',
        selectedTab: 'sports'
    },
    created() {
        // this.$toast('测试toast')
    },
    methods: {
        inputChange(e) {
            console.log(e)
        },
        showToast1() {
            this.showToast('top')
        },
        showToast2() {
            this.showToast('middle')
        },
        showToast3() {
            this.showToast('bottom')
        },
        showToast(position) {
            this.$toast('你的智商需要充值', {
                enableHtml: true,
                position,
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