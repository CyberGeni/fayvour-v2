<template>
  <main class="w-4/5 mx-auto">
      <!-- Preloader -->
      <pre-loader></pre-loader>

      <app-header></app-header>
      
      <transition name="slide">
        <router-view></router-view>
      </transition>
      
      <hr class="relative z-[-1] opacity-20">
      <footer data-aos="fade-up" class="font-['Cabinet_Grotesk']">
        <h1 class="text-white text-4xl mt-16 md:mt-24 mb-10 md:mb-16">Got an interesting project idea? I can help you.</h1>
        <section class="md:flex items-end justify-between">
          <div>
            <h1 class="text-white text-3xl ">mail me</h1>
            <a class="text-neutral-400 text-lg" href="mailto:hey@fayvouraj.com" target="_blank">hey@fayvouraj.com</a>
            <h1 class="text-white text-3xl mt-8 mb:mt-12 mb-3">drop by, say hi</h1>
            <nav class="text-neutral-400 text-lg space-x-6">
              <a class="underline decoration-2 underline-offset-2 hover:text-sky-600 transition-all" href="https://twitter.com/fayvouraj" target="_blank">tw.</a>
              <a class="underline decoration-2 underline-offset-2 hover:text-sky-800 transition-all" href="https://twitter.com/fayvouraj" target="_blank">li.</a>
              <a class="underline decoration-2 underline-offset-2 hover:text-white transition-all" href="https://twitter.com/fayvouraj" target="_blank">be.</a>
              <a class="underline decoration-2 underline-offset-2 hover:text-pink-600 transition-all" href="https://twitter.com/fayvouraj" target="_blank">dr.</a>
            </nav>
          </div>
          <div class="text-neutral-400 text-xs mt-4 text-right">
            <p>designed by yours truly</p>
            <p>devved by your friendly neighborhood <a class="underline decoration-2 underline-offset-2" href="https://api.whatsapp.com/send?phone=2349098746099&text=Hi%20Treasure.%20I%20saw%20the%20site%20you%20made%20for%20Fayvour,%20it%20looks%20awesome.%20I'd%20like%20you%20to%20create%20a%20website%20for%20me%20too." target="_blank">cyberGenie</a></p>
          </div>
        </section>
        <p class="text-center text-sm text-neutral-400 my-4 mb-8 font-bold">&copy;2022 portfolio</p>
      </footer>
  </main>

</template>

<script>
import Header from './components/Header.vue'
import Preloader from './components/Preloader.vue'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    'app-header': Header,
    'pre-loader': Preloader
  }
}
</script>

<style>

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  body {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    background-image: url(/src/assets/noise.svg);
    position: relative;
    z-index: -100;
    overflow-x: hidden;
    overflow: hidden;
  }

 
  
</style>
