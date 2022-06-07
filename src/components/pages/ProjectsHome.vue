<template>
    <div id="project-home">
        <div>{{ this.$route.params.id }}</div>
        <div class="container">
            <h1>{{ getFirstUppercase(element.title) }}</h1>
            <div class="thumbnail" @mouseleave="autoPlay()" @mouseover="stopAutoPlay()">
                <div class="arrow-left" @click="prevThumb()">
                    <i class="fa-solid fa-chevron-left"></i>
                </div>
                    <img :src="require(`@/assets/img/${image}`)" :alt="element.title" v-for="(image, index) in element.images" :key="index" :class="(index == activeElement) ? 'active' : ''">
                <div class="arrow-right" @click="nextThumb()">
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>
            <div class="wrapper">
                <div class="left">
                    <h2>Tecnologies:</h2>
                    <i :class="icon" v-for="(icon, index) in element.iconTechs" :key="index"></i>
                </div>
                <div class="right">
                    <h2>Details:</h2>
                    <p>{{element.text}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import data from '../../assets/data.json';

export default {
    name: 'ProjectsHome',
    data: function(){
        return{
            paramsId: this.$route.params.id.split('-').join(' '),
            elements: data,
            element: null,
            activeElement: 0,
            autoPlayNext: null
        }
    },
    methods: {
        getElement(){
            this.element = this.elements.find(e => e.title === this.paramsId);
        },
        getFirstUppercase(element){
            return element.charAt(0).toUpperCase() + element.slice(1);
        },
        nextThumb(){
            if (this.activeElement == this.element.images.length - 1) {
                this.activeElement = 0;
            } else {
                this.activeElement++;
            }
        },
        prevThumb(){
            if (this.activeElement == 0) {
                this.activeElement = this.element.images.length - 1;
            } else {
                this.activeElement--;
            }
        },
        autoPlay(){
            this.autoPlayNext = setInterval(() =>{
                this.nextThumb();
            }, 3000);
        },
        stopAutoPlay(){
            clearInterval(this.autoPlayNext);
            this.autoPlayNext = null;
        }
    },
    mounted() {
        this.getElement();
        console.log(this.element);
    },
}
</script>

<style lang="scss" scoped>
@import '../../scss/style.scss';

div#project-home{
    div.container{
        padding-top: 4rem;

        div.thumbnail,
        div.left,
        div.right{
            background-color: rgba($font-color, $alpha: .2);
            border-radius: 1.5rem;
        }

        div.thumbnail{
            height: 70vh;
            width: 100%;
            padding: 0 8rem;
            margin-top: 3rem;
            position: relative;
            @include d-flex(row, start, start);

            img{
                width: 100%;
                height: 100%;
                object-fit: contain;
                display: none;

                &.active{
                    display: block;
                }
            }

            div.arrow-left,
            div.arrow-right{
                position: absolute;
                height: 100%;
                width: 10rem;
                background-color: rgba(#000, $alpha: .8);
                top: 0;
                @include d-flex(row, center, center);
                opacity: 0;
                transition: $default-transition;

                &:hover{
                    opacity: 1;
                }
            }

            div.arrow-left{
                left: 0;
            }

            div.arrow-right{
                right: 0;
            }

            i{
                font-size: 4rem;
            }
        }

        div.wrapper{
            @include d-flex(row, space-between, center);
            margin-top: 4rem;

            div.left,
            div.right{
                height: 15rem;
                padding: 2rem 3rem;
                overflow-y: scroll;
                -ms-overflow-style: none; /* for Internet Explorer, Edge */
                scrollbar-width: none; /* for Firefox */

                &::-webkit-scrollbar{
                    display: none; /* for Chrome, Safari, and Opera */
                }
            }

            div.left{
                width: 40%;

                i{
                    font-size: 3rem;

                    &:not(:last-child){
                        margin-right: 1.5rem;
                    }
                }
            }
            
            div.right{
                width: 55%;
            }
        }
    }
}

</style>