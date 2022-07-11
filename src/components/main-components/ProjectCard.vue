<template>
    <div class="card">
        <img :src="require(`@/assets/img/${elementList.image}`)" :alt="elementList.title">
        <div class="content">
            <!--<router-link :to="{ name: 'projectsHome', params: {id: getSlug(elementList.title)} }">-->
                <a :href="elementList.live" target="_blank" rel="noopener noreferrer">
                    <h2>{{getFirstUppercase(elementList.title)}}</h2>
                </a>
            <!--</router-link>-->
                <div class="bottom">
                    <span>
                        <i v-for="(icon, index) in elementList.iconTechs" :key="index" :class="icon"></i>
                    </span>
                    <a :href="elementList.url" target="_blank" >
                        <i class="fa-brands fa-github"></i>
                    </a>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: {
        elementList: Object
    },
    data: function(){
        return{

        }
    },
    methods: {
        //getSlug(title){
        //    return title.split(' ').join('-');
        //},
        getFirstUppercase(element){
            return element.charAt(0).toUpperCase() + element.slice(1);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../scss/style.scss';

div.card{
    width: 100%;
    height: 16rem;
    border-radius: 1.5rem;
    overflow: hidden;
    position: relative;
    background-color: rgba($font-color, $alpha: .5);

    @include breakpoint-up(){
        width: 32rem;
        height: 28.13rem;
    };

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover div.content{
        height: 8rem;
    }

    div.content{
        width: 100%;
        height: 5rem;
        background-color: $font-color;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        padding: .8rem 1.5rem;
        transition: $default-transition;
        @include d-flex(column, space-between, start);

        h2,p {
            color: #000;
        }

    }
    h2{
        @include breakpoint-up(){
            font-size: 1.5rem;
        };
    }

    p{
        font-size: .6rem;
    }

    &:hover div.bottom{
        opacity: 1;
    }

    div.bottom{
        width: 100%;
        @include d-flex(row, space-between, end);
        opacity: 0;
        transition: $default-transition;

        span{
            font-size: .6rem;
            color: #000;
            
            i:not(:last-child){
                margin-right: 1rem;
            }
        }

        i{
            font-size: 2rem;
            color: #000;
        }
    }

    a:hover{
        text-decoration: underline;
        color: black;
    }
}

</style>