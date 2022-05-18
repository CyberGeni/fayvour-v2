<template>
  <main class="w-4/5 mx-auto">
      <app-header></app-header>
      <transition name="slide">
        <router-view></router-view>
      </transition>
      
      <hr>
      <footer class="font-['Cabinet_Grotesk']">
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
            <p>devved by your friendly neighbourhood <a class="underline decoration-2 underline-offset-2" href="https://linktr.ee/cybergenie" target="_blank">cyberGenie</a></p>
          </div>
        </section>
        <p class="text-center text-sm text-neutral-400 my-4 mb-8 font-bold">&copy;2022 portfolio</p>
      </footer>
  </main>

</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    'app-header': Header,
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
  }

  hr {
    opacity: 0.2;
  }

</style>
