<template>
    <main>
        <header>
            <h2>RISK FREE</h2>
            <p>You can't help but <strong>overthink</strong> , we'll help you <strong>stop</strong></p>
        </header>
        <hr>
        <nav>
            <ul>
                <li>UX Research</li>
                <li>•</li>
                <li>UI Design</li>
                <li>•</li>
                <li>Prototype</li>
                <li>•</li>
                <li>Test</li>
            </ul>
        </nav>
        <hr>
        <img src="src/assets/riskfree/riskfree-intro.svg" alt="" class="intro">
        <section>
            <h3>about the app</h3>
            <p>Risk free is an app that leverages on the ability of a connected smart watch to detect over thinking. Cortisol is the blood hormone associated with stress. After connecting the smartwatch to your phone for the first time, the watch detects sudden spikes in these cortisol levels and buzzes. The app tells you your current cortisol level while recommending steps to take to reduce mental stress and help you chill.</p>
        </section>
        <section>
            <h3>design process</h3>
            <img src="src/assets/design-processes.svg" alt="">
        </section>
        
        <section>
            <h3>identifying the problem</h3>
            <p>The goal of this research was to find out what the view of potential users were on overthinking and what they were currently doing to tackle the problem.</p>
            <p>I made use of Google forms to carry out quantitative survey on potential users of the application to see their takes on overthinking and what they currently do to solve it. To be able to emotionally connect with and feel the users more, I also carried out qualitative, in-person interviews with 5 people. Altogether, I had responses from 45 different individuals. </p>
            <p>This survey showed that over 85% of people unnecessarily worry about certain things. From financial problems to school related issues, relationships to being accepted by the society, causes for long, unnecessary worry abound.</p>
            <p>Further research showed that overthinking causes a major strain on the mental and physical health of the individual. Health issues could go from minor headaches and body aches to depression and chronic anxiety. Anxiety also increases overthinking. Eventually, it becomes a harmful downward spiral.</p>
        </section>
        <section>
            <h3>checking out the competition</h3>
            <p>Keeping my main objective of designing an app to help people detect over thinking and reduce it in mind, I set out to find applications and that did a similar thing. This was done to learn from their mistakes and take note of core features that would have to be in my app. </p>
            <p>The result of this search though, was near fruitless as there's no app that exactly tells if a person is overthinking or not. I found some that did something similar like mental health care and meditation</p>
            <ol>
                <li><strong>Headspace</strong>  - Helps you relax through meditation</li>
                <li><strong>Pacifica</strong>  - Tracks your mood and gives exercises to help calm down</li>
                <li><strong>Worry watch</strong>  - Helps note of reasons why the user worries and records them.</li>
            </ol>
        </section>
        <section>
            <h3>finding pain points</h3>
            <p>From the responses I received from the interview participants, I was able to create an empathy map using the Think-Say-Feel-Do model.
This helped me determine their pain points.</p>
        </section>
    </main>
</template>
<script>
// import DesignProcess from '../../DesignProcess.vue'

export default {
    // components: {
        // 'design-process': DesignProcess
    // }
}
</script>
<style scoped>
    strong {
        font-family: 'Trap';
    }
    main {
        font-family: Circular;
        margin: 1em 0;
        width: 100%;
    }
    header {
        display: flex;
        flex-direction: column;
        text-align: center;
        color: white;
    }
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
    hr {
        margin: 2em 0;
    }
    nav ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 0.5em;
        margin: 0 16px;
    }
    nav ul li {
        list-style: none;
        color: #A6A5AE;
    }
    .intro {
        width: 100%;
        border-radius: 4px;
    }
    img[src="src/assets/design-processes.svg"] {
        width: 100%;
    }
    section h3 {
        color: white;
        font-weight: 500;
        margin: 2.5em 0 0.8em 0;
    }
    section p {
        color: #A6A5AE;
        font-weight: 500;
        line-height: 24px;
        font-size: 18px;
        margin: 1em 0;
    }
    ol {
        margin: 0.5em 1.8em;
    }
    ol li {
        line-height: 24px;
        font-size: 18px;
        color: #A6A5AE;
    }

</style>