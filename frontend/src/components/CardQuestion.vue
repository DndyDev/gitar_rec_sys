<template>
    <div class="container ">
    <div class="row ">
        <div class="col s12 m6 offset-l1">
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                    <span class="card-title">
<!--                        {{ cur_question && cur_question.length > 0 ? cur_question : "" }}-->
                        {{ cur_question }}
                    </span>
                    <blockquote>
<!--                        {{ cur_text && cur_text.length > 0 ? cur_text : ""}}-->
                        {{ cur_text }}</blockquote>
                </div>
                <div class="card-action" ><p  v-for="cur_answers in questions[i].answers" :key="cur_answers.id">
                    <a class ='btn' @click="getQuestion">
<!--                        {{ cur_answer && cur_answer > 0 ? cur_answer : ""}}-->
                        {{cur_answers.answer}}</a>
                </p>
<!--                    <a class ='btn' @click="getQuestion">Тест</a>-->
<!--                    <a class ='btn'>Тест по теории музыки</a>-->
<!--                    <a class ='btn'>Рекомендательная система</a>-->
                </div>
            </div>
        </div>
    </div>
        <CardGuitar></CardGuitar>
    </div>
</template>

<script>
    // import CardRegistration from '@/components/CardRegistration.vue'
    import CardGuitar from "@/components/CardGuitar";
    export default {
        name: "CardQuestion",
        components: {CardGuitar},

        //TODO Разобраться с data
        data: function () {
            return {
                CG:CardGuitar,
                sum:0,
                i:0,
                q_sum: "Предполагаемая сумма",
                questions:[
                    {
                        question:"Первый раз возьмёт в руки гитару ?",
                        answers:[
                            {answer:"Да"},
                            {answer:"Нет"}],
                        text:"Чем выше звучание инструмента,тем он качественнее"
                    },
                    {
                        question:"Какой предпочитает стиль ?",
                        //ToDo Из объектов сделать параметр строчного типа
                        answers:[
                            {answer:"Фламенко,классика,фолк,блюз,поп,джас"},
                            {answer:"Рок во всех его видах"},
                            {answer:"Кантри,блюсграсс,фингерстаил,блюз"},
                            ],
                        text:"Не человек выбирает гитару,а гитара человека"
                    },


                ],
                cur_question: "Первый раз возьмёт в руки гитару ?",
                cur_text: "Чем выше звучание инструмента,тем он качественнее",
                cur_answer: "",
            }
        },
        // components: {
        //     CardRegistration
        // },

        methods:{
            //TODO сделать обход незначащего поля

            getQuestion() {
                this.i++
                this.cur_question = this.questions[this.i].question
                // this.cur_answer = this.questions[this.i].answers
                // this.cur_answer = this.key.answer
                this.CG.methods.getGuitar()
                this.cur_text = this.questions[this.i].text



            },
            getSum(){
                this.cur_question = this.q_sum
                // this.sum
            },
            changeQuestion(){
                switch (this.cur_answer.valueOf()) {
                    case "Нет":
                        this.getSum()
                        // console.log("Нет")
                        break;

                    case "Да":
                        this.getQuestion()
                        // console.log("Да")
                        break;
                    // default:
                    //     this.getQuestion()
                    //     break;
                }
            },
        }

    }
</script>

<style scoped>
p{
    /*font-family: Ebrima;*/
}
</style>