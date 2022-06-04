<template>
    <main>
        <router-view />
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

</style>