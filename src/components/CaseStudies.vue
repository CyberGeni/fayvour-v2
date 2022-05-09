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
                    image: '/src/assets/risk-free-logo.svg',
                    title: 'risk free',
                    description: 'a new way to quit over thinking',
                    link: 'riskfree',
                    id: 1
                },
                {
                    image: '/src/assets/spotify-logo.svg',
                    title: 'spotify',
                    description: 'exploring lyrics and karaoke features',
                    link: 'spotify',
                    id: 2
                },
                {
                    image: '/src/assets/smart-ear-logo.svg',
                    title: 'smart ear',
                    description: 'coming soon...',
                    link: 'smart-ear',
                    id: 3
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