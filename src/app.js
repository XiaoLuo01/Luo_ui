import Vue from 'vue'
import Button from './basic/button/button'
import ButtonGroup from './basic/group/button-group'
import Icon from './basic/icon/icon'
import Input from './form/input/input'
import Row from './layout/grid/row'
import Col from './layout/grid/col'
import Layout from './layout/container/layout'
import Header from './layout/container/header'
import Footer from './layout/container/footer'
import Sider from './layout/container/sider'
import Content from './layout/container/content'
import Toast from './viewport/toast/toast'
import Plugin from './viewport/toast/plugin'
import Tabs from './navigation/tabs/tabs'
import TabsHead from './navigation/tabs/tabs-head'
import TabsItem from './navigation/tabs/tabs-item'
import TabsBody from './navigation/tabs/tabs-body'
import TabsPane from './navigation/tabs/tabs-pane'
import Popover from './viewport/popover/popover'
import Collapse from './layout/collapse/collapse'
import CollapseItem from './layout/collapse/collapse-item'
import Cascader from './form/cascader/cascader'

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
Vue.component('v-collapse', Collapse)
Vue.component('v-collapse-item', CollapseItem)
Vue.component('v-cascader', Cascader)
Vue.use(Plugin)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: 'hello',
        selectedTab: 'sports',
        selectedTitle: ['1', '2'],
        source: [{
            name: '浙江',
            children: [{
                name: '杭州',
                children: [
                    { name: '上城区', },
                    { name: '下城区'}]
            }] 
        },{
            name: '湖南',
            children: [{
                name: '长沙',
                children: [
                    {name: '雨花区',},
                    {name: '芙蓉区',},
                    {name: '岳麓区'}
                ]
            },{
                name: '衡阳',
                children: [
                    {name: '蒸湘区',},
                    {name: '雁峰区',},
                    {name: '珠晖区'}
                ]
            }] 
        }]
    },
    created() {
        // this.$toast('测试toast')
    },
    methods: {
        yyy() {
            console.log('yyy')
        },
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