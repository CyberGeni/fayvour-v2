<template>
    <main>
        <h1 class="">my work</h1>
        <section v-for="casestudy in cases" :key="casestudy.id">
            <router-link :to="casestudy.link" class="">
                <img class="" :src="casestudy.image" :alt="casestudy.description" />
                <h2>{{casestudy.title}}</h2>
                <p>{{casestudy.description}}</p>    
            </router-link>
        </section>
    </main>
</template>
<script>
export default {
    data() {
        return {
            cases: [
                {
                    image: '/src/assets/koyata.svg',
                    title: 'Koyata',
                    description: 'A language learning app that utilizes gamification techniques to help people learn Nigerian languages. Kinda like Duolingo, but a tad better. See how.',
                    link: 'koyata',
                    tag: 'EDU TECH',
                    id: 1
                },
                {
                    image: '/src/assets/spotify.svg',
                    title: 'Spotify',
                    description: 'I did some research and added a lyrics (before Spotify did) and karaoke feature to the platform. Check out my thought process and the results.',
                    link: 'spotify',
                    tag: 'MEDIA TECH',
                    id: 2
                },
                {
                    image: '/src/assets/daffodil.svg',
                    title: 'Daffodil',
                    description: 'I designed a hospital management dashboard. It helps to manage patients, appointments, among other things. Check it out here.',
                    link: 'daffodil',
                    tag: 'HEALTH TECH',
                    id: 3
                },
                {
                    image: '/src/assets/riskfree.svg',
                    title: 'Risk free',
                    description: 'A study conducted at the University of Michigan revealed that 73% of adults between the ages of 25 and 35 overthink. Check out my solution.',
                    link: 'riskfree',
                    tag: 'HEALTH TECH',
                    id: 4
                }
            ]
        }
    },
}
</script>
<style scoped>
    h1 {
        background: -webkit-linear-gradient(180deg, #A8FFBB 16.21%, #6B81F0 41.72%, #CC48ED 81.21%);
        color: rgba(27, 25, 25);
        /* the transparent content with just border thingy */
        -webkit-background-clip: text;
        -webkit-text-stroke: 4px transparent;
        width: fit-content;
    }
</style>