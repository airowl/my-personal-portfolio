<template>
    <section id="about-me">
        <div class="container">
            <img src="../../assets/me.png" alt="Airowl Gasga">
            <div class="text">
                <h1>
                    about me
                </h1>
                <p>
                    Mi chiamo <span>Airowl Gasga</span>, ho 23 anni e da sempre sono un appassionato di informatica e tecnologia. Sono Filippino 🇵🇭  ma sono nato e cresciuto (per quasi tutta la vita) a Milano, ho conseguito il titolo di <span>Junior Full Stack Web Developer</span> presso il corso formativo di Boolean Careers. Sono sempre alla ricerca di cose nuove da imparare e cerco di tenermi aggiornato riguardo gli ultimi trend di sviluppo e tecnologie utilizzate. 
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
                    Fuori dal lavoro, mi piace leggere manga e guardare anime giapponesi, certe volte sono anche un giocatore di pallavolo e faccio l'alzatore.
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