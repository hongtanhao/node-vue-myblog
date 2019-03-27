import Vue from 'vue'
import {Tooltip, input} from 'element-ui'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import home from './component/Home.vue'
import archive from './component/Archive.vue'
import about from './component/About.vue'
import articleDetails from './component/ArticleDetails.vue'
import classify from './component/Classify.vue'
import label from './component/Label.vue'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Tooltip);
Vue.use(input);

const router = new VueRouter({
	routes: [
		{path: '/', component: home},
		{path: '/home', component: home},
		{path: '/archive', component: archive},
		{path: '/about', component: about},
		{path: '/articleDetails:id', component: articleDetails},
		{path: '/classify', component: classify},
		{path: '/label', component: label}
	]
})

new Vue({
  	el: '#app',
  	router: router,
  	render: h => h(App)
})
