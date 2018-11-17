const expect = chai.expect
import Vue from "vue"
import Row from "../src/row"
import Col from "../src/col"
import { emit } from "cluster"

describe("Button", () => {
  it("存在.", () => {
    expect(Row).to.be.ok
  })

  it("接受 gutter 属性", done => {
    Vue.component("v-row", Row)
    Vue.component("v-col", Col)
    const div = document.createElement("div")
    document.body.appendChild(div)
    div.innerHTML = `
    <v-row gutter="20">
      <v-col></v-col>
      <v-col></v-col>
    </v-row>
    `
    const vm = new Vue({
      el: div
    })

    setTimeout(() => {
      const row = vm.$el.querySelector(".row")
      expect(getComputedStyle(row).marginLeft).to.be.eq("-10px")
      expect(getComputedStyle(row).marginRight).to.be.eq("-10px")
      const cols = vm.$el.querySelectorAll(".col")
      expect(getComputedStyle(cols[0]).paddingLeft).to.be.eq("10px")
      expect(getComputedStyle(cols[1]).paddingRight).to.be.eq("10px")
      done() // 异步
      vm.$el.remove()
      vm.$destroy()
    }, 0)
  })

  it("接受 align 属性", () => {
    const div = document.createElement("div")
    document.body.appendChild(div)
    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
      propsData: {
        align: "center"
      }
    }).$mount(div)
    const element = vm.$el
    expect(getComputedStyle(element).justifyContent).to.equal('center')
    div.remove()
    vm.$destroy()
  })
})
