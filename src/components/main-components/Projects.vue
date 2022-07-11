<template>
    <section id="projects">
        <div class="container">
            <h1 data-aos="fade-up">
                I miei progetti
            </h1>
            <div class="wrapper-card">
                <ProjectCard 
                    v-for="(element, index) in cardList" 
                    :key="index"
                    :elementList="element" 
                    data-aos="fade-up"
                    :class="index % 2 ? 'margin-top' : '' "
                />
            </div>
        </div>
    </section>
</template>

<script>
import ProjectCard from './ProjectCard.vue';
import data from '../../assets/data.json';

export default {
    name: 'sectionProjects',
    components: {
        ProjectCard
    },
    data: function(){
        return {
            cardList: data
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
        @include d-flex(row, space-evenly, start);
        flex-wrap: wrap;
        gap: 1rem;
    }

    .margin-top{

        @include breakpoint-up(){
            margin-top: 10rem;
        }
    }
}

</style>