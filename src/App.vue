<template>
  <main class="w-4/5 mx-auto">
      <app-header></app-header>
      <router-view></router-view>
      <hr>
      <footer class="font-['Cabinet_Grotesk']">
        <section>
          <h1 class=" text-5xl text-neutral-300">Have an idea?</h1>
          <p class="text-neutral-400">lets <a href="mailto:fayvouraj@gmail.com" target="_blank" class="text-white underline decoration-wavy"> chat </a> about it.</p>
        </section>
        <section class="text-neutral-400 grid grid-cols-1">
          <ul>
            <li><a href="https://behance.net/favourajefu">be.</a></li>
            <li><a href="https://dribbble.com/fayvour">dr.</a></li>
          </ul>
          <ul>
            <li><a href="https://twitter.com/fayvouraj">tw.</a></li>
            <li><a href="https://linkedin.com/in/fayvouraj">li.</a></li>
          </ul>
        </section>
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
  footer {
    display: flex;
    align-items: baseline;
    width: 100%;
    margin: 3em 0;
  }
  
  footer h1.idea {
    font-size: 3em;
    margin: 0.2em 0;
    width: fit-content;
  }
  footer p {

    font-size: 20px;
  }
  footer h4 {

    font-size: 18px;
    margin-bottom: 0.8em;
  }
  footer li, footer li h4 {

    list-style: none;

  }
  footer li a {

    text-decoration: none;
    line-height: 35px;
  }
  footer section:nth-child(1) {
    width: 50%;
  }
  footer section:nth-child(2) {
    display: flex;
    width: 50%;
  }
  footer section:nth-child(2) ul {
    width: 45%;
  }
  @media (max-width: 500px) {
    footer {
      flex-direction: column;
      width: 100%;
    }
    footer section:nth-child(1) {
    width: 100%;
  }
  footer section:nth-child(2) {
    display: flex;
    width: 100%;
    margin-top: 1.7em;
  }
  footer section:nth-child(2) ul {
    width: 100%;
  }
  }
</style>
