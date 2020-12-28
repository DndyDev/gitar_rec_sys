<template>
    <div class="card  col s6 m6 l6">
        <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" :src="guitars[1].image">
        </div>
        <div class="card-content">
            <span class="card-title activator grey-text text-darken-4"><p>{{guitars[1].model}}</p>
                <i class="material-icons right">more_vert</i></span>
        </div>
        <div class="card-reveal">
            <span class="card-title grey-text text-darken-4"><p>{{guitars[1].model}}</p><i class="material-icons right">close</i></span>
            <p>{{guitars[1].description}}</p>
        </div>
    </div>
</template>

<script>
    import flight_1 from '@/assets/guitars/flight_c_120_nat_b.jpg'
    import alhambra from '@/assets/guitars/alhambra_1c_3.jpg'
    import flight_2 from '@/assets/guitars/flight_c_125_nat.jpg'
    import kremona from '@/assets/guitars/kremona_fc_-_artist.jpg'
    import master from '@/assets/guitars/rose_st.jpg'
    import gibson from '@/assets/guitars/gibson_lp_studio.jpg'
    import acustic from"@/assets/guitars/sevillica_iw_235_na.jpg"
    import {mapState} from 'vuex'
    export default {
        name: "CardGuitar",
        data: function (){
        return {
            text:"Альгамбра – это не только великолепный дворцовый комплекс в Гранаде.\n" +
                "                Это еще и не менее великолепные гитары, " +
                "в каждой из которых заключена частичка Испании…\n" +
                "                Не случайно инструменты валенсийской Manufacturas Alhambra," +
                " SL Guitarras  были официально введены в систему образования Испании\n" +
                "                – преподавание гитары во всех музыкальных учебных заведениях страны " +
                "велось именно на гитарах «Альгамбра».",
            i: 1,
            guitars: [
                {model: "Flight C 120 Nat", image: flight_1,
                    description:"Полноразмерная классическая гитара с барабаном из Ели и грифом Махагони"},
                {model: "Gibson Les Paul Studio", image: gibson,
                    description:"Гитара из красного дерева, фиксированный бридж Tune-o-Matic /w Stopbar " +
                        "со звукоснимателями фирмs Gibson"},
                {model: "Kremona FC-Artist",image: kremona,description:"Верхняя дека: массив красного кедра.\n" +
                        "Задняя дека и обечайки: массив индийского палисандра.\n" +
                        "Гриф: гондурасский кедр."},
                {model: "Alhambra 1C",image: alhambra,description:"Верхняя дека: массив красного кедра\n" +
                        "Нижняя дека и обечайка: красное дерево\n" +
                        "Гриф: красное дерево"},
                {model: "ROSE ST",image: master,description:""},
                {model: "Flight C 125 Nat 3/4",image: flight_2,description:"Матовое покрытие, верхняя дека - ель, " +
                        "корпус-сапеле"},
                {model: "SEVILLIA IW 235 ",image: acustic,description:"Верхняя дека\tель\n" +
                        "Нижняя дека и обечайка\tмеранти\n" +
                        "Гриф\tдерево Нато"},
            ]
        }
        },
        computed:{
            ...mapState({
                guitars:state => state.guitars
            })
        },
        methods:{
            getGuitar(){
                this.i++
                console.log("New Guitar")

            }
        }
    }
</script>

<style scoped>

</style>