<template>
    <header>
        <router-link to="/">fayv.</router-link>
        <nav>
            <ul>
                <router-link to="/about"><li>about me.</li></router-link>
                <router-link to="/resume"><li>resume.</li></router-link>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    
}
</script>
<style scoped>
    @font-face {
        font-family: Trap;
        src: url(/assets/fonts/Trap_/Trap-Regular.otf);
    }
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
        font-family: Trap;
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