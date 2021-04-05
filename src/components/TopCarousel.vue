<template>
  <div class="topcarousel">
    <v-hover v-slot="{ hover }">
      <v-carousel
        v-model="carouselModel"
        hide-delimiters
        show-arrows-on-hover
        height="600"
        :interval="4000"
        :cycle="hover ? false : true"
      >
        <template v-slot:prev="{ on, attrs }">
          <v-btn icon x-large color="rgb(30,30,30)" v-bind="attrs" v-on="on">
            <v-icon color="white">west</v-icon>
          </v-btn>
        </template>
        <template v-slot:next="{ on, attrs }">
          <v-btn icon x-large color="rgb(30,30,30)" v-bind="attrs" v-on="on">
            <v-icon color="white">east</v-icon>
          </v-btn>
        </template>
        <v-carousel-item v-for="(DMovie, i) in DiscoverMovie" :key="i">
          <v-container fluid class="pa-0">
            <v-row>
              <v-col cols="12" md="12">
                <div>
                  <v-card
                    elevation="0"
                    width="100%"
                    class="rounded-0"
                    v-if="DiscoverMovie"
                  >
                    <v-img
                      position="top top"
                      class="align-end"
                      height="600"
                      :src="
                        'http://image.tmdb.org/t/p/original' +
                          DMovie.backdrop_path
                      "
                    >
                      <v-card
                        color="transparent"
                        elevation="0"
                        height="900"
                        class="py-10 rounded-0 d-flex align-end"
                        style="background:linear-gradient(0deg,rgba(18,18,18,1),rgba(30,30,30,0));"
                      >
                        <v-container>
                          <v-row>
                            <v-col class="d-flex" cols="12" md="3">
                              <v-spacer></v-spacer>
                              <v-img
                                eager
                                height="300"
                                width="200"
                                :src="
                                  'http://image.tmdb.org/t/p/w500' +
                                    DMovie.poster_path
                                "
                              ></v-img>
                              <v-spacer></v-spacer>
                            </v-col>
                            <v-col cols="12" md="6" class="d-flex align-end">
                              <div>
                                <div
                                  class="text-h3 font-weight-black white--text mb-3"
                                >
                                  {{ DMovie.title }}
                                </div>
                                <p class="mb-3">
                                  {{ DMovie.overview }}
                                </p>
                                <v-btn
                                  large
                                  class="mr-3 primary rounded-pill"
                                  link
                                  :to="'/movie/' + DMovie.id"
                                >
                                  <v-icon class="mr-2">info</v-icon> More
                                  Info</v-btn
                                >
                                <v-btn large outlined class="rounded-pill">
                                  <v-icon class="mr-2">play_arrow</v-icon>
                                  Play Now
                                </v-btn>
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
        </v-carousel-item>
      </v-carousel>
    </v-hover>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouselModel: null,
      DiscoverMovie: null,
      DiscoverTv: null,
      error: null,
    };
  },
  mounted() {
    this.discoverMovie();
  },
  methods: {
    discoverMovie() {
      this.$http
        .get("discover/movie")
        .then((res) => {
          this.DiscoverMovie = res.data.results;
        })
        .catch((error) => {
          console.log("Top Carousel Movie Discover" + error);
        });
    },
  },
};
</script>

<style lang="scss">
div.topcarousel {
  // margin-top: 54px;
}
div.v-image {
  .v-image__image {
    // transition: all 0.1s linear;
  }
}
div.v-image.imageHover {
  .v-image__image {
    // transform: scale(1.2) !important;
  }
}
</style>
