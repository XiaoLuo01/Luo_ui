<template>
  <div id="app">
    <div class="box">
      <v-cascader
        :options="source"
        popover-height='200px'
      ></v-cascader>
    </div>

    <div class="box">
      <v-collapse
        accordion
        :selected.sync="selectedTitle"
      >
        <v-collapse-item
          title="标题1"
          name="1"
        >内容1</v-collapse-item>
        <v-collapse-item
          title="标题2"
          name="2"
        >内容2</v-collapse-item>
        <v-collapse-item
          title="标题3"
          name="3"
        >内容3</v-collapse-item>
      </v-collapse>
    </div>

    <div class="box">
      <v-tabs :selected.sync="selectedTab">
        <v-tabs-head>
          <template slot="actions">
            <button>按钮</button>
          </template>
          <v-tabs-item
            name="beauty"
            disabled
          >美女</v-tabs-item>
          <v-tabs-item name="finance">财经</v-tabs-item>
          <v-tabs-item name="sports">
            <v-icon name="setting"></v-icon>
            体育
          </v-tabs-item>
        </v-tabs-head>
        <v-tabs-body>
          <v-tabs-pane name="beauty">美女相关咨询</v-tabs-pane>
          <v-tabs-pane name="finance">财经相关咨询</v-tabs-pane>
          <v-tabs-pane name="sports">体育相关咨询</v-tabs-pane>
        </v-tabs-body>
      </v-tabs>
    </div>

    <div class="box">
      <v-popover
        position="bottom"
        trigger="hover"
      >
        <template slot="content">
          <div>这是一段内容,这是一段内容,这是一段内容,这是一段内容。dsadsadfafdgfdhgfshsfhgfhfgxhsfhgsfafgdgfdgad</div>
        </template>
        <v-button>hover激活</v-button>
      </v-popover>
      <v-popover trigger="click">
        <template
          slot="content"
          slot-scope="{close}"
        >
          <div>这是一段内容,这是一段内容,这是一段内容,这是一段内容。</div>
          <v-button @click="close">关闭</v-button>
        </template>
        <v-button>click激活</v-button>
      </v-popover>
      <v-popover position="left">
        <template slot="content">
          <div>这是一段内容,这是一段内容,这是一段内容,这是一段内容。</div>
        </template>
        <v-button>left激活</v-button>
      </v-popover>
      <v-popover position="right">
        <template slot="content">
          <div>这是一段内容,这是一段内容,这是一段内容,这是一段内容,这是一段内容,这是一段内容,这是一段内容,这是一段内容,这是一段内容,这是一段内容,这是一段内容,这是一段内容,这是一段内容。</div>
        </template>
        <v-button>right激活</v-button>
      </v-popover>
    </div>

    <div class="box">
      <button @click="showToast1">top</button>
      <button @click="showToast2">middle</button>
      <button @click="showToast3">bottom</button>
    </div>

    <!-- <v-layout style="height: 100vh;">
          <v-sider style="width: 200px;background: #333">sider</v-sider>
        
        <v-layout>
          <v-header style="height: 80px;background: #999">header</v-header>
          <v-content class="layout-demo">content</v-content>
          <v-footer style="height: 50px;background: #ccc">footer</v-footer>
        </v-layout>
        
      </v-layout> -->

    <div
      class="box"
      style="border:1px solid rebeccapurple"
    >
      <v-row gutter="20">
        <v-col>1</v-col>
        <v-col>2</v-col>
      </v-row>
      <v-row gutter="20">
        <v-col offset="2">1</v-col>
        <v-col>2</v-col>
        <v-col>3</v-col>
      </v-row>
      <v-row>
        <v-col
          span="2"
          :phone="{span:12}"
          :ipad="{span:10}"
          :pc="{span:6}"
          :narrow-pc="{span:8}"
        >2</v-col>
        <v-col
          span="22"
          :phone="{span:12}"
          :ipad="{span:14}"
          :narrow-pc="{span:16}"
          :pc="{span:18}"
        >22</v-col>
      </v-row>
    </div>
    <div class="box">
      <v-row>
        <v-col
          span="24"
          :narrow-pc="{span:8}"
          :pc="{span:6}"
          :wide-pc="{span:4}"
        >
          <div class="demo"></div>
        </v-col>
        <v-col
          span="24"
          :narrow-pc="{span:8}"
          :pc="{span:6}"
          :wide-pc="{span:4}"
        >
          <div class="demo"></div>
        </v-col>
        <v-col
          span="24"
          :narrow-pc="{span:8}"
          :pc="{span:6}"
          :wide-pc="{span:4}"
        >
          <div class="demo"></div>
        </v-col>
        <v-col
          span="24"
          :narrow-pc="{span:8}"
          :pc="{span:6}"
          :wide-pc="{span:4}"
        >
          <div class="demo"></div>
        </v-col>
        <v-col
          span="24"
          :narrow-pc="{span:8}"
          :pc="{span:6}"
          :wide-pc="{span:4}"
        >
          <div class="demo"></div>
        </v-col>
        <v-col
          span="24"
          :narrow-pc="{span:8}"
          :pc="{span:6}"
          :wide-pc="{span:4}"
        >
          <div class="demo"></div>
        </v-col>
        <v-col
          span="24"
          :narrow-pc="{span:8}"
          :pc="{span:6}"
          :wide-pc="{span:4}"
        >
          <div class="demo"></div>
        </v-col>
      </v-row>
    </div>

    <div class="box">
      <v-input
        value="张三"
        disabled
      ></v-input>
      <v-input
        value="李四"
        readonly
      ></v-input>
      <v-input v-model="message"></v-input>
      <span>{{ message }}</span>
    </div>
    <div class="box">
      <v-input
        value="王五"
        error="姓名不能少于两个字"
      ></v-input>
    </div>
    <div class="box">
      <v-input
        value="王五"
        @change="inputChange"
      ></v-input>
    </div>
    <div class="box">
      <v-button
        :loading="loading1"
        @click="loading1 = !loading1"
      >我爱JS</v-button>
      <v-button
        icon="setting"
        :loading="loading2"
        @click="loading2 = !loading2"
      >设置</v-button>
      <v-button
        icon="download"
        icon-position="right"
        :loading="loading3"
        @click="loading3 = !loading3"
      >下载</v-button>
      <v-button-group>
        <v-button icon="left">上一页</v-button>
        <v-button>更多</v-button>
        <v-button
          icon="right"
          icon-position="right"
        >下一页</v-button>
      </v-button-group>
    </div>
  </div>
</template>

<script>
import Button from "./basic/button/button";
import ButtonGroup from "./basic/group/button-group";
import Icon from "./basic/icon/icon";
import Input from "./form/input/input";
import Row from "./layout/grid/row";
import Col from "./layout/grid/col";
import Layout from "./layout/container/layout";
import Header from "./layout/container/header";
import Footer from "./layout/container/footer";
import Sider from "./layout/container/sider";
import Content from "./layout/container/content";
import Toast from "./viewport/toast/toast";
import Tabs from "./navigation/tabs/tabs";
import TabsHead from "./navigation/tabs/tabs-head";
import TabsItem from "./navigation/tabs/tabs-item";
import TabsBody from "./navigation/tabs/tabs-body";
import TabsPane from "./navigation/tabs/tabs-pane";
import Popover from "./viewport/popover/popover";
import Collapse from "./layout/collapse/collapse";
import CollapseItem from "./layout/collapse/collapse-item";
import Cascader from "./form/cascader/cascader";

export default {
  name: "app",
  components: {
    "v-button": Button,
    "v-button-group": ButtonGroup,
    "v-icon": Icon,
    "v-input": Input,
    "v-row": Row,
    "v-col": Col,
    "v-layout": Layout,
    "v-header": Header,
    "v-footer": Footer,
    "v-sider": Sider,
    "v-content": Content,
    "v-toast": Toast,
    "v-tabs": Tabs,
    "v-tabs-head": TabsHead,
    "v-tabs-body": TabsBody,
    "v-tabs-item": TabsItem,
    "v-tabs-pane": TabsPane,
    "v-popover": Popover,
    "v-collapse": Collapse,
    "v-collapse-item": CollapseItem,
    "v-cascader": Cascader
  },
  data() {
    return {
      loading1: false,
      loading2: true,
      loading3: false,
      message: "hello",
      selectedTab: "sports",
      selectedTitle: ["1", "2"],
      source: [
        {
          name: "浙江",
          children: [
            {
              name: "杭州",
              children: [{ name: "上城区" }, { name: "下城区" }]
            }
          ]
        },
        {
          name: "湖南",
          children: [
            {
              name: "长沙",
              children: [
                { name: "雨花区" },
                { name: "芙蓉区" },
                { name: "岳麓区" }
              ]
            },
            {
              name: "衡阳",
              children: [
                { name: "蒸湘区" },
                { name: "雁峰区" },
                { name: "珠晖区" }
              ]
            }
          ]
        },
        {
          name: "广东",
          children: [
            {
              name: "广州",
              children: [
                { name: "天河区" },
                { name: "白云区" },
                { name: "越秀区" }
              ]
            }
          ]
        }
      ]
    };
  },
  created() {
    // this.$toast('测试toast')
  },
  methods: {
    yyy() {
      console.log("yyy");
    },
    inputChange(e) {
      console.log(e);
    },
    showToast1() {
      this.showToast("top");
    },
    showToast2() {
      this.showToast("middle");
    },
    showToast3() {
      this.showToast("bottom");
    },
    showToast(position) {
      this.$toast("你的智商需要充值", {
        enableHtml: true,
        position,
        closeButton: {
          text: "已充值",
          callback(toast) {
            toast.log();
            // console.log('用户说他知道了')
          }
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
#app {
  margin: 30px;
  font-size: 14px;
  .box {
    margin: 20px;
  }
  .demo {
    background: #ddd;
    border: 1px solid #666;
    height: 50px;
  }
}
</style>
