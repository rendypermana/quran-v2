<template>
<v-app id="app">
  <div class="main">
    <MainHeader 
      :title="titleNavbar"
    />
    <router-view/>
  </div>
</v-app>
    
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'

export default {
  name: "AppMain",
  data() {
    return {
      routeName: ''
    }
  },
  watch: {
    $route(to) {
      this.routeName = to.name;
      if (to.name === 'Home') {
        this.$store.dispatch('global/updateTitleNavbar', `Al-Qur'an`);
      } else if(to.name === 'Search') {
        this.$store.dispatch('global/updateTitleNavbar', 'Search');
      }
    }
  },
  components: { 
    MainHeader 
  },
  computed: {
    titleNavbar() {
      return this.$store.getters['global/getTitleNavbar'];
    }
  }
  
}
</script>

<style lang="scss">
@import '@/assets/style/main.scss';

</style>
