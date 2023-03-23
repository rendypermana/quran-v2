<template>
<div class="mainHeader">
    <v-app-bar
        color="white"
    >
        <v-btn icon @click="home">
            <img :src="barIcon" />
        </v-btn>
        <v-toolbar-title 
            class="mainHeader--title"
        >
            <h1>{{ title }}</h1>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="search">
            <v-icon color="#8789A3">mdi-magnify</v-icon>
        </v-btn>
    </v-app-bar>
</div>
</template>
<script>
import barMenu from '@/assets/images/icon/barMenu.svg'

export default {
    name: 'MainHeader',
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            barIcon: barMenu,
        }
    },
    methods: {
        home() {
            this.$router.push({name: 'Home'}).catch(()=>{});
        },
        search() {
            this.$router.push({name: 'Search'}).catch(()=>{});
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/variable.scss';
.v-toolbar__title {
    text-align: center!important;
    width: 100%!important;
}
.mainHeader {
    background-color: #fff;
    max-height: 60px;
    width: 100%;
    position: fixed;
    margin-right: auto;
    margin-left: auto;
    width: 400px;
    z-index: 999;
    margin: 0px;
    @include breakpoint(mobileonly) {
        width: 100%!important;
    }
    @include breakpoint(tablet) {
        width: 100%!important;
    }
    &--title {
        h1 {
            font-size: 18px;
            padding: 15px 0px;
            color: $main;
            font-family: 'Poppins', Arial, Helvetica, sans-serif, 'Roboto';
        }
    }
}
</style>