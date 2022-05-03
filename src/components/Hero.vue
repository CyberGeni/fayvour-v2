<template>
    <main class="flex flex-col justify-center h-screen h-[80vh] w-full">
      <div class="absolute truncate top-32 bg-transparent w-full border-y-2 border-neutral-400 ml-[-5%] py-2">
        <p class="scroll text-neutral-400 font-['Supreme']">user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate  • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate  • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate  • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate • user centered design advocate</p>
      </div>
      <p class="font-['Cabinet_Grotesk'] text-5xl md:text-6xl xl:text-7xl max-w-3xl xl:max-w-4xl text-neutral-400 leading-relaxed">Favour is a <br class="md:hidden"> <span class="font-medium text-7xl lg:text-8xl xl:text-9xl text-white"> designer</span> specialising in <span class="font-medium text-7xl lg:text-8xl xl:text-9xl text-white">UI, UX</span> and <span class="font-medium text-7xl lg:text-8xl xl:text-9xl text-white">Product Design.</span></p>
    </main>
</template>
<style scoped>
div{
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
}
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

</style>