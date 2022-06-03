<template>
  <div id="app">
    <div class="top-name">
      Airowl Gasga.
    </div>
    <Main />
    <Footer />
  </div>
</template>

<script>
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Main,
    Footer
  }
}
</script>

<style lang="scss">
@import './scss/style.scss';

div#app{
  position: relative;

    div.top-name{
        position: absolute;
        top: 1rem;
        left: 50%;
        transform: translateX(-50%);
    }
}

</style>
