const expect = chai.expect;
 import Vue from 'vue'
 import Popover from '../src/viewport/popover/popover'

 Vue.config.productionTip = false
 Vue.config.devtools = false

 describe('Popover', () => {
     it('存在.', () => {
         expect(Popover).to.be.ok
     })
     it('可以设置 position.', (done) => {
        Vue.component("v-popover", Popover)
        const div = document.createElement("div")
        document.body.appendChild(div)
        div.innerHTML = `
        <v-popover position="bottom" ref="a">
          <template slot="content">
            <div>这是一段内容,这是一段内容,这是一段内容,这是一段内容。</div>
          </template>
          <button>click激活</button>
        </v-popover>
        `
        const vm = new Vue({
          el: div
        })
        vm.$el.querySelector('button').click()
        vm.$nextTick(() => {
            const {contentWrapper} = vm.$refs.a.$refs
            expect(contentWrapper.classList.contains('position-bottom')).to.eq(true)
            done()
        })
     })

     xit('可以设置 trigger.', (done) => {
        Vue.component("v-popover", Popover)
        const div = document.createElement("div")
        document.body.appendChild(div)
        div.innerHTML = `
        <v-popover trigger="hover" ref="a">
          <template slot="content">
            <div>这是一段内容,这是一段内容,这是一段内容,这是一段内容。</div>
          </template>
          <button>click激活</button>
        </v-popover>
        `
        const vm = new Vue({
          el: div
        })
        vm.$nextTick(() => {
            var event = new Event('mouseenter')
            vm.$el.dispatchEvent(event)
            vm.$nextTick(() => {
                const {contentWrapper} = vm.$refs.a.$refs
                expect(contentWrapper).to.exist
                done()
            })
        })
     })
 })