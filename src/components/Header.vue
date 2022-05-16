<template>
    <header class="relative font-['Cabinet_Grotesk'] z-100 h-28 flex justify-between items-center text-white font-lg">
        <router-link to="/">fayv.</router-link>
        <nav  class="hamburger hidden sm:flex items-center justify-center relative sm:relative overflow-hidden bg-neutral-800 bg-image[url('src/assets/noise.svg)] h-screen top-0 left-0 w-screen mt-auto -ml-32 mr-[-7.5em] ">
            <ul class="text-center space-y-6 h-screen sm:space-y-0 flex flex-col items-center justify-center sm:flex-row">
                <li onclick="closeNavbar()" class="absolute top-16 right-16 ">
                    <div class="relative">
                        <div class="h-[1.7px] w-6 bg-white rounded-xl rotate-45 absolute"></div>
                        <div class="h-[1.7px] w-6 bg-white rounded-xl -rotate-45 absolute"></div>
                    </div>
                    
                </li>
                <li class="">
                    <router-link to="/about">about me.</router-link>
                </li>
                <li class="sm:ml-6">
                    <router-link to="/resume">resume.</router-link>
                </li>
                <li class="sm:ml-6">
                    <a class="text-white " target="_blank" href="https://fayvouraj.medium.com/">blog.</a>
                </li>
            </ul>
        </nav>
        <div class="space-y-1 sm:hidden flex flex-col items-end toggleButton" onclick="openNavbar()">
            <div class="h-[1.7px] w-6 bg-white rounded-xl"></div>
            <div class="h-[1.7px] w-5 bg-white rounded-xl"></div>
            <div class="h-[1.7px] w-4 bg-white rounded-xl"></div>
        </div>       
    </header>
</template>

<script>

    
        
    

</script>
