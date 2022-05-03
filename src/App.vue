<template>
  <main>
      <app-header></app-header>
      <router-view></router-view>
      <hr>
      <footer>
        
        <section>
          <h1 class="idea">have an idea?</h1>
          <p>lets chat about it.</p>
        </section>
        <section>
          <ul>
            <h4>playground</h4>
            <li><a href="https://behance.net/favourajefu">behance</a></li>
            <li><a href="https://dribbble.com/fayvour">dribbble</a></li>
          </ul>
          <ul>
            <h4>socials</h4>
            <li><a href="https://twitter.com/fayvouraj">twitter</a></li>
            <li><a href="https://linkedin.com/in/fayvouraj">linkedin</a></li>
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
  main {
    width: 90%;
    margin: auto;
  }
  hr {
    opacity: 0.2;
  }
  footer {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    flex: 1 1;
    width: 100%;
    margin: 3em 0;
  }
  
  footer h1.idea {
    font-family: 'Trap' !important;
    font-size: 3em;
    background: -webkit-linear-gradient(180deg, #A8FFBB 16.21%, #6B81F0 41.72%, #CC48ED 81.21%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0.2em 0;
    width: fit-content;
  }
  footer p {
    font-family: 'Circular';
    color: white;
    font-size: 20px;
  }
  footer h4 {
    font-family: 'Circular';
    color: white;
    font-size: 18px;
    margin-bottom: 0.8em;
  }
  footer li, footer li h4 {
    font-family: 'Circular';
    list-style: none;
    color: white;
  }
  footer li a {
    color: white;
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
