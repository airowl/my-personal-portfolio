<template>
    <div>
        <Intro />
        <AboutMe />
        <Projects />
        <ContactMe />
    </div>
</template>

<script>
import Intro from '../main-components/Intro.vue';
import AboutMe from '../main-components/AboutMe.vue';
import Projects from '../main-components/Projects.vue';
import ContactMe from '../main-components/ContactMe.vue';

export default {
    name: 'indexHome',
    components: {
        Intro,
        AboutMe,
        Projects,
        ContactMe
    },
}
</script>

<style lang="scss" scoped>
@import '../../scss/style.scss';

</style>