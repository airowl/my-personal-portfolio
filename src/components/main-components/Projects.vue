<template>
    <section id="projects">
        <div class="container">
            <h1>
                projects
            </h1>
            <div class="wrapper-card">
                <ProjectCard 
                    v-for="(element, index) in cardList" 
                    :key="index"
                    :elementList="element" 
                />
            </div>
        </div>
    </section>
</template>

<script>
import ProjectCard from './ProjectCard.vue';

export default {
    name: 'sectionProjects',
    components: {
        ProjectCard
    },
    data: function(){
        return {
            cardList: [
                {
                    title: 'Fylo landing page',
                    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an.',
                    techs: 'html & css, vuejs',
                    iconResourse: '',
                    url: 'www.google.com'
                },
                {
                    title: 'Fylo landing page',
                    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an.',
                    techs: 'html & css, vuejs',
                    iconResourse: '',
                    url: 'www.google.com'
                },
                {
                    title: 'Fylo landing page',
                    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an.',
                    techs: 'html & css, vuejs',
                    iconResourse: '',
                    url: 'www.google.com'
                },
                {
                    title: 'Fylo landing page',
                    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an.',
                    techs: 'html & css, vuejs',
                    iconResourse: '',
                    url: 'www.google.com'
                },
                {
                    title: 'Fylo landing page',
                    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an.',
                    techs: 'html & css, vuejs',
                    iconResourse: '',
                    url: 'www.google.com'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../scss/style.scss';

section#projects{

    h1{
        margin-bottom: 1.5rem;
    }

    div.wrapper-card{
        @include d-flex(row, start, start);
        flex-wrap: wrap;
        gap: 1rem;
    }
}

</style>