<template>
    <main>
        <transition name="route" mode="out-in">
          <router-view></router-view>
        </transition>
    </main>
</template>

<script>

export default {
    name: 'indexMain',
    components: {
        
    },
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
        title: 'Airowl Gasga',
      // all titles will be injected into this template
        titleTemplate: '%s | Portfolio'
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/style.scss';

main{
  .route-enter-active,
  .route-leave-active {
    transition: all 0.5s ease-in-out;
  }

  .route-enter-from{
    opacity: 0;
    transform: translateX(100px);
  }

  .route-leave-to{
    opacity: 1;
    transform: translateX(-100px);
  }
}

</style>