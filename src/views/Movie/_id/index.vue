<template>
  <div class="movie-id">
    <v-container fluid class="pa-0">
      <v-row>
        <v-col cols="12" md="12">
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
                min-height="600"
                height="100vh"
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
                      <v-col class="d-flex" cols="12" md="3">
                        <v-spacer></v-spacer>
                        <v-img
                          class="hidden-md-and-down"
                          height="300"
                          width="200"
                          :src="
                            'http://image.tmdb.org/t/p/original' +
                              currentMovie.poster_path
                          "
                        ></v-img>
                        <v-spacer></v-spacer>
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
                          <div>
                            <!-- Movie Dialog -->
                            <v-dialog
                              v-model="MovieDialog"
                              persistent
                              max-width="900px"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                  large
                                  class="mr-3 primary rounded-pill"
                                  v-bind="attrs"
                                  v-on="on"
                                >
                                  <v-icon class="mr-2">theaters</v-icon>Watch
                                  Movie</v-btn
                                >
                              </template>
                              <v-card
                                elevation="0"
                                color="transparent"
                                class="ma-0 pa-0"
                              >
                                <v-card-text
                                  class="py-0 pr-0 d-flex align-center"
                                >
                                  <v-spacer></v-spacer>
                                  <v-btn
                                    icon
                                    @click="MovieDialog = !MovieDialog"
                                  >
                                    <v-icon>close</v-icon>
                                  </v-btn>
                                </v-card-text>
                                <v-card-text class="pa-0 fill-height">
                                  <v-responsive :aspect-ratio="16 / 9">
                                    <iframe
                                      :src="
                                        'https://www.2embed.ru/embed/imdb/movie?id=' +
                                          imdbId
                                      "
                                      frameborder="0"
                                      width="100%"
                                      height="100%"
                                      loading="lazy"
                                      seamless="seamless"
                                      scrolling="no"
                                      allowfullscreen
                                      style="border:0;"
                                    ></iframe>
                                  </v-responsive>
                                </v-card-text>
                              </v-card>
                            </v-dialog>
                            <!-- Trailer Dialog -->
                            <v-dialog
                              v-if="trailer"
                              v-model="TrailerDialog"
                              persistent
                              max-width="900px"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                  large
                                  outlined
                                  v-bind="attrs"
                                  v-on="on"
                                  class="rounded-pill"
                                >
                                  <v-icon class="mr-2">play_arrow</v-icon>
                                  Play Trailer
                                </v-btn>
                              </template>
                              <v-card
                                elevation="0"
                                color="transparent"
                                class="ma-0 pa-0"
                              >
                                <v-card-text
                                  class="py-0 pr-0 d-flex align-center"
                                >
                                  <v-spacer></v-spacer>
                                  <v-btn
                                    icon
                                    @click="TrailerDialog = !TrailerDialog"
                                  >
                                    <v-icon>close</v-icon>
                                  </v-btn>
                                </v-card-text>
                                <v-card-text class="pa-0 fill-height">
                                  <v-responsive :aspect-ratio="16 / 9">
                                    <iframe
                                      v-if="trailer"
                                      width="100%"
                                      class="fill-height"
                                      :src="
                                        'https://www.youtube-nocookie.com/embed/' +
                                          trailer[0].key
                                      "
                                      title="YouTube video player"
                                      frameborder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                      allowfullscreen
                                    ></iframe>
                                  </v-responsive>
                                </v-card-text>
                              </v-card>
                            </v-dialog>
                          </div>
                        </div>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-img>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12" md="8">
          <Credit :id="id" />
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="rounded-0">
            <v-card-title>Cast</v-card-title>
            <v-divider></v-divider>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12">
          <Images :id="id" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Credit from "@/components/Movie/Credit";
import Images from "@/components/Movie/Images";
export default {
  components: {
    Credit,
    Images,
  },
  data() {
    return {
      id: this.$route.params.id,
      imdbId: null,
      currentMovie: "",
      movieIframe: null,
      TrailerDialog: false,
      MovieDialog: false,
      trailer: null,
    };
  },
  mounted() {
    this.onStartup(), this.callMovie(), this.callMovieTrailer();
  },
  methods: {
    async onStartup() {
      await this.$http
        .get("/movie/" + this.id)
        .then((res) => {
          this.currentMovie = res.data;
          this.genres = res.data.genres;
          this.overview = res.data.overview;
          this.companies = res.data.production_companies;
          this.imdbId = res.data.imdb_id;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async callMovie() {
      await this.$http
        .get("https://www.2embed.ru/embed/imdb/movie?id=" + this.imdbId, {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((res) => {
          this.movieIframe = res;
        })
        .catch((error) => {
          console.log("Movie Id 2embed error " + error);
        });
    },
    async callMovieTrailer() {
      await this.$http
        .get("/movie/" + this.id + "/videos")
        .then((res) => {
          this.trailer = res.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss">
.v-dialog {
  box-shadow: unset !important;
}
</style>
