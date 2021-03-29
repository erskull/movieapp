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
div.conatiner--fluid {
  max-width: 1600px;
}
</style>
