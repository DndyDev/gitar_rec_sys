<template>
    <div class="container">
        <h1>Рекомендательная система по подбору гитары</h1>
        <div class="row">
<!--            ToDo реализовать isRegistration-->
            <CardRegistration v-show="isRegistration"></CardRegistration>
            <CardQuestion></CardQuestion>
        </div>

    </div>
</template>
<!--<script src="src/scripts/init.js"></script>-->
<script>
    import CardQuestion from "@/components/CardQuestion";
    import CardRegistration from "@/components/CardRegistration";

    export default {
        name: "RecommendedSystem",
        components: {
            CardRegistration,
            CardQuestion
        },
        methods:{

        }
    }
    // var slider = document.getElementById('test-slider')
    // noUiSlider.create(slider, {
    //     start: [20, 80],
    //     connect: true,
    //     step: 1,
    //     orientation: 'horizontal', // 'horizontal' or 'vertical'
    //     range: {
    //         'min': 0,
    //         'max': 100
    //     }
    // })



</script>

    <style scoped>

    </style>