<template>
    <main class="font-['Cabinet_Grotesk'] preloader absolute bg-neutral-800 text-neutral-200 z-10 left-0 top-0 w-screen h-screen overflow-hidden flex items-center justify-center"> 
        <section>
            <div class="outer-box h-16 w-40 p-5 z-[-100] overflow-hidden border-0 flex-col bg-neutral-900 relative flex items-center justify-center bg-neutral-900">  
                <div class="rod absolute"></div>     
                <h2 class="absolute bg-neutral-800 font-bold text-xl px-9 py-4 md:text-3xl tracking-wider">Loading...</h2>
            </div>    
        </section>
    </main>
</template>
<style scoped>


.outer-box::before {
    content: '';
    position: relative;
    background-image: linear-gradient(red, orange, yellow, green, blue, indigo, violet);
    width: 10px;
    height: 80px;
    overflow: hidden;
    transform: rotate(360deg);
    animation: animate 4s linear infinite;
}
@keyframes animate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

</style>

