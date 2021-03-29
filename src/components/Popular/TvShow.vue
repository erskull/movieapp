<template>
  <div class="popular-tvshow">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card class="d-flex align-center" flat color="transparent">
            <v-card-title class="pl-0">
              Popular Tv Shows
            </v-card-title>
            <v-spacer></v-spacer>
            <v-btn text>See More </v-btn>
          </v-card>
          <v-row>
            <v-col v-for="(popular, i) in TvPopular" :key="i" cols="12" md="2">
              <v-card
                height="100%"
                class="rounded-0 flat"
                link
                :to="'/tv/' + popular.id"
              >
                <v-img
                  height="260"
                  :lazy-src="
                    'http://image.tmdb.org/t/p/w500' + popular.poster_path
                  "
                  :src="'http://image.tmdb.org/t/p/w500' + popular.poster_path"
                ></v-img>
                <v-card-text>
                  {{ popular.name }}
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <!-- {{ TvPopular }} -->
        </v-col>
        <div style="height:1000px;"></div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      TvPopular: null,
    };
  },
  mounted() {
    this.$http
      .get("/tv/popular" + "?api_key=386a231dcbaf190d09142d84a5bf8fe5")
      .then((res) => {
        this.TvPopular = res.results;
      });
  },
};
</script>

<style></style>
