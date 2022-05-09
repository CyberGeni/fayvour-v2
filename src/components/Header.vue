<template>
    <header class="font-['Cabinet_Grotesk']">
        <router-link to="/">fayv.</router-link>
        <nav>
            <ul>
                <router-link to="/about"><li>about me.</li></router-link>
                <router-link to="/resume"><li>resume.</li></router-link>
                <a target="_blank" href="https://fayvouraj.medium.com/"><li>blog.</li></a>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    
}
</script>
<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
        font-size: 18px;
        height: 15vh;
        position: relative;
        z-index: 100;
    }
    nav ul {
        display: flex;
    }
    li {
        list-style: none;
        margin-left: 2em;
    }
    a {
        color: white;
        text-decoration: none;
    }
</style>