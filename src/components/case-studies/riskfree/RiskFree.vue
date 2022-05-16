<template>
<transition name="fade">
    <main class="font-['Cabinet_Grotesk'] my-1 w-full text-neutral-400">
        <header class="flex flex-col text-center text-neutral-100">
            <h2>RISK FREE</h2>
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
            <h3 class="text-neutral-200 font-bold mb-4">about the app</h3>
            <p class="my-4 text-base leading-relaxed font-normal">Risk free is an app that leverages on the ability of a connected smart watch to detect over thinking. Cortisol is the blood hormone associated with stress. After connecting the smartwatch to your phone for the first time, the watch detects sudden spikes in these cortisol levels and buzzes. The app tells you your current cortisol level while recommending steps to take to reduce mental stress and help you chill.</p>
        </section>
        <section class="my-12">
            <h3 class="text-neutral-200 font-bold mb-4">design process</h3>
            <img src="src/assets/design-processes.svg" alt="">
        </section>
        
        <section class="my-12">
            <h3 class="text-neutral-200 font-bold mb-4">identifying the problem</h3>
            <p class="my-4 text-base leading-relaxed font-normal">The goal of this research was to find out what the view of potential users were on overthinking and what they were currently doing to tackle the problem.</p>
            <p class="my-4 text-base leading-relaxed font-normal">I made use of Google forms to carry out quantitative survey on potential users of the application to see their takes on overthinking and what they currently do to solve it. To be able to emotionally connect with and feel the users more, I also carried out qualitative, in-person interviews with 5 people. Altogether, I had responses from 45 different individuals. </p>
            <p class="my-4 text-base leading-relaxed font-normal">This survey showed that over 85% of people unnecessarily worry about certain things. From financial problems to school related issues, relationships to being accepted by the society, causes for long, unnecessary worry abound.</p>
            <p class="my-4 text-base leading-relaxed font-normal">Further research showed that overthinking causes a major strain on the mental and physical health of the individual. Health issues could go from minor headaches and body aches to depression and chronic anxiety. Anxiety also increases overthinking. Eventually, it becomes a harmful downward spiral.</p>
        </section>
        <section class="my-12">
            <h3 class="text-neutral-200 font-bold mb-4">checking out the competition</h3>
            <p class="my-4 text-base leading-relaxed font-normal">Keeping my main objective of designing an app to help people detect over thinking and reduce it in mind, I set out to find applications and that did a similar thing. This was done to learn from their mistakes and take note of core features that would have to be in my app. </p>
            <p class="my-4 text-base leading-relaxed font-normal">The result of this search though, was near fruitless as there's no app that exactly tells if a person is overthinking or not. I found some that did something similar like mental health care and meditation</p>
            <ol class="my-2 mx-8">
                <li class="text-neutral-300"><strong>Headspace</strong>  - Helps you relax through meditation</li>
                <li class="text-neutral-300"><strong>Pacifica</strong>  - Tracks your mood and gives exercises to help calm down</li>
                <li class="text-neutral-300"><strong>Worry watch</strong>  - Helps note of reasons why the user worries and records them.</li>
            </ol>
        </section>
        <section class="my-12">
            <h3 class="text-neutral-200 font-bold mb-4">finding pain points</h3>
            <p class="my-4 text-base leading-relaxed font-normal">From the responses I received from the interview participants, I was able to create an empathy map using the Think-Say-Feel-Do model.
This helped me determine their pain points.</p>
        </section>
    </main>
    </transition>
</template>
<style scoped>
    h2 {
        font-family: 'Trap';
        font-size: 2em;
        background: -webkit-linear-gradient(180deg, #A8FFBB 16.21%, #6B81F0 41.72%, #CC48ED 81.21%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 0.2em auto;
        width: fit-content;
        text-align: center;
    }

    img[src="src/assets/design-processes.svg"] {
        width: 100%;
    }
</style>