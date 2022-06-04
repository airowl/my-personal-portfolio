<template>
    <div>
        <div>Params {{ $route.params.id }}</div>
        <div>{{ element.title }}</div>
    </div>
</template>

<script>
import data from '../../assets/data.json';

export default {
    name: 'ProjectsHome',
    data: function(){
        return{
            paramsId: this.$route.params.id,
            elements: data,
            element: null
        }
    },
    methods: {
        getElement(){
            this.element = this.elements.find(e => e.title === this.paramsId);
        }
    },
    mounted() {
        this.getElement();
        console.log(this.element);
    },
}
</script>

<style>

</style>