<template>
    <main class="w-full overflow-x-hidden">
        <hero></hero>
        <case></case>
    </main>
</template>
<script>
import Hero from './Hero.vue'
import CaseStudies from './CaseStudies.vue'
export default {
    components: {
        'hero': Hero,
        'case': CaseStudies
    }
}
</script>