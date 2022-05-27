<template>
    <section id="about-me">
        <div class="container" data-aos="fade-up">
            <img src="../../assets/me.png" alt="Airowl Gasga">
            <div class="text">
                <h1>
                    about me
                </h1>
                <p>
                    My name is <span>Airowl Gasga</span>, I am 23 years old and I have always been an IT and technology enthusiast. I'm Filipino 🇵🇭 but I was born and raised (most of my life) in Milan, Italy, I got my <span>Junior Full Stack Web Developer</span> degree from Boolean Careers training course. I am always looking for new things to learn and try to keep myself updated regarding the latest development trends and technologies used.
                </p>
                <p>
                    The main technologies I use are these:
                </p>
                <ul>
                    <li v-for="(element, index) in tech" :key="index">
                        {{element}}
                    </li>
                </ul>
                <p>
                    Outside of work, I like to read manga and watch Japanese anime, sometimes I'm also a volleyball player and I'm a riser.
                </p>
            </div>
            
        </div>
    </section>
</template>

<script>
export default {
    name: 'sectionAboutMe',
    data: function() {
        return {
            tech: ['html & css', 'javascript', 'vuejs', 'php', 'laravel', 'mysql']
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../scss/style.scss';

section#about-me{

    h1, p, img{
        margin-bottom: 1rem;
    }

    div.container{
        
        @include breakpoint-up(){
            @include d-flex(row-reverse, space-between, center);
            gap: 4rem;
        };

        img{
            width: 100%;
            border-radius: 50%;

            @include breakpoint-up(){
                width: 30rem;
            }
        }

        div.text{
            ul{
                height: 8rem;
                @include d-flex(column, start, start);
                flex-wrap: wrap;

                li{
                    text-transform: uppercase;
                    height: calc(100% / 3);
                }
            }
        }
    }

    
}

</style>