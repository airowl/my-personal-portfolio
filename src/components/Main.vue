<template>
    <main>
        <div class="top-name">
            Airowl Gasga.
        </div>
        <Intro />
        <AboutMe />
        <Projects />
        <ContactMe />
    </main>
</template>

<script>
import Intro from './main-components/Intro.vue';
import AboutMe from './main-components/AboutMe.vue';
import Projects from './main-components/Projects.vue';
import ContactMe from './main-components/ContactMe.vue';

export default {
    name: 'indexMain',
    components: {
        Intro,
        AboutMe,
        Projects,
        ContactMe
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/style.scss';

main{
    position: relative;

    div.top-name{
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    }
}

</style>