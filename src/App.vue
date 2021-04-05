<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view></router-view>
    </v-main>
    <!-- <Footer /> -->
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    Navbar,
    // Footer,
  },
};
</script>
<style lang="scss">
@media (min-width: 1904px) {
  .container {
    max-width: 1366px !important;
  }
  .container--fluid {
    max-width: 1920px !important;
  }
}
@media (min-width: 1264px) {
  .container {
    // max-width: 1920px !important;
  }
}
@media (min-width: 960px) {
  .container {
    // max-width: 1920px !important;
  }
}
</style>
