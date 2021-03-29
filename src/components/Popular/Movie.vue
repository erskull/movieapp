<template>
  <div class="popular-movie">
    <v-container>
      <v-row>
        <v-col class="pb-0" cols="12">
          <v-card class="d-flex align-center" flat color="transparent">
            <v-card-title class="pl-0">
              Popular Movies
            </v-card-title>
            <!-- <v-spacer></v-spacer> -->
            <v-btn text>See More </v-btn>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="pt-0" cols="12" md="12">
          <client-only v-if="MoviePopular">
            <carousel
              :autoplay="false"
              :items="5"
              :loop="false"
              :nav="false"
              :dots="false"
              :autoplayTimeout="2000"
              :smartSpeed="600"
              :responsive="{
                0: { items: 1 },
                360: { items: 2 },
                600: { items: 3 },
                900: { items: 4 },
                1264: { items: 5 },
              }"
              style="position:relative;"
            >
              <template slot="next">
                <span
                  style="position:absolute;top:50%;bottom:50%;right:-20px;z-index:1;"
                >
                  <v-btn icon large class="primary" elevation="12">
                    <v-icon>east</v-icon>
                  </v-btn>
                </span>
              </template>
              <template slot="prev">
                <span
                  style="position:absolute;top:50%;bottom:50%;left:-20px;z-index:1;"
                >
                  <v-btn icon large class="primary" elevation="12">
                    <v-icon>west</v-icon>
                  </v-btn>
                </span>
              </template>
              <div
                class="popular-movie-item mr-1"
                v-for="(popular, i) in MoviePopular"
                :key="i"
              >
                <v-hover v-slot="{ hover }">
                  <v-card
                    class="rounded-0 flat"
                    link
                    :to="'/movie/' + popular.id"
                  >
                    <!-- :color="hover ? 'black' : 'rgba(30,30,30,1)'"
                    style="backdrop-filter:blur(20px);" -->
                    <v-img
                      height="400"
                      class="align-end"
                      :src="
                        'http://image.tmdb.org/t/p/w500' + popular.poster_path
                      "
                    >
                      <!-- <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                          ></v-progress-circular>
                        </v-row>
                      </template> -->
                      <v-list
                        :color="
                          hover ? 'rgba(0,0,0,0.5)' : 'rgba(30,30,30,0.2)'
                        "
                        style="backdrop-filter:blur(20px)"
                      >
                        <v-list-item class="rating py-0">
                          <v-list-item-content>
                            <v-list-item-subtitle class="white--text">
                              <!-- <v-chip small color="primary" text-color="white">
                                <v-avatar left>
                                </v-avatar>
                                {{ popular.vote_average }} ({{
                                  popular.vote_count
                                }})
                              </v-chip> -->
                              <div class="d-flex align-center">
                                <v-icon small class="mr-2">mdi-star</v-icon>
                                {{ popular.vote_average }} ({{
                                  popular.vote_count
                                }})
                              </div>
                            </v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item class="py-0" three-line>
                          <v-list-item-content>
                            <v-list-item-subtitle class="white--text">
                              {{ popular.title }}
                            </v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-img>
                  </v-card>
                </v-hover>
              </div>
            </carousel>
          </client-only>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      MoviePopular: null,
    };
  },
  mounted() {
    this.getMovie();
  },
  methods: {
    getMovie() {
      axios
        .get("/movie/popular" + "?api_key=386a231dcbaf190d09142d84a5bf8fe5")
        .then((res) => {
          this.MoviePopular = res.results;
        });
    },
  },
};
</script>

<style lang="scss">
div.popular-movie-item {
  div.rating {
    min-height: unset;
  }
  div.v-list-item--three-line {
    min-height: unset;
  }
}
</style>
