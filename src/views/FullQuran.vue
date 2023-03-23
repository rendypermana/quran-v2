<template>
  <div class="homePage">
    <v-container v-if="loadingFetch">
      Loading
    </v-container>
    <v-container v-else>
      <div class="titleAyah">
        <h1>{{ edition.name }}</h1>
      </div>
      <div class="surahFull" v-for="(surah, index) in quranFull.surahs" :key="index">
        <div class="surahFull--title">
          <h2>{{ surah.name }}</h2>
          <p>({{ surah.englishName }})</p>
        </div>
        <div class="surahFull--ayahs">
          <div class="bimillah" v-if="surah.number != 1 && surah.number != 9">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ </div>
          <span v-for="(ayah, idx) in surah.ayahs" :key="idx">
            {{ ayahText(ayah.text, surah.number, ayah.numberInSurah) }} 
            <span class="ayah">({{ numberOfAyah(ayah.numberInSurah) }})</span>
          </span>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import { arabicNumbering, splitBismillah } from '../lib'

export default {
  name: 'FullQuran',
  mounted(){
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$store.dispatch('quran/getData');
    },
    numberOfAyah(value) {
      return arabicNumbering(value);
    },
    ayahText(ayah, numberSurah, numberInSurah) {
      return splitBismillah(ayah, numberSurah, numberInSurah)
    }
  },
  computed: {
    quranFull() {
      return this.$store.getters['quran/getQuranFull'];
    },
    loadingFetch() {
      return this.$store.getters['quran/getLoading'];
    },
    edition() {
      return this.quranFull.edition;
    },
  }

}
</script>
<style lang="scss" scoped>
@import '@/assets/style/variable.scss';
.homePage {
  margin-top: 60px;
  .titleAyah {
    margin-bottom: 40px;
  }
  .surahFull {
    margin: 40px 0px;

    &--title {
      margin-bottom: 20px;
      color: $mainfont;
      p {
        font-size: 14px;
        color: $secondfont;
      }
    }
    &--ayahs {
      text-align: justify;
      .bimillah {
        text-align: center;
        font-size: 21px;
        margin-bottom: 8px;
        color: $mainfont;
      }
      span {
        font-size: 21px;
        color: $secondfont;
        .ayah {
          position: relative;
          font-size: 12px;
          width: 30px;
          text-align: center;
          color: $main;
          // box-sizing: border-box;
          // display: inline-block;
          
            // &::after {
            //   display: inline-flex;
            //   content: '';
            //   background-image: url('../assets/images/separator.svg');
            //   height: 66px;
            //   width: 49px;
            //   position: absolute;
            //   right: -12px;
            //   top: -22px;
            // }
        }
      }
    }
  }

}
</style>
