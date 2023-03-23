<template>
<div class="itemSurah" v-ripple @click="toSingleSurah(surah.number)" >
    <div class="itemSurah--frame1">
        <div class="number">
            <p>{{ surah.number }}</p>
        </div>
        <div class="surah">
            <h2>{{ surah.englishName }}</h2>
            <p>{{ surah.revelationType }} - {{ surah.numberOfAyahs }} verses</p>
        </div>
    </div>
    <div class="itemSurah--frame2">
        <div class="name-surah">
            {{ splitNameSurah(surah.name) }}
        </div>
    </div>
</div>
</template>
<script>

export default {
    name: 'ItemSurah',
    props: {
        surah: {
            type: Object,
            default: () => {}
        },
    },
    methods: {
        splitNameSurah(value) {
            return String(value).slice(6);
        },
        toSingleSurah(number) {
            this.$router.push({name: 'SingleSurah', params: { number: number}});
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/variable.scss';
.itemSurah {
    display: inline-block;
    width: 100%;
    position: relative;
    padding: 15px 0px;
    border-bottom: 1px solid rgba(187, 196, 206, 0.35);
    cursor: pointer;
    background-color: #fff;
    &:last-child {
        border-bottom: 0px solid rgba(187, 196, 206, 0.35);
    }
    &--frame1 {
        float: left;
        display: inline-flex;
        .number {
            display: block;
            width: 45px;
            background: url('../assets/images/icon/Border-ayah.svg') no-repeat;
            background-color: #fff;
            background-size: 100%;
            position: relative;
            background-color: transparent;
            
            p {
                position: absolute;
                margin-left: auto;
                margin-right: auto;
                left: 0;
                right: 0;
                text-align: center;
                font-size: 14px;
                color: $mainfont;
                margin-top: 12px;
            }
        }
        .surah {
            margin-right: 0;
            display: block;
            text-align: left;
            margin-left: 15px;
            h2 {
                color: $mainfont;
                font-size: 16px;
                font-style: normal;
            }
            p {
                text-transform: uppercase;
                font-size: 12px;
                color: $secondfont;
            }
        }
    }
    &--frame2 {
        float: right;
        .name-surah {
            display: block;
            font-size: 20px;
            color: $colorfont;
            text-align: right;
            padding: 8px 0px;
        }
    }
}
</style>