<template>
    <main>
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

</style>