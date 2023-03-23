<template>
<div class="singleSurahPage">
    <v-container>
        <div class="cardSingleSurah image-bg">
            <div class="cardSingleSurah__title">
                {{ surah.englishName }}
            </div>
            <div class="cardSingleSurah__subtitle">
                {{ surah.englishNameTranslation }}
            </div>
            <div class="cardSingleSurah__verses">
                <span class="place">{{ surah.revelationType }} </span>
                <span> • </span>
                <span class="ayah">{{ surah.numberOfAyahs }} VERSES</span>
            </div>
        </div>
        <div class="list-ayah">
            <SingleAyah />
        </div>
    </v-container>
</div>
</template>
<script>
import SingleAyah from '@/components/SingleAyah.vue';

export default {
    name: "SingleSurah",
    components: { 
        SingleAyah 
    },
    created() {
        const numberSurah = this.$route.params.number;
        this.fetchSurah(numberSurah);
    },
    methods: {
        fetchSurah(number) {
            this.$store.dispatch("quran/fetchSingleSurah", number);
        },
    },
    computed: {
        surah() {
            const getData = this.$store.getters["quran/getSingleSurah"];
            const singleSurah = {
                englishName: getData[0].englishName,
                englishNameTranslation: getData[0].englishNameTranslation,
                name: getData[0].name,
                number: getData[0].number,
                numberOfAyahs: getData[0].numberOfAyahs,
                revelationType: getData[0].revelationType,
                ayahs: []
            };
            getData[0].ayahs.forEach((item, index) => {
                const obj = item;
                obj.arab = getData[1].ayahs[index].text;
                obj.sound = `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${getData[1].ayahs[index].number}.mp3`;
                singleSurah.ayahs.push(obj);
            });
            return singleSurah;
        },
    },
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/variable.scss';
.singleSurahPage {
    margin-top: 60px;
    &__title {
        h1 {
            color: $mainfont;
            font-size: 21px;
        }
    }
    .cardSingleSurah {
        background: linear-gradient(135deg, #DF98FA 0%, #9055FF 100%);
        padding: 28px;
        border-radius: 20px;

        &__title {
            color: #fff;
            font-weight: 500;
            font-size: 26px;
            font-family: 'Poppins';
        }
        &__subtitle {
            color: #fff;
            font-weight: 500;
            font-size: 16px;
            font-family: 'Poppins';
            margin-bottom: 16px;
        }
        &__verses {
            color: #fff;
            font-weight: 500;
            font-size: 14px;
            font-family: 'Poppins';
            text-transform: uppercase;
            border-top: 1px solid #fff;
            padding-top: 16px;
        }
    }

    .list-ayah {
        margin-top: 32px;
    }
}
</style>