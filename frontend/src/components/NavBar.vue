<template>
        <nav role="navigation">
            <div class="nav-wrapper container">
                <router-link id="logo-container" to="/" class="brand-logo">
                    <img :src = "logo" height="60" width="60"></router-link>
                <ul class="right hide-on-med-and-down">
                    <li><router-link to = "/calculator">Калькулятор</router-link></li>
                    <li><router-link to = "/test">Тест по теории музыки</router-link></li>
                    <li><router-link to = "/reg">Рекомендательная система</router-link></li>
                </ul>
                <ul class="sidenav" id="nav-mobile">
                    <li><router-link to = "/calculator">Калькулятор</router-link></li>
                    <li><router-link to = "/test">Тест по теории музыки</router-link></li>
                    <li><router-link to = "/reg">Рекомендательная система</router-link></li>
                </ul>
                <a href="#" data-target="nav-mobile" class="sidenav-trigger">
                    <i class="material-icons">menu</i></a>
            </div>
        </nav>
</template>

<script>
    import logo from '@/assets/logo.png'
    export default {
        name: "NavBar",
        data: function () {
            return {
                logo
            }
        }
    }
</script>

<style scoped>
    nav{
        background: #65a599;
    }
    body{
        height: 1000px;
    }
</style>