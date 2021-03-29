<template>
  <div class="movie-id">
    <v-container fluid class="pa-0">
      <v-row>
        <v-col cols="12" md="12">
          <!-- <v-hover v-slot="{ hover }"> -->
          <div>
            <v-card
              elevation="0"
              width="100%"
              class="rounded-0"
              v-if="currentMovie"
            >
              <v-img
                position="top top"
                class="align-end"
                height="600"
                :src="
                  'http://image.tmdb.org/t/p/original' +
                    currentMovie.backdrop_path
                "
              >
                <v-card
                  color="transparent"
                  elevation="0"
                  height="900"
                  class="py-10 rounded-0 d-flex align-end"
                  style="background:linear-gradient(0deg,rgba(30,30,30,1),rgba(30,30,30,0))"
                >
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="3">
                        <v-img
                          :src="
                            'http://image.tmdb.org/t/p/original' +
                              currentMovie.poster_path
                          "
                        ></v-img>
                      </v-col>
                      <v-col cols="12" md="6" class="d-flex align-end">
                        <div>
                          <div
                            class="text-h3 font-weight-black white--text mb-3"
                          >
                            {{ currentMovie.title }}
                          </div>
                          <p class="mb-3">
                            {{ currentMovie.overview }}
                          </p>
                          <v-btn
                            large
                            class="mr-3 primary rounded-pill"
                            link
                            :to="'/movie/' + currentMovie.id"
                          >
                            <v-icon class="mr-2">theaters</v-icon>Watch
                            Now</v-btn
                          >
                          <!-- <v-btn large class="rounded-pill">
                            <v-icon>play_arrow</v-icon>
                            Play Now
                          </v-btn> -->
                        </div>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-img>
            </v-card>
          </div>
          <!-- </v-hover> -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      currentMovie: "",
    };
  },
  mounted() {
    this.onStartup(), this.callMovie();
  },
  methods: {
    async onStartup() {
      await this.$http
        .get("/movie/" + this.id + "?api_key=386a231dcbaf190d09142d84a5bf8fe5")
        .then((res) => {
          this.currentMovie = res.data;
          this.genres = res.data.genres;
          this.overview = res.data.overview;
          this.companies = res.data.production_companies;
          this.imdbId = res.data.imdb_id;
        })
        .catch((error) => {
          // this.error = error
          console.log(error);
        });
    },
    async callMovie() {
      await this.$http
        .get("https://www.2embed.ru/embed/imdb/movie?id=tt5109280", {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((res) => {
          this.movieIframe = res;
        });
    },
  },
};
</script>

<style></style>
