<template>
    <section id="about-me">
        <div class="container" data-aos="fade-up">
            <img src="../../assets/me.png" alt="Airowl Gasga">
            <div class="text">
                <h1>
                    chi sono
                </h1>
                <p>
                    Mi chiamo <span>Airowl Gasga</span>, ho 23 anni e sono sempre stato un appassionato di informatica e tecnologia. Sono filippino ma sono nato e cresciuto (per la maggior parte della mia vita) a Milano, Italia, ho conseguito il diploma di <span>Junior Full Stack Web Developer</span> presso il corso di formazione Boolean Careers. Sono sempre alla ricerca di nuove cose da imparare e cerco di tenermi aggiornato sulle ultime tendenze di sviluppo e sulle tecnologie utilizzate.
                </p>
                <p>
                    Le principali tecnologie che utilizzo sono queste:
                </p>
                <ul>
                    <li v-for="(element, index) in tech" :key="index">
                        {{element}}
                    </li>
                </ul>
                <p>
                    Al di fuori del lavoro, mi piace leggere manga, guardare anime giapponesi e giocare a pallavolo.
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