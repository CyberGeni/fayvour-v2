<template>
<transition name="fade">
    <main class="font-['Cabinet_Grotesk'] my-1 w-full text-neutral-400">
        <header class="flex flex-col text-center text-neutral-100">
            <h2 class="w-fit text-center text-lg font-medium mx-auto my-3">RISK FREE</h2>
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
        <img src="src/assets/riskfree/riskfree-intro.svg" alt="" class="w-full rounded-xl">
        <section class="my-12">
            <h3 class="text-neutral-200 text-xl font-bold mb-4">about the app</h3>
            <p class="my-4 text-lg leading-relaxed font-normal">Risk free is an app that leverages on the ability of a connected smart watch to detect over thinking. Cortisol is the blood hormone associated with stress. After connecting the smartwatch to your phone for the first time, the watch detects sudden spikes in these cortisol levels and buzzes. The app tells you your current cortisol level while recommending steps to take to reduce mental stress and help you chill.</p>
        </section>
        <section class="my-12">
            <h3 class="text-neutral-200 text-xl font-bold mb-4">design process</h3>
            <img src="src/assets/design-processes.svg" alt="">
        </section>
        
        <section class="my-12">
            <h3 class="text-neutral-200 text-xl font-bold mb-4">identifying the problem</h3>
            <p class="my-4 text-lg leading-relaxed font-normal">The goal of this research was to find out what the view of potential users were on overthinking and what they were currently doing to tackle the problem.</p>
            <p class="my-4 text-lg leading-relaxed font-normal">I made use of Google forms to carry out quantitative survey on potential users of the application to see their takes on overthinking and what they currently do to solve it. To be able to emotionally connect with and feel the users more, I also carried out qualitative, in-person interviews with 5 people. Altogether, I had responses from 45 different individuals. </p>
            <p class="my-4 text-lg leading-relaxed font-normal">This survey showed that over 85% of people unnecessarily worry about certain things. From financial problems to school related issues, relationships to being accepted by the society, causes for long, unnecessary worry abound.</p>
            <p class="my-4 text-lg leading-relaxed font-normal">Further research showed that overthinking causes a major strain on the mental and physical health of the individual. Health issues could go from minor headaches and body aches to depression and chronic anxiety. Anxiety also increases overthinking. Eventually, it becomes a harmful downward spiral.</p>
        </section>
        <section class="my-12">
            <h3 class="text-neutral-200 text-xl font-bold mb-4">checking out the competition</h3>
            <p class="my-4 text-lg leading-relaxed font-normal">Keeping my main objective of designing an app to help people detect over thinking and reduce it in mind, I set out to find applications and that did a similar thing. This was done to learn from their mistakes and take note of core features that would have to be in my app. </p>
            <p class="my-4 text-lg leading-relaxed font-normal">The result of this search though, was near fruitless as there's no app that exactly tells if a person is overthinking or not. I found some that did something similar like mental health care and meditation</p>
            <ol class="my-2 mx-8 list-decimal">
                <li><strong>Headspace</strong>  - Helps you relax through meditation</li>
                <li><strong>Pacifica</strong>  - Tracks your mood and gives exercises to help calm down</li>
                <li><strong>Worry watch</strong>  - Helps note of reasons why the user worries and records them.</li>
            </ol>
        </section>
        <section class="my-12">
            <h3 class="text-neutral-200 text-xl font-bold mb-4">finding pain points</h3>
            <p class="my-4 text-lg leading-relaxed font-normal">From the responses I received from the interview participants, I was able to create an empathy map using the Think-Say-Feel-Do model.
This helped me determine their pain points.</p>
            <div>
                <img class="mx-auto w-full max-w-2xl" src="/src/assets/riskfree_painpoints.svg" alt="">
            </div>
        </section>
        <section class="my-12">
            <h3 class="text-neutral-200 text-xl font-bold mb-4">creating a persona</h3>
            <p class="my-4 text-lg leading-relaxed font-normal">To better understand and put into perspective of what sort of people I was designing for, I created a user persona</p>
            
                <div class="flex items-center justify-evenly flex-col mx-auto my-6 max-w-4xl sm:flex-row bg-[#1B1B1B] p-10 px-14 rounded-lg">
                    <div class="my-6 sm:my-0">
                        <img class="rounded-full mx-auto my-3" src="/src/assets/riskfree/tony-starkt.svg" alt="">
                        <h1 class="text-3xl text-white my-3 font-semibold">Tony Starkt, 21</h1>
                        <h4 class="text-xl text-center">Student</h4>
                        <h4 class="text-xl text-center">Lagos, Nigeria</h4>
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
            <h3 class="text-neutral-200 text-xl font-bold mb-4">cracking the "how might we" questions</h3>
            <p class="my-3 text-lg leading-relaxed font-normal">Based on the user's pain points, I asked myself the 'how might we' questions to help me see clearly, ,important isses that needed addressing.</p>
            <p class="my-2 text-lg leading-relaxed font-normal">How might we:</p>
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
            <h3 class="text-neutral-200 text-xl font-bold mb-4">flows and sketches</h3>
            <div>
                <h3 class="text-center font-semibold text-lg text-white">INFORMATION ARCHITECTURE</h3>
                <img class="mx-auto my-7 w-full max-w-2xl" src="/src/assets/riskfree_informationarchitecture.svg" alt="">
            </div>
        </section>
        <section class="my-12">
            <h3 class="text-neutral-200 text-xl font-bold mb-4">usability testing</h3>
            <p class="my-4 text-lg leading-relaxed font-normal">I gave the prototype to several people to see their thoughts on the app and give complaints too.
All of them were able to complete tasks without difficulty.</p>
        </section>
        <section class="my-12">
            <h3 class="text-neutral-200 text-xl font-bold mb-4">conclusion and takeaways</h3>
            <p class="my-4 text-lg leading-relaxed font-normal">This was a very interesting project to work on. I’d like to add that at the time of writing this case study, there is currently no smart watch that tracks cortisol levels, so the idea is purely hypothetical.
It made me step out of my comfort zone so i could understand people better and come up with a solution that would suit their needs. I learnt that a designer’s job goes beyond delighting users. It also involves bringing value. 

For further iteration, i would like to further explore ways of using technology to reduce overthinking and explore better ways of presenting the data.</p>
        </section>


        <section class="flex justify-between py-6 border-t-2 border-neutral-700">
            <router-link to="/koyata" class="flex items-center text-base font-bold sm:text-lg md:text-xl lg:text-2xl"><img class="w-7 sm:w-10 rotate-180 mr-2" src="/src/assets/arrow.svg" alt="">koyata</router-link>
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