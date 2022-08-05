import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from "gsap";


// Router components

import Home from './components/Home.vue'
import About from './components/About.vue'
import Resume from './components/Resume.vue'
import Riskfree from './components/case-studies/riskfree/RiskFree.vue'
import Koyata from './components/case-studies/koyata/koyata.vue'
import Spotify from './components/case-studies/spotify/Spotify.vue'


// Get length of character path to animate with SVG and CSS
const casestudy = document.querySelectorAll("#case-study path");
for(let i = 0; i<casestudy.length; i++) {
  console.log(`Letter ${i} is ${casestudy[i].getTotalLength()}`);
}

// Preloader animation
window.onload = function(){ 
  const preloader = document.querySelector('.preloader')
  preloader.style.display = 'none'
  preloader.classList.add('animate__animated')
  preloader.classList.add('animate__fadeOut')
  document.querySelector('body').style.overflowY = 'scroll';
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
    {path: '/koyata', component: Koyata},
    {path: '/riskfree', component: Riskfree},
    {path: '/spotify', component: Spotify},
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
      }
    }
  },
  mode : 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
})

// Animate in scroll Library
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// Register ScrollTrigger GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
    clamp = gsap.utils.clamp(-10, 10); // don't let the skew go beyond 20 degrees. 

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -300);
    // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {skew: 0, duration: 1.0, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
    }
  }
});

// make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set(".skewElem", {transformOrigin: "center center", force3D: true});


