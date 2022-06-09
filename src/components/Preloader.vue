<template>
    <main class="font-['Cabinet_Grotesk'] preloader absolute bg-neutral-800 text-neutral-200 z-10 left-0 top-0 w-screen h-screen overflow-hidden flex items-center justify-center"> 
        <section class="section">
            <span class="waterfall">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </span> 
            <p>{{message}}</p>
        </section>
    </main>
</template>
<script>
    export default {
        name: "Loader",
        data() {
            return {
                messages: [
                    "locating the required gigapixels to render...",
                    "compiling case studies...",
                    "go ahead -- hold your breath...",
                    "at least you're not on hold...",
                    "hum something loud while others stare...",
                    "as if you had any other choice...",
                    "it's still faster than you could draw it...",
                    "the version I have of this in testing has much funnier load screens.",
                    "i think we're gonna need a new internet to load this page...",
                    "have a good day.",    
                    "we're testing your patience",
                    "it's still faster than you could draw it",
                    "my other loading screen is much faster.",
                    "just count to 10",
                    "t's not you. It's me.",    
                    "embiggening prototypes",
                    "I feel like im supposed to be loading something. . .",
                    "I promise, it's almost done.",
                    "We are not liable for any broken screens as a result of waiting.",
                    "Get some coffee and come back in ten minutes..",
                    "well, this is embarrassing.",
                    "if I’m not back in five minutes, just wait longer.",
                    "looking for sense of humour, please hold on.",
                    "let's hope it's worth the wait",
                    "loading funny message...",
                    "feel free to spin in your chair", 
                    "go ahead, hold your breath and do an ironman plank till loading complete",
                    "pushing pixels...",
                    "you seem like a nice person...",
                    "patience! This is difficult, you know...",
                    "discovering new ways of making you wait...",
                    "your time is very important to us. Please wait while we ignore you...",
                ],
                message: '',
                timeout: null
            }
        },
        mounted() {
            this.setRandomMessage();
            this.createTimeout(this.getRandomArbitrary())
        },
        methods: {
            createTimeout(timeout) {
                let $vm = this;
                this.timeout = setTimeout(() => {
                    $vm.setRandomMessage();
                    $vm.createTimeout($vm.getRandomArbitrary())
                }, timeout)
            },
            getRandomArbitrary(min = 1000, max = 1500) {
                return Math.random() * (max - min) + min;
            },
            setRandomMessage() {
                this.message = this.messages[Math.floor(Math.random()*this.messages.length)];
            }
        },
        destroyed() {
            clearTimeout(this.timeout);
        }
    }

</script>

<style scoped>
section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    margin: auto;
    text-align: center;
}
.waterfall {
    display: flex;
    margin: 1em auto
}
.waterfall > * + * {
  margin-left: 0.25rem;
}
    @-webkit-keyframes waterfall {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-250%);
            transform: translateY(-250%); }
  40%,
  60% {
    opacity: 1;
    -webkit-transform: translateY(0);
            transform: translateY(0); }
  100% {
    opacity: 0;
    -webkit-transform: translateY(250%);
            transform: translateY(250%); } }
@keyframes waterfall {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-200%);
            transform: translateY(-200%); }
  40%,
  60%, 100% {
    opacity: 1;
    -webkit-transform: translateY(0);
            transform: translateY(0); }
  /* 100% {
    opacity: 0;
    -webkit-transform: translateY(200%);
            transform: translateY(200%); } */} 

.waterfall div {
    -webkit-animation: waterfall 1.5s infinite;
    animation: waterfall 1.5s infinite;
    background-color: white;
    height: 10px;
    opacity: 0;
    width: 10px; 
}
.waterfall div:nth-of-type(1) {
    -webkit-animation-delay: 0.25s;
            animation-delay: 0.25s;
    }
.waterfall div:nth-of-type(2) {
    -webkit-animation-delay: 0.5s;
            animation-delay: 0.5s;
}
.waterfall div:nth-of-type(3) {
    -webkit-animation-delay: 0.75s;
            animation-delay: 0.75s;
    }
.waterfall div:nth-of-type(4) {
    -webkit-animation-delay: 1s;
            animation-delay: 1s;
}
.waterfall div:nth-of-type(5) {
    -webkit-animation-delay: 1.25s;
            animation-delay: 1.25s;
    }
</style>

