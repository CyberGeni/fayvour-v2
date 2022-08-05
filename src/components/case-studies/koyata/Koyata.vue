<template>
<transition name="fade">
    <main class="font-['Cabinet_Grotesk'] my-1 w-full text-neutral-400">
        <header class="flex flex-col text-center text-neutral-100">
            <h2 class="w-fit text-center text-lg font-medium mx-auto my-3">KOYATA</h2>
            <p>You can't help but overthink, we'll help you stop</p>
        </header>
        <hr  class="my-6 z-[-100] relative">
        <nav>
            <ul class="flex items-center justify-between h-1 mx-1">
                <li class="text-neutral-400">UX Research</li>
                <li class="text-neutral-400">•</li>
                <li class="text-neutral-400">UI Design</li>
                <li class="text-neutral-400">•</li>
                <li class="text-neutral-400">Prototype</li>
                <li class="text-neutral-400">•</li>
                <li class="text-neutral-400">Test</li>
            </ul>
        </nav>
        <hr class="my-6 z-[-100] relative">
        <img src="src/assets/koyata/koyata-hero.svg" alt="" class="w-full rounded-xl">
        <section class="my-12">
            <h3 class="text-neutral-200 text-xl font-bold mb-4">about the app</h3>
            <p class="my-4 text-lg leading-relaxed font-normal">Koyata is a language learning application that leverages white hat gamification techniques to help young people learn Nigerian languages.</p>
        </section>
        <section class="my-12">
            <h3 class="text-neutral-200 text-xl font-bold mb-4">design process</h3>
            <img src="src/assets/design-processes.svg" alt="">
        </section>
        
        <section class="my-12">
            <h3 class="text-neutral-200 text-xl font-bold mb-4">identifying the problem</h3>
            <p class="my-4 text-lg leading-relaxed font-normal">Many people are finding it difficult to learn their mother tongue due to different reasons. This makes it difficult for them to connect with their histories and have proper conversations with people that speak the language. People that are visiting also want to learn the language used so they can connect with people better. Even in urban places like Lagos, Nigeria where English is spoken by all, people feel very comfortable interacting in their mother tongue when they see someone who understands them.</p>
        </section>

        <section class="my-12">
            <h3 class="text-neutral-200 text-xl font-bold mb-4">market research</h3>
            <p class="my-4 text-lg leading-relaxed font-normal">To start, i conducted research on the market to see what solutions are currently available to solve this problem. I was able to identify a handful of applications and websites that offered solutions. Because of the small number of the quality content offered by the applications offering nigerian languages, i widened my scope to include language learning applications that didn’t offer Nigerian Languages but offered other foreign languages like Spanish, French and Japanese.</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto">
                <picture>
                    <img src="src/assets/koyata/market-research-1.svg" alt="">
                    <figcaption class="text-center my-2 text-sm">Offers Nigerian languages</figcaption>
                </picture>
                <picture>
                    <img src="src/assets/koyata/market-research-2.svg" alt="">
                    <figcaption class="text-center my-2 text-sm">Doesn’t offer Nigerian languages</figcaption>
                </picture>
                
            </div>
        </section>

        <section class="my-12">
            <h3 class="text-neutral-200 text-xl font-bold mb-4">swot analysis</h3>
            <p class="my-4 text-lg leading-relaxed font-normal">As mentioned earlier, there aren’t a lot of applications to cater for people wanting to learn NIgerian languages. A lot of UX and UI issues were found with the ones i found. Most of the applications were similar to each other so for my SWOT analysis, i stuck with applications with strong differences amongst them.</p>
            <img class="mx-auto w-full max-w-6xl" src="/src/assets/koyata/swot-analysis.svg" alt=""></img>
        </section>

        <section class="my-12">
            <h3 class="text-neutral-200 text-xl font-bold mb-4">quantitative research.</h3>
            <p class="my-4 text-lg leading-relaxed font-normal">Armed with the languages people often use to learn languages, i proceeded to carry out quantitative research on potential users in the age bracket i was aiming to reach. I drafted some questions that would provide insights and sent them out to online communities of young people using Google Forms. </p>
            <div class="bg-white pl-8 py-6 my-12">
                <h1 class="text-[#0D56C2] text-3xl font-bold my-8">survey results (metrics)</h1>
                <div class="grid grid-cols-2 sm:grid-cols-4">
                    <img src="/src/assets/koyata/metrics-1.svg" alt="">
                    <img src="/src/assets/koyata/metrics-2.svg" alt="">
                    <img src="/src/assets/koyata/metrics-3.svg" alt="">
                    <img src="/src/assets/koyata/metrics-4.svg" alt="">
                </div>
                <p class="text-right mr-14">*About 90% of the audience were within ages 15-26. <br>40% of them had not used any language learning application prior to to the survey. <br> Percentages are most selected responses.</p>
            </div>

            <div class="bg-white p-8 my-12">
                <h1 class="text-[#0D56C2] text-3xl font-bold my-8">survey results (pain-points)</h1>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <img src="/src/assets/koyata/pain-points-1.svg" alt="">
                    <img src="/src/assets/koyata/pain-points-2.svg" alt="">
                </div>
            </div>
            
        </section>
        <section class="my-12">
            <h3 class="text-neutral-200 text-xl font-bold mb-4">creating a persona</h3>
            <p class="my-4 text-lg leading-relaxed font-normal">Referencing my user research, i wanted to create a user persona that helped me look at the people i was designing for from from a holistic point of view. This persona would represent my users and help me stay on track while considering their goals and pain points.</p>
            
                <div class="flex items-center justify-evenly flex-col mx-auto my-6 max-w-3xl sm:flex-row bg-[#1B1B1B] p-8 rounded-lg">
                    <div class="my-6 sm:my-0">
                        <img class="rounded-full mx-auto my-3" src="/src/assets/koyata/akanbi-michael.svg" alt="">
                        <h1 class="text-3xl text-white my-3 font-semibold">Akanbi Michael, 21</h1>
                        <h4 class="text-xl text-center">Student and Fashion Designer</h4>
                        <h4 class="text-xl text-center">Lagos, Nigeria</h4>
                    </div>

                    <div class="sm:border-l-2 sm:border-neutral-500 sm:pl-8 sm:ml-8">
                        <h3 class="text-white font-semibold my-3">CHALLENGES</h3>
                        <ul class="list-disc ml-5">
                            <li>Fares badly in Yoruba in class</li>
                            <li>Doesn't understand what his Yoruba friends say most of the time</li>
                            <li>Can'y interact with customers that primarily speak Yoruba</li>
                        </ul>
                        <h3 class="text-white font-semibold my-3">GOALS</h3>
                        <ul class="list-disc ml-5">
                            <li>Wants to be able to speak Yoruba like a natural</li>
                            <li>Wants to be able to quickly check the translation of words</li>
                            <li>Wants to be involved and engaged while learning</li>
                        </ul>
                    </div>
                </div>
            
        </section>

        <section class="my-12">
            <h3 class="text-neutral-200 text-xl font-bold mb-4">how might i use koyata to set the pace for digital language learning in Nigeria?</h3>
            <ul class="my-3 mx-8 list-decimal">
                <li class="text-neutral-300">Language learning apps need to prioritize motivating users to learn the language while alse adequately providing intersctive course content for learners.</li>
                <li class="text-neutral-300">Nigeria places its history and tradition in high esteem. Many of these are being passed down from parent to children while growing up. Considering most of the survey participants didn't get  the chance to learn, I had to look for a way to include a fix.</li>
                <li class="text-neutral-300">Users should be able too look up new words that they come in contact with easily.</li>
                <li class="text-neutral-300">Totally new users have voice rooms to help give new users first hand experience to hear the language been spoken and accustomed to the environment.</li>
            </ul> 
            
            <div class="bg-[#1B1B1B] rounded-lg p-8 my-6 mx-auto max-w-xl font-bold text-lg ">The goal for my design was to design an interactive, gamified experience that educated users not only on the language but also on the histories of their people.</div>
            <p>After considering the watch features, and seeing other apps which did something similar, i was able to brainstorm on possible features the app could have. I then used a prioritization grid to find out must have features and which should be most pronounced within the smartwatch and app interface.</p>
        </section>
        <section class="my-12">
            <h3 class="text-neutral-200 text-xl font-bold mb-4">drawing flows.</h3>
            <p class="my-4 text-lg leading-relaxed font-normal">Next... i proceeded to draw flows to illustrate what a typical user journey through the experience would be like. I started from the main functionality and then drew one for the entire exoerience.</p>
            <figure>
               <img src="/src/assets/koyata/flow.svg" alt=""> 
               <figcaption class="text-center">flow for a user starting a new lesson.</figcaption>
            </figure>
            
            <img class="mx-auto my-7 w-full max-w-2xl" src="/src/assets/koyata/information-architecture.svg" alt="">
            
        </section>

        <section class="my-12">
            <h3 class="text-neutral-200 text-xl font-bold mb-4">lo-fi wireframes and iterations</h3>
            <p class="my-4 text-lg leading-relaxed font-normal">I started the visual design process by putting together lo-fi designs of the product and performing few tests on users, thereby getting eatly feedback on what users thought about layouts and other vital components. </p>
            <img class="mx-auto my-7 w-full max-w-2xl" src="/src/assets/koyata/lofi-wireframes.svg" alt="">
            
        </section>
        <section class="my-12">
            <h3 class="text-neutral-200 text-xl font-bold mb-4">visual design</h3>
            <p class="my-4 text-lg leading-relaxed font-normal">After plenty iterations based on user feedback, I was ready to start adding colour. I thought about the personality of the brand, the emotions i’ts supposed to evoke in my users and was able to put together a moodboard to guide my visual design perspective. </p>
            <div class="grid gap-4 sm:grid-cols-2 max-w-3xl mx-auto mt-6">
                <img src="/src/assets/koyata/visual-design-1.svg" alt="">
                <img src="/src/assets/koyata/visual-design-2.svg" alt="">
            </div>
        </section>
        <section>
            <img src="/src/assets/koyata/brand-guidelines.svg" alt="">
        </section>
        <section class="my-12">
            <h3 class="text-neutral-200 text-xl font-bold mb-4">final thoughts and learnings.</h3>
            <p class="my-4 text-lg leading-relaxed font-normal">This project made me learn a lot about Gamification and it’s importance in Product Design. Gamification generally is a strong tool which when used properly, could yield really good results for both the users, and the product as well. For my next steps i’d love to explore better ways to introduce improve social interaction within the application. </p>
        </section>
        <section class="flex justify-between py-6 border-t-2 border-neutral-700">
            <router-link to="" class="flex items-center text-base font-bold sm:text-lg md:text-xl lg:text-2xl"><!--<img class="w-7 sm:w-10 rotate-180 mr-2" src="/src/assets/arrow.svg" alt="">--></router-link> 
            <router-link to="/spotify" class="flex items-center text-base font-bold sm:text-lg md:text-xl lg:text-2xl">spotify:lyrics and karaoke <img class="w-7 sm:w-10 ml-2" src="/src/assets/arrow.svg" alt=""></router-link>
        </section>
    </main>
    </transition>
</template>
<style scoped>
    h2 {
        background: -webkit-linear-gradient(180deg, #A8FFBB 16.21%, #6B81F0 41.72%, #CC48ED 81.21%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .gradient-text {
        background: -webkit-linear-gradient(180deg, #A8FFBB 16.21%, #6B81F0 35.72%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    img[src="src/assets/design-processes.svg"] {
        width: 100%;
    }
</style>