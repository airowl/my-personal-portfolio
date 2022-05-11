<template>
    <div class="card">
        
    </div>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: {
        elementList: Object
    },
}
</script>

<style lang="scss" scoped>
@import '../../scss/style.scss';

div.card{
    width: 16rem;
    height: 16rem;
    background-color: rgba($font-color, $alpha: .3);
    border-radius: 1.5rem;
}

</style>