<template>
    <main class="flex flex-col justify-center h-screen h-[75vh] w-full">
      <div class="absolute truncate top-24 bg-transparent w-full border-y-2 border-neutral-400 ml-[-5%] py-1"> 
        <p class="scroll text-neutral-400 font-['Supreme']">user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate  • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate  • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate  • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate</p>
      </div>
      <p class="font-['Cabinet_Grotesk'] text-5xl md:text-6xl xl:text-7xl max-w-3xl xl:max-w-4xl text-neutral-400 leading-relaxed">Favour is a <br class="md:hidden"> <span class="font-medium text-7xl lg:text-8xl xl:text-9xl text-white"> designer</span> specialising in <span class="font-medium text-7xl lg:text-8xl xl:text-9xl text-white">UI, UX</span> and <span class="font-medium text-7xl lg:text-8xl xl:text-9xl text-white">Product Design.</span></p>
      <div class="hidden sm:block font-['Sentient'] bg-decor absolute right-0 text-[205px] top-[60vh] w-full">
        <span>creative.</span>
      </div>
      <div class="absolute top-[85vh]">
        <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_ascfjwtt.json" background="transparent" speed="1" style="width: 50px; height: 50px;" loop autoplay></lottie-player>
      </div>
      
    </main>
</template>
<style scoped>
.scroll {
  display : flex;
  flex-shrink: 0;
  height: 50px;
  align-items: center;
  animation: slide-left 400s linear infinite;
  background: none;
}

  @keyframes slide-left {
  from {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  to {
    -webkit-transform: translateX(-300%);
            transform: translateX(-300%);
  }
}
.bg-decor {
  width: 100%;

        right: 10px;
        text-align: right;

}
.bg-decor span {
        background: -webkit-linear-gradient(180deg, #ffffff 16.21%, #8a8a8a 41.72%, #ffffff 81.21%);
        color: rgb(27, 25, 25);
        /* the transparent content with just border thingy */
        -webkit-background-clip: text;
        -webkit-text-stroke: 4px transparent;
        opacity: 0.1;

    }
</style>