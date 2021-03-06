import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
// 引入 Element-UI组件
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
