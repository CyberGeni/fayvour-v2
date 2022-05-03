<template>
    <main>
        <h1 class="leading-none text-4xl sm:text-5xl lg:text-7xl stroke-1 transition">selected cases</h1>
        <section v-for="casestudy in cases" :key="casestudy.id">
            <img class="w-24 sm:w-32 lg:48" :src="casestudy.image" :alt="casestudy.description" />
            <router-link :to="casestudy.link" class="text-white">
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
    main {
        position: relative;
        z-index: inherit;
        margin-top: 3em;
    }
    h1 {
        font-family: 'Trap';
        background: -webkit-linear-gradient(180deg, #A8FFBB 16.21%, #6B81F0 41.72%, #CC48ED 81.21%);
        color: rgba(27, 25, 25);
        /* the transparent content with just border thingy */
        -webkit-background-clip: text;
        -webkit-text-stroke: 4px transparent;
        margin: 0.2em 0;
        width: fit-content;
    }
    a {
        font-family: 'Circular';
        display: flex;
        flex-direction: column;
        align-items: space-evenly;
        text-decoration: none;
        color: white
    }
    h2 {
        font-size: 32px;
        font-weight: 500;
        margin-bottom: 0.1em;
    }
    section {
        display: flex;
        align-items: center;
        margin: 1.5em 0;
        transition: 350ms cubic-bezier(0, 0.98, 0.25, 1.13);
    }
    section:hover {
        margin-left: 4.5em;
        transform: scale(1.1);
    }
    section img {
        margin-right: 1.5em;
    }
</style>