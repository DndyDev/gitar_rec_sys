<template>
    <div class="CardRegistration">
     <div class="container">
        <div class="row">
            <div class="col s12 m7 l5 offset-l3">
                <div class="card" >
                    <div class="card-image">
                        <img :src="guitargif" >
                        <span class="card-title">Подбор гитары</span>
                    </div>
                    <div class="card-content" >
                        <p>{{text}}</p>
                    </div>
                    <div class="card-action">
                        <div class="row">
                            <div class="input-field col s3">
                                <input v-model="f_name" id="first_name" type="text" class="validate ">
                                <label for="first_name" class="">Имя</label>
                            </div>

                            <div class="input-field col s3">
                                <input v-model="l_name" id="last_name" type="text" class="validate">
                                <label for="last_name" class="">Фамилия</label>
                            </div>
                            <div class="row">
    <!--                            TODO Проход по постa условию-->
                                <button class="btn waves-effect waves-light col s6 offset-s1 "  type="submit"
                                        name="action"  @click="addUser" >
                                    Подобрать
                                    <i class="material-icons right">send</i>

                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </div>
</template>

<script>
    import guitargif from '@/assets/guitar.gif'
    import CardQuestion from '@/components/CardQuestion.vue'
    export default {
        name: "CardRegistration",
        data: function () {
            return{
                CQ : CardQuestion,
                guitargif,
                text: "Кому выбираете гитару ?",
                user: {
                    first_name: "",
                    last_name: "",
                    sum: 0,
                    style: "",
                    guitar: ""
                },
                f_name: '',
                l_name: ''
            }
        },
        // components: {
        //     CardQuestion
        // },
        mounted() {
            if (localStorage.getItem('user')) {
                try {
                    this.user = JSON.parse(localStorage.getItem('user'))
                } catch (e) {
                    localStorage.removeItem('user')
                }
                this.first_name = localStorage.first_name
            }
            if (localStorage.last_name) {
                this.last_name = localStorage.last_name
            }
        },
        methods: {
            addUser() {
                if (!this.f_name && !this.l_name) {
                    return;
                }
                this.user.first_name = this.f_name
                this.user.last_name = this.l_name
                this.f_name = '';
                this.l_name = '';
                this.saveUser();
            },
            saveUser() {
                const parsed = JSON.stringify(this.user)
                localStorage.setItem('user', parsed);
                this.$router.push('/questions')
                // this.CQ.methods.getCard()
            },

        },
    }
</script>

<style scoped>

</style>