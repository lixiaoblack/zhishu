// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

//懒加载
import VueLazyload from 'vue-lazyload'
//未加载前图片显示
Vue.use(VueLazyload,{
  loading:'../static/image/loading.gif'
});

Vue.prototype.axios = axios
import {store} from './store/store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { PullRefresh } from 'vant';

Vue.use(PullRefresh);

import './assets/iconfont/iconfont.css'
// mock引入
require("./mock");
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  render: h => h(App),
  template: '<App/>'
})
