<template>
  <div class="images">
    <v-card elevation="0" color="transparent" class="rounded-0 mb-3">
      <v-card-title class="d-flex align-center py-0 pr-0"
        >Images
        <v-tabs
          height="64"
          background-color="transparent"
          v-model="tabs"
          right
          style="width:unset !important;"
        >
          <v-tab v-for="(tab, i) in tabTitle" :key="i">
            {{ tab.title }}
          </v-tab>
        </v-tabs>
      </v-card-title>
      <v-divider></v-divider>
      <v-tabs-items v-model="tabs" class="transparent">
        <v-tab-item>
          <v-row
            class="position-relative"
            no-gutters
            :class="
              backdropsExpanded ? 'backdrops-expanded' : 'backdrops-unexpanded'
            "
          >
            <v-col
              v-for="(backdrop, i) in backdrops"
              :key="i"
              cols="6"
              xs="6"
              sm="3"
              md="3"
            >
              <v-card flat color="transparent" class="rounded-0">
                <v-img
                  height="280"
                  :src="'http://image.tmdb.org/t/p/w500' + backdrop.file_path"
                >
                  <!-- :alt="backdrops.name" -->
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      No Image Available
                    </v-row>
                  </template>
                </v-img>
              </v-card>
            </v-col>
            <div
              v-if="!backdropsExpanded"
              style="position:absolute;bottom:44px;width:100%;height:200px;background:linear-gradient(0deg,rgba(30,30,30,1),rgba(30,30,30,0));"
            ></div>
          </v-row>
          <v-btn
            color="primary"
            block
            large
            @click="backdropsExpanded = !backdropsExpanded"
            class="rounded-0"
          >
            View
            <span class="ml-1" v-if="backdropsExpanded">
              Less
            </span>
            <span class="ml-1" v-else>
              More
            </span>
            <v-icon v-if="backdropsExpanded" small class="ml-2"
              >arrow_upward</v-icon
            >
            <v-icon v-else small class="ml-2">arrow_downward</v-icon>
          </v-btn>
        </v-tab-item>
        <v-tab-item>
          <v-row
            class="position-relative"
            no-gutters
            :class="postersExpanded ? 'posters-expanded' : 'posters-unexpanded'"
          >
            <v-col
              v-for="(poster, i) in posters"
              :key="i"
              cols="6"
              xs="6"
              sm="3"
              md="3"
            >
              <v-card flat elevation="0" color="transparent" class="rounded-0">
                <v-img
                  height="280"
                  :src="'http://image.tmdb.org/t/p/w500' + poster.file_path"
                >
                  <!-- :alt="crew.name" -->
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      No Image Available
                    </v-row>
                  </template>
                </v-img>
                <!-- <v-card-text class="text-center">
                  {{ crew.name }} for {{ crew.job }}
                </v-card-text> -->
              </v-card>
            </v-col>
            <div
              v-if="!postersExpanded"
              style="position:absolute;bottom:44px;width:100%;height:200px;background:linear-gradient(0deg,rgba(30,30,30,1),rgba(30,30,30,0));"
            ></div>
          </v-row>
          <v-btn
            color="primary"
            block
            large
            @click="postersExpanded = !postersExpanded"
            class="rounded-0"
          >
            View
            <span class="ml-1" v-if="postersExpanded">
              Less
            </span>
            <span class="ml-1" v-else>
              More
            </span>
            <v-icon v-if="postersExpanded" small class="ml-2"
              >arrow_upward</v-icon
            >
            <v-icon v-else small class="ml-2">arrow_downward</v-icon>
          </v-btn>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      tabs: null,
      backdropsExpanded: false,
      postersExpanded: false,
      backdrops: "",
      posters: "",
      tabTitle: [
        {
          title: "Back Drops",
        },
        {
          title: "Poster",
        },
      ],
    };
  },
  methods: {
    async callCredits() {
      await this.$http.get("/movie/" + this.id + "/images").then((res) => {
        this.backdrops = res.data.backdrops;
        this.posters = res.data.posters;
      });
    },
  },
  mounted() {
    this.callCredits();
  },
};
</script>

<style lang="scss">
div.backdrops-expanded {
  height: 100%;
  overflow: visible;
}
div.backdrops-unexpanded {
  height: 450px;
  overflow: hidden;
}

div.posters-expanded {
  height: 100%;
  overflow: visible;
}
div.posters-unexpanded {
  height: 450px;
  overflow: hidden;
}
</style>
