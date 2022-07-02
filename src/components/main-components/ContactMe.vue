<template>
    <section id="contact-me">
        <div class="container">
            <h1 data-aos="fade-up">
                scrivimi qui
            </h1>
            <ul class="social-icons">
                <li v-for="(element, index) in socialList" :key="index" data-aos="fade-up" >
                    <a :href="element.url" target="_blank">
                        <i :class="element.icon"></i>
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: 'sectionContactMe',
    data: function(){
        return {
            socialList: [
                {
                    icon: 'fa-brands fa-github',
                    url: 'https://github.com/airowl'
                },
                {
                    icon: 'fa-brands fa-linkedin',
                    url: 'https://www.linkedin.com/in/airowl-gasga-9a420b225/'
                },
                {
                    icon: 'fa-solid fa-envelope',
                    url: 'mailto:airowl.gasga@gmail.com'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../scss/style.scss';

section#contact-me{

    h1{
        margin-bottom: 1.5rem;
    }

    ul.social-icons{
        @include d-flex(row, start, center);

        li:not(:last-child){
            margin-right: 4rem;
        }

        i{
            font-size: 4rem;
        }
    }
}

</style>