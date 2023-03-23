<template>
<div class="homePage">
    <v-container>
        <div class="lastRead">
            <LastRead />
        </div>
        <div class="listSurah">
            <ListsSurah 
                :listsData="allSurah"
                :loadingData="loading"
            />
        </div>
    </v-container> 
</div>
</template>
<script>
import LastRead from '@/components/LastRead.vue';
import ListsSurah from '@/components/ListsSurah.vue';

export default {
    name: 'HomePage',
    components: {
        LastRead,
        ListsSurah
    },
    created() {
        if(this.allSurah.length == 0) this.fetchSurah();
    },
    methods: {
        fetchSurah () {
            this.$store.dispatch('quran/fetchAllSurah');
        }
    },
    computed: {
        allSurah() {
            return this.$store.getters['quran/getAllSurah'];
        },
        loading() {
            return this.$store.getters['quran/getLoadingSurah'];
        }
    }
}
</script>
<style lang="scss" scoped>
.homePage {
    margin-top: 60px;
    .lastRead {
        background-color: #fff;
    }
}
</style>