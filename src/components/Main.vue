<template>
    <main>
        <div class="top-name" data-aos="fade-up">
            Airowl Gasga.
        </div>
        <Intro />
        <AboutMe />
        <Projects />
        <ContactMe />
    </main>
</template>

<script>
import axios from 'axios';
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
    },
    created() {
        this.getPosts();
    },
    methods: {
        getPosts(){
            axios.get('http://localhost:8000/api/posts')
            .then( (response) => {
                console.log(response.data.results);
            });
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/style.scss';

main{
    position: relative;

    div.top-name{
        position: absolute;
        top: 1rem;
        left: 50%;
        transform: translateX(-50%);
    }
}

</style>