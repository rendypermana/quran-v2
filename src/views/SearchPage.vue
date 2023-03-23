<template>
    <div class="searchPage">
        <v-container>
            <div class="formSearch">
                <v-text-field 
                    label="Search" 
                    placeholder="Surah name" 
                    color="#672CBC"
                    v-model="keyword"
                    @input="searchSurah"
                />
            </div>
        
            <ListsSurah 
                :listsData="sortSurah"
                :loadingData="loading"
            />
        </v-container>
    </div>
</template>
<script>
import ListsSurah from '@/components/ListsSurah.vue';

export default {
    name: 'SearchPage',
    data() {
        return {
            sortSurah: [],
            keyword: ''
        }
    },
    components: {
        ListsSurah
    },
    created() {
        if (this.allSurah.length == 0) this.fetchSurah();
        else if (this.sortSurah.length == 0) this.sortSurah = this.$store.getters['quran/getAllSurah'];
        else this.sortSurah = this.allSurah;
    },
    methods: {
        fetchSurah() {
            this.$store.dispatch('quran/fetchAllSurah');
        },
        searchSurah() {
            const key = this.keyword.toLowerCase();
            const resultSearch = [];
            this.allSurah.forEach((item) => {
                if(item.englishName.toLowerCase().indexOf(key) > -1) {
                    resultSearch.push(item)
                }
            });
            this.sortSurah = resultSearch;
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
.searchPage {
    margin-top: 60px;
}
</style>