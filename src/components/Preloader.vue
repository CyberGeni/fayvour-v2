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
                    "Locating the required gigapixels to render...",
                    "compiling case studies...",
                    "go ahead -- hold your breath...",
                    "at least you're not on hold...",
                    "hum something loud while others stare...",
                    "as if you had any other choice...",
                    "it's still faster than you could draw it...",
                    "Do you suffer from ADHD? Me neith- oh look a bunny... What was I doing again? Oh, right. Here we go.",
                    "The version I have of this in testing has much funnier load screens.",
                    "I think we're gonna need a new internet to load this page...",
                    "Have a good day.",
                    "Upgrading Windows, your PC will restart several times. Sit back and relax.",        
                    "We're testing your patience",
                    "It's still faster than you could draw it",
                    "My other loading screen is much faster.",
                    "Just count to 10",
                    "It's not you. It's me.",    
                    "Embiggening Prototypes",
                    "I feel like im supposed to be loading something. . .",
                    "Don't break your screen yet!",
                    "I promise, it's almost done.",
                    "Keeping all the 1's and removing all the 0's...",
                    "Putting the icing on the cake. The cake is not a lie...",
                    "Cleaning off the cobwebs...",
                    "We are not liable for any broken screens as a result of waiting.",
                    "Get some coffee and come back in ten minutes..",
                    "Well, this is embarrassing.",
                    "If I’m not back in five minutes, just wait longer.",
                    "Looking for sense of humour, please hold on.",
                    "Finding someone to hold my beer",
                    "Let's hope it's worth the wait",
                    "Whatever you do, don't look behind you...",
                    "Loading funny message...",
                    "Feel free to spin in your chair", 
                    "Go ahead, hold your breath and do an ironman plank till loading complete",
                    "Pushing pixels...",
                    "You seem like a nice person...",
                    "Patience! This is difficult, you know...",
                    "Discovering new ways of making you wait...",
                    "Your time is very important to us. Please wait while we ignore you...",
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
            getRandomArbitrary(min = 570, max = 1500) {
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

