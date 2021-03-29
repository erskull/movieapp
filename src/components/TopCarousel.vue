<template>
  <div class="topcarousel">
    <v-container fluid class="pa-0">
      <v-row>
        <v-col cols="12" md="12">
          <v-hover v-slot="{ hover }">
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
                  :class="hover ? 'imageHover' : ''"
                  height="600"
                  :src="
                    'http://image.tmdb.org/t/p/original' +
                      DiscoverMovie[0].backdrop_path
                  "
                >
                  <v-card
                    color="transparent"
                    elevation="0"
                    height="600"
                    class="py-10 rounded-0 d-flex align-end"
                    style="background:linear-gradient(90deg,rgba(0,0,0,1),rgba(30,30,30,0))"
                  >
                    <v-container>
                      <v-row>
                        <v-col cols="12" md="3">
                          <v-img
                            :src="
                              'http://image.tmdb.org/t/p/original' +
                                DiscoverMovie[0].poster_path
                            "
                          ></v-img>
                        </v-col>
                        <v-col cols="12" md="6" class="d-flex align-end">
                          <div>
                            <div
                              class="text-h3 font-weight-black white--text mb-3"
                            >
                              {{ DiscoverMovie[0].title }}
                            </div>
                            <div class="mb-3">
                              {{ DiscoverMovie[0].overview }}
                            </div>
                            <v-btn
                              large
                              class="mr-3 primary"
                              link
                              :to="'/movie/' + DiscoverMovie[0].id"
                            >
                              <v-icon class="mr-2">info</v-icon> More
                              Info</v-btn
                            >
                            <v-btn large>
                              <v-icon>play_arrow</v-icon>
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
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
    <!-- <v-container>
      <v-row>
        <v-col cols="12" md="8" class="pr-0 pb-0"> </v-col>
        <v-col cols="12" md="4" class="pl-0 pb-0">
          <v-hover v-slot="{ hover }">
            <div>
              <v-card
                class="rounded-0"
                v-if="DiscoverTv"
                link
                :to="'/movie/' + DiscoverTv[1].id"
                :ripple="false"
              >
                <v-img
                  class="align-end"
                  :class="hover ? 'imageHover' : ''"
                  position="top center"
                  height="175"
                  :src="
                    'http://image.tmdb.org/t/p/original' +
                      DiscoverTv[0].backdrop_path
                  "
                >
                  <v-card
                    class="rounded-0"
                    :color="hover ? 'rgba(0,0,0,0.5)' : 'rgba(30,30,30,0.5)'"
                    style="backdrop-filter:blur(20px);"
                  >
                    <v-card-text class="white--text">
                      {{ DiscoverTv[0].name }}
                    </v-card-text>
                  </v-card>
                </v-img>
              </v-card>
            </div>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <div>
              <v-card
                class="rounded-0"
                v-if="DiscoverMovie"
                link
                :to="'/movie/' + DiscoverMovie[1].id"
                :ripple="false"
              >
                <v-img
                  class="align-end"
                  :class="hover ? 'imageHover' : ''"
                  position="top center"
                  height="175"
                  :src="
                    'http://image.tmdb.org/t/p/original' +
                      DiscoverMovie[1].backdrop_path
                  "
                >
                  <v-card
                    class="rounded-0"
                    :color="hover ? 'rgba(0,0,0,0.5)' : 'rgba(30,30,30,0.5)'"
                    style="backdrop-filter:blur(20px);"
                  >
                    <v-card-text class="white--text">
                      {{ DiscoverMovie[1].title }}
                    </v-card-text>
                  </v-card>
                </v-img>
              </v-card>
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" class="pt-0 pr-0">
          <v-hover v-slot="{ hover }">
            <div>
              <v-card
                class="rounded-0"
                v-if="DiscoverTv"
                link
                :to="'/movie/' + DiscoverTv[1].id"
                :ripple="false"
              >
                <v-img
                  class="align-end"
                  :class="hover ? 'imageHover' : ''"
                  position="top center"
                  height="200"
                  :src="
                    'http://image.tmdb.org/t/p/original' +
                      DiscoverTv[1].backdrop_path
                  "
                >
                  <v-card
                    class="rounded-0"
                    :color="hover ? 'rgba(0,0,0,0.5)' : 'rgba(30,30,30,0.5)'"
                    style="backdrop-filter:blur(20px);"
                  >
                    <v-card-text class="white--text">
                      {{ DiscoverTv[1].name }}
                    </v-card-text>
                  </v-card>
                </v-img>
              </v-card>
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" class="pt-0 px-0">
          <v-hover v-slot="{ hover }">
            <div>
              <v-card
                class="rounded-0"
                v-if="DiscoverMovie"
                link
                :to="'/movie/' + DiscoverMovie[2].id"
                :ripple="false"
              >
                <v-img
                  class="align-end"
                  :class="hover ? 'imageHover' : ''"
                  position="top center"
                  height="200"
                  :src="
                    'http://image.tmdb.org/t/p/original' +
                      DiscoverMovie[2].backdrop_path
                  "
                >
                  <v-card
                    class="rounded-0"
                    :color="hover ? 'rgba(0,0,0,0.5)' : 'rgba(30,30,30,0.5)'"
                    style="backdrop-filter:blur(20px);"
                  >
                    <v-card-text class="white--text">
                      {{ DiscoverMovie[2].title }}
                    </v-card-text>
                  </v-card>
                </v-img>
              </v-card>
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" class="pt-0 px-0">
          <v-hover v-slot="{ hover }">
            <div>
              <v-card
                class="rounded-0"
                v-if="DiscoverTv"
                link
                :to="'/movie/' + DiscoverTv[2].id"
                :ripple="false"
              >
                <v-img
                  class="align-end"
                  :class="hover ? 'imageHover' : ''"
                  position="top center"
                  height="200"
                  :src="
                    'http://image.tmdb.org/t/p/original' +
                      DiscoverTv[2].backdrop_path
                  "
                >
                  <v-card
                    class="rounded-0"
                    :color="hover ? 'rgba(0,0,0,0.5)' : 'rgba(30,30,30,0.5)'"
                    style="backdrop-filter:blur(20px);"
                  >
                    <v-card-text class="white--text">
                      {{ DiscoverTv[2].name }}
                    </v-card-text>
                  </v-card>
                </v-img>
              </v-card>
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" class="pt-0 pl-0">
          <v-hover v-slot="{ hover }">
            <div>
              <v-card
                class="rounded-0"
                v-if="DiscoverMovie"
                link
                :to="'/movie/' + DiscoverMovie[3].id"
                :ripple="false"
              >
                <v-img
                  class="align-end"
                  :class="hover ? 'imageHover' : ''"
                  position="top center"
                  height="200"
                  :src="
                    'http://image.tmdb.org/t/p/original' +
                      DiscoverMovie[3].backdrop_path
                  "
                >
                  <v-card
                    class="rounded-0"
                    :color="hover ? 'rgba(0,0,0,0.5)' : 'rgba(30,30,30,0.5)'"
                    style="backdrop-filter:blur(20px);"
                  >
                    <v-card-text class="white--text">
                      {{ DiscoverMovie[3].title }}
                    </v-card-text>
                  </v-card>
                </v-img>
              </v-card>
            </div>
          </v-hover>
        </v-col>
      </v-row>
    </v-container> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      DiscoverMovie: null,
      DiscoverTv: null,
    };
  },
  mounted() {
    this.$http.get("discover/movie").then((res) => {
      this.DiscoverMovie = res.data.results;
      console.log(res);
    }),
      this.$http.get("discover/tv").then((res) => {
        this.DiscoverTv = res.data.results;
      });
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
