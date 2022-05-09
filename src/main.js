import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'animate.css';

// Router components

import Home from './components/Home.vue'
import About from './components/About.vue'
import Resume from './components/Resume.vue'
import Riskfree from './components/case-studies/riskfree/RiskFree.vue'
import Spotify from './components/case-studies/spotify/Spotify.vue'

// Get length of character path animate with SVG and CSS
const creative = document.querySelectorAll("#creative path");
for(let i = 0; i<creative.length; i++) {
  console.log(`Letter ${i} is ${creative[i].getTotalLength()}`);
}

// Router init
Vue.use(VueRouter);
const router = new VueRouter({
  routes : [
    // essential routing of components  
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/resume', component: Resume},

    // mediocre routing of project information components
    {path: '/riskfree', component: Riskfree},
    {path: '/spotify', component: Spotify},
  ],
  mode : 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
})