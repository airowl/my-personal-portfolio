<template>
    <div class="card">
        <h2>{{ elementList.title }}</h2>
        <p>{{ elementList.text }}</p>
        <div class="bottom">
            <span>
                {{ elementList.techs }}
            </span>
            <a :href="elementList.url">
                <i class="fa-brands fa-github"></i>
            </a>
        </div>
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
    background-color: rgba($font-color, $alpha: .2);
    border-radius: 1.5rem;
    padding: 2rem;
    @include d-flex(column, space-between, start);

    @include breakpoint-up(){
        width: 18.13rem;
        height: 18.13rem;
    };

    h2{
        @include breakpoint-up(){
            font-size: 1.5rem;
        };
    }

    p{
        font-size: .6rem;
    }

    div.bottom{
        width: 100%;
        @include d-flex(row, space-between, end);

        span{
            font-size: .6rem;
            color: $font-color;
            text-transform: uppercase;
        }

        i{
            font-size: 2rem;
        }
    }
}

</style>