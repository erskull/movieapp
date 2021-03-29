<template>
  <div class="cast">
    <v-card class="rounded-0" style="position:relative;">
      <v-card-title>Cast</v-card-title>
      <!-- <v-card flat> -->
      <v-row
        no-gutters
        :class="castExpanded ? 'cast-expanded' : 'cast-unexpanded'"
      >
        <!-- style="max-height:1000px;overflow:hidden;" -->
        <v-col v-for="(cast, i) in casts" :key="i" cols="12" md="3">
          <v-card flat class="rounded-0">
            <v-img
              height="280"
              :src="'http://image.tmdb.org/t/p/w500' + cast.profile_path"
              :alt="cast.name"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <!-- <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        ></v-progress-circular> -->
                  No Image Available
                </v-row>
              </template>
            </v-img>
            <v-card-text class="text-center">
              {{ cast.name }} as {{ cast.character }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-btn
        color="primary"
        block
        large
        @click="castExpanded = !castExpanded"
        class="rounded-0"
      >
        View More
        <v-icon v-if="castExpanded" small class="ml-2">arrow_upward</v-icon>
        <v-icon v-else small class="ml-2">arrow_downward</v-icon>
      </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      castExpanded: false,
      casts: "",
    };
  },
  methods: {
    async callCast() {
      await this.$axios
        .get(
          "/movie/" +
            this.id +
            "/credits" +
            "?api_key=386a231dcbaf190d09142d84a5bf8fe5"
        )
        .then((res) => {
          this.casts = res.cast;
        });
    },
  },
  mounted() {
    // this.callCast();
  },
};
</script>

<style></style>
