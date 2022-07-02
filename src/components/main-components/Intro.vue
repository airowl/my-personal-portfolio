<template>
    <section id="intro">
        <div class="container">
            <h1 data-aos="fade-up">
                Ciao, sono <span>Airowl</span>
            </h1>
            <h2 data-aos="fade-up">
                Junior Full Stack Web Developer
            </h2>
            <a href="mailto:airowl.gasga@gmail.com" class="btn" data-aos="fade-up">
                Scrivimi
            </a>
        </div>
    </section>
</template>

<script>
export default {
    name: 'sectionIntro'
}
</script>

<style lang="scss" scoped>
@import '../../scss/style.scss';

section#intro{

    h2{
        margin-bottom: 1rem;
    }
}

</style>