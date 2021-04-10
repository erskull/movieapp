<template>
  <div class="nowplaying-movie">
    <v-container>
      <v-row>
        <v-col class="pb-0" cols="12">
          <v-card class="d-flex align-center" flat color="transparent">
            <v-card-title class="pl-0">
              Now Playing Movies
            </v-card-title>
            <v-spacer></v-spacer>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          class="pt-0"
          cols="12"
          md="3"
          v-for="(NPMovie, i) in NowPlayingMovieToggle"
          :key="i"
        >
          <v-hover v-slot="{ hover }">
            <!-- class="rounded-0" -->
            <v-card
              :elevation="hover ? 4 : 8"
              link
              class="rounded-0"
              :ripple="false"
              height="100%"
              :to="'/movie/' + NPMovie.id"
              style="overflow:hidden;"
            >
              <v-img
                height="400"
                class="align-end"
                :src="'http://image.tmdb.org/t/p/w500' + NPMovie.poster_path"
              >
                <v-card
                  color="linear-gradient(90deg,rgba(30,30,30,1)"
                  elevation="10"
                  class="rounded-0"
                  style="background:linear-gradient(90deg,rgba(30,30,30,1),rgba(30,30,30,0))"
                >
                  <v-card-text class="white--text text-body-1">
                    {{ NPMovie.title }}
                  </v-card-text>
                </v-card>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
        <v-col class="d-flex" cols="12">
          <v-spacer></v-spacer>
          <v-hover v-slot="{ hover }">
            <v-btn
              class="rounded-0 d-flex"
              text
              large
              @click="seeAll = !seeAll"
            >
              <span class="mr-3">
                <span class="mr-1">See</span>
                <span v-if="seeAll">less</span>
                <span v-else>More</span>
                of Now Playing
              </span>
              <!-- <span :class="hover ? 'mr-3' : 'mr-0'"> -->
              <v-icon :class="hover ? '' : ''" v-if="seeAll" small>west</v-icon>
              <v-icon v-else small>east</v-icon>
              <!-- </span> -->
            </v-btn>
          </v-hover>
          <v-spacer></v-spacer>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      MovieNowPlaying: "",
      seeAll: false,
    };
  },
  mounted() {
    this.getNowPlayingMovie();
  },
  methods: {
    async getNowPlayingMovie() {
      await this.$http
        .get("/movie/now_playing")
        .then((res) => {
          this.MovieNowPlaying = res.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {
    NowPlayingMovieToggle() {
      if (this.seeAll) {
        return this.MovieNowPlaying.slice(0, 21);
      } else {
        return this.MovieNowPlaying.slice(0, 4);
      }
    },
  },
};
</script>

<style lang="scss"></style>
