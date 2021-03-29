<template>
  <div class="images">
    <v-card class="rounded-0 mb-3">
      <v-card-title class="d-flex pt-0"
        >Images
        <v-tabs v-model="tabs" right style="width:unset !important;">
          <v-tab v-for="(tab, i) in tabTitle" :key="i">
            {{ tab.title }}
          </v-tab>
        </v-tabs>
      </v-card-title>
      <v-tabs-items v-model="tabs">
        <v-tab-item>
          <client-only>
            <LightGallery
              :images="imagesBackdrop"
              :index="index"
              :disable-scroll="true"
              @close="index = null"
            />
          </client-only>
          {{ imagesBackdrop }}
          <v-row
            :class="
              backdropsExpanded ? 'backdrops-expanded' : 'backdrops-unexpanded'
            "
          >
            <v-col
              v-for="(imageB, i) in imagesBackdrop"
              :key="i"
              cols="12"
              md="3"
            >
              <!-- :key="thumbIndex" -->
              <v-card class="rounded-0" @click="index = i">
                <v-img
                  height="150"
                  :src="'http://image.tmdb.org/t/p/w500' + imageB.file_path"
                ></v-img>
              </v-card>
            </v-col>
          </v-row>
          <v-btn
            color="primary"
            block
            large
            @click="backdropsExpanded = !backdropsExpanded"
            class="rounded-0 mt-3"
          >
            View
            <span v-if="backdropsExpanded">
              Less
            </span>
            <span v-else>
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
            :class="postersExpanded ? 'posters-expanded' : 'posters-unexpanded'"
          >
            <!-- style="height:400px;overflow:hidden;" -->
            <v-col
              v-for="(imageP, i) in imagesPoster"
              :key="i"
              cols="12"
              md="3"
            >
              <v-img
                :src="'http://image.tmdb.org/t/p/w500' + imageP.file_path"
              ></v-img>
            </v-col>
          </v-row>
          <v-btn
            color="primary"
            block
            large
            @click="postersExpanded = !postersExpanded"
            class="rounded-0 mt-3"
          >
            View More
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
      index: null,
      tabs: null,
      backdropsExpanded: false,
      postersExpanded: false,
      imagesPoster: "",
      imagesBackdrop: "",
      tabTitle: [
        {
          title: "Back Drops",
        },
        {
          title: "Posters",
        },
      ],
    };
  },
  methods: {
    async callImages() {
      await this.$axios
        .get(
          "/movie/" +
            this.id +
            "/images" +
            "?api_key=386a231dcbaf190d09142d84a5bf8fe5"
        )
        .then((res) => {
          this.imagesBackdrop = res.backdrops;
          this.imagesPoster = res.posters;
        });
    },
  },
  mounted() {
    // this.callImages();
  },
};
</script>

<style lang="scss">
div.backdrops-expanded {
  height: 100%;
  overflow: visible;
}
div.backdrops-unexpanded {
  height: 300px;
  overflow: hidden;
}
div.posters-expanded {
  height: 100%;
  overflow: visible;
}
div.posters-unexpanded {
  height: 300px;
  overflow: hidden;
}
</style>
