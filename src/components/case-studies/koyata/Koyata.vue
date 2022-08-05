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
            <h3 class="text-neutral-200 text-lg font-bold mb-4">about the app</h3>
            <p class="my-4 text-base leading-relaxed font-normal">Koyata is a language learning application that leverages white hat gamification techniques to help young people learn Nigerian languages.</p>
        </section>
        <section class="my-12">
            <h3 class="text-neutral-200 text-lg font-bold mb-4">design process</h3>
            <img src="src/assets/design-processes.svg" alt="">
        </section>
        
        <section class="my-12">
            <h3 class="text-neutral-200 text-lg font-bold mb-4">identifying the problem</h3>
            <p class="my-4 text-base leading-relaxed font-normal">Many people are finding it difficult to learn their mother tongue due to different reasons. This makes it difficult for them to connect with their histories and have proper conversations with people that speak the language. People that are visiting also want to learn the language used so they can connect with people better. Even in urban places like Lagos, Nigeria where English is spoken by all, people feel very comfortable interacting in their mother tongue when they see someone who understands them.</p>
        </section>

        <section class="my-12">
            <h3 class="text-neutral-200 text-lg font-bold mb-4">market research</h3>
            <p class="my-4 text-base leading-relaxed font-normal">To start, i conducted research on the market to see what solutions are currently available to solve this problem. I was able to identify a handful of applications and websites that offered solutions. Because of the small number of the quality content offered by the applications offering nigerian languages, i widened my scope to include language learning applications that didn’t offer Nigerian Languages but offered other foreign languages like Spanish, French and Japanese.</p>
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
            <h3 class="text-neutral-200 text-lg font-bold mb-4">swot analysis</h3>
            <p class="my-4 text-base leading-relaxed font-normal">As mentioned earlier, there aren’t a lot of applications to cater for people wanting to learn NIgerian languages. A lot of UX and UI issues were found with the ones i found. Most of the applications were similar to each other so for my SWOT analysis, i stuck with applications with strong differences amongst them.</p>
        </section>

        <section class="my-12">
            <h3 class="text-neutral-200 text-lg font-bold mb-4">finding pain points</h3>
            <p class="my-4 text-base leading-relaxed font-normal">From the responses I received from the interview participants, I was able to create an empathy map using the Think-Say-Feel-Do model.
This helped me determine their pain points.</p>
            <div>
                <img class="mx-auto w-full max-w-2xl" src="/src/assets/riskfree_painpoints.svg" alt="">
            </div>
        </section>
        <section class="my-12">
            <h3 class="text-neutral-200 text-lg font-bold mb-4">creating a persona</h3>
            <p class="my-4 text-base leading-relaxed font-normal">To better understand and put into perspective of what sort of people I was designing for, I created a user persona</p>
            
                <div class="flex items-center justify-evenly flex-col mx-auto my-6 max-w-3xl sm:flex-row bg-[#1B1B1B] p-8 rounded-lg">
                    <div class="my-6 sm:my-0">
                        <img class="rounded-full mx-auto my-3" src="/src/assets/riskfree/tony-starkt.svg" alt="">
                        <h1 class="text-3xl text-white my-3 font-semibold">Tony Starkt, 21</h1>
                        <h4 class="text-xl">Student</h4>
                        <h4 class="text-xl">Lagos, Nigeria</h4>
                    </div>

                    <div class="sm:border-l-2 sm:border-neutral-500 sm:pl-8 sm:ml-8">
                        <h3 class="text-white font-semibold my-3">MAJOR WORRY CAUSES</h3>
                        <p>Work, Education</p>
                        <h3 class="text-white font-semibold my-3">CHALLENGES</h3>
                        <ul class="list-disc ml-5">
                            <li>He doesn't get as much people patronizing his work</li>
                            <li>He has extreme pressure from parents to do well at school</li>
                        </ul>
                        <h3 class="text-white font-semibold my-3">GOALS</h3>
                        <ul class="list-disc ml-5">
                            <li>Wants to be happy and forget his problems</li>
                            <li>Wants to be able to write down thoughts</li>
                            <li>Wants to be aware of when exactly he is overthinking</li>
                        </ul>
                    </div>
                </div>
            
        </section>

        <section class="my-12">
            <h3 class="text-neutral-200 text-lg font-bold mb-4">cracking the "how might we" questions</h3>
            <p class="my-3 text-base leading-relaxed font-normal">Based on the user's pain points, I asked myself the 'how might we' questions to help me see clearly, ,important isses that needed addressing.</p>
            <p class="my-2 text-base leading-relaxed font-normal">How might we:</p>
            <ul class="my-3 mx-8 list-disc">
                <li class="text-neutral-300">Detect that the user is overthinking?</li>
                <li class="text-neutral-300">Help the user to feel calm within the app?</li>
                <li class="text-neutral-300">Calm the user down if the result of the analysis says the user is overthinking?</li>
            </ul> 
            <p class="my-3">I jotted down a lot of ideas as they came. I did some research and discovered that <span class="gradient-text">Cortisol, a hormone in the body, is responsible for stress. </span>Overthinking causes mental stress and as such...</p>
            <div class="bg-[#1B1B1B] rounded-lg p-8 my-6 mx-auto max-w-xl font-bold text-lg ">"if i could track changes in cortisol levels, i could help the wearer detect overthinking and inform them with a beep."</div>
            <p>After considering the watch features , and seeing other apps which did something similar, i was able to brainstorm on possible features the app could have. I then used a prioritization grid to find out must have features and which should be most pronounced within the smartwatch and app interface.</p>
        </section>
        <section class="my-12">
            <h3 class="text-neutral-200 text-lg font-bold mb-4">flows and sketches</h3>
            <div>
                <h3 class="text-center font-semibold text-lg text-white">INFORMATION ARCHITECTURE</h3>
                <img class="mx-auto my-7 w-full max-w-2xl" src="/src/assets/riskfree_informationarchitecture.svg" alt="">
            </div>
        </section>
        <section class="my-12">
            <h3 class="text-neutral-200 text-lg font-bold mb-4">usability testing</h3>
            <p class="my-4 text-base leading-relaxed font-normal">I gave the prototype to several people to see their thoughts on the app and give complaints too.
All of them were able to complete tasks without difficulty.</p>
        </section>
        <section class="my-12">
            <h3 class="text-neutral-200 text-lg font-bold mb-4">conclusion and takeaways</h3>
            <p class="my-4 text-base leading-relaxed font-normal">This was a very interesting project to work on. I’d like to add that at the time of writing this case study, there is currently no smart watch that tracks cortisol levels, so the idea is purely hypothetical.
It made me step out of my comfort zone so i could understand people better and come up with a solution that would suit their needs. I learnt that a designer’s job goes beyond delighting users. It also involves bringing value. 

For further iteration, i would like to further explore ways of using technology to reduce overthinking and explore better ways of presenting the data.</p>
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