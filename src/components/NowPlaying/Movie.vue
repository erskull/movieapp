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
            <v-hover v-slot="{ hover }">
              <v-btn width="200" text @click="seeAll = !seeAll">
                <span class="mr-2">
                  <span class="mr-1">See</span>
                  <span v-if="seeAll">less</span>
                  <span v-else>More</span>
                </span>
                <v-icon v-if="seeAll" small :class="hover ? 'ml-2' : ''"
                  >west</v-icon
                >
                <v-icon v-else small :class="hover ? 'ml-2' : ''">east</v-icon>
              </v-btn>
            </v-hover>
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
          <v-card
            link
            :ripple="false"
            height="100%"
            :to="'/movie/' + NPMovie.id"
            style="overflow:hidden;"
          >
            <v-card elevation="12" class="rounded-0">
              <!-- height="400" -->
              <v-img
                height="300"
                class="align-end"
                :src="'http://image.tmdb.org/t/p/w500' + NPMovie.poster_path"
              >
              </v-img>
            </v-card>
            <v-card-text class="white--text text-body-1">
              {{ NPMovie.title }}
            </v-card-text>
          </v-card>
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
