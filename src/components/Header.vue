<template>
    <header class="relative font-['Cabinet_Grotesk'] z-100 h-28 flex justify-between items-center text-white font-lg">
        <router-link to="/">fayv.</router-link>
        <nav  class="hamburger cursor-pointer animate__animated hidden sm:flex items-center justify-center relative overflow-hidden bg-neutral-800 sm:bg-transparent bg-image[url('src/assets/noise.svg)] h-screen sm:h-fit top-0 left-0 w-screen sm:w-fit mt-auto sm:mt-0 -ml-32 mr-[-7.5em] sm:mx-0">
            <ul class="overflow-hidden text-center space-y-6 sm:space-y-0 h-screen sm:h-fit  flex flex-col sm:flex-row items-center justify-center ">
                <li onclick="closeNavbar()" class="absolute top-16 right-20 sm:hidden">
                    <div class="relative">
                        <div class="h-[1.7px] w-6 bg-white rounded-xl rotate-45 absolute"></div>
                        <div class="h-[1.7px] w-6 bg-white rounded-xl -rotate-45 absolute"></div>
                    </div>
                </li>
                <li onclick="closeNavbar()" class="">
                    <router-link to="/about">about me.</router-link>
                </li>
                <li onclick="closeNavbar()" class="sm:ml-6">
                    <router-link to="/resume">resume.</router-link>
                </li>
                <li onclick="closeNavbar()" class="sm:ml-6">
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
