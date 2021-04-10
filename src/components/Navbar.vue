<template>
  <div style="position:sticky;top:0px;z-index:9;">
    <v-app-bar
      height="70"
      absolute
      elevate-on-scroll
      style="backdrop-filter: blur(6px);background:linear-gradient(90deg,rgba(30,30,30,1),rgba(30,30,30,0));"
    >
      <!-- color="rgba(18,18,18,0.7)" -->
      <v-container>
        <v-row class="align-center">
          <v-btn
            elevation="0"
            :ripple="false"
            class="rounded-0 logo"
            height="70"
            color="transparent"
            to="/"
            >MY MOVIE APP</v-btn
          >
          <v-spacer></v-spacer>
          Navbar
        </v-row>
      </v-container>
    </v-app-bar>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
// @import "https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap";
//  <link href="
// " rel="stylesheet">
.v-btn.logo {
  &::before {
    background-color: transparent !important;
  }
}
</style>
