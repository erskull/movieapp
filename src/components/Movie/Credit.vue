<template>
  <div class="credit">
    <v-card color="transparent" elevation="0" class="rounded-0 mb-3">
      <v-card-title class="d-flex align-center py-0 pr-0"
        >Cast

        <v-tabs
          background-color="transparent"
          height="64"
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
            :class="castExpanded ? 'cast-expanded' : 'cast-unexpanded'"
          >
            <v-col
              v-for="(cast, i) in casts"
              :key="i"
              cols="6"
              xs="6"
              sm="3"
              md="3"
            >
              <v-card flat color="transparent" class="rounded-0">
                <v-img
                  height="280"
                  :src="'http://image.tmdb.org/t/p/w500' + cast.profile_path"
                  :alt="cast.name"
                >
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
                <v-card-text class="text-center">
                  {{ cast.name }} as {{ cast.character }}
                </v-card-text>
              </v-card>
            </v-col>
            <div
              v-if="!castExpanded"
              style="position:absolute;bottom:44px;width:100%;height:200px;background:linear-gradient(0deg,rgba(30,30,30,1),rgba(30,30,30,0));"
            ></div>
          </v-row>
          <v-btn
            color="primary"
            block
            large
            @click="castExpanded = !castExpanded"
            class="rounded-0"
          >
            View
            <span class="ml-1" v-if="castExpanded">
              Less
            </span>
            <span class="ml-1" v-else>
              More
            </span>
            <v-icon v-if="castExpanded" small class="ml-2">arrow_upward</v-icon>
            <v-icon v-else small class="ml-2">arrow_downward</v-icon>
          </v-btn>
        </v-tab-item>
        <v-tab-item>
          <v-row
            class="position-relative"
            no-gutters
            :class="crewExpanded ? 'crew-expanded' : 'crew-unexpanded'"
          >
            <v-col
              v-for="(crew, i) in crews"
              :key="i"
              cols="6"
              xs="6"
              sm="3"
              md="3"
            >
              <v-card
                flat
                color="transparent"
                class="rounded-0"
                style="height:100%;"
              >
                <v-img
                  height="280"
                  :src="'http://image.tmdb.org/t/p/w500' + crew.profile_path"
                  :alt="crew.name"
                >
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
                <v-card-text class="text-center">
                  {{ crew.name }} for {{ crew.job }}
                </v-card-text>
              </v-card>
            </v-col>
            <div
              v-if="!crewExpanded"
              style="position:absolute;bottom:44px;width:100%;height:200px;background:linear-gradient(0deg,rgba(30,30,30,1),rgba(30,30,30,0));"
            ></div>
          </v-row>
          <v-btn
            color="primary"
            block
            large
            @click="crewExpanded = !crewExpanded"
            class="rounded-0"
          >
            View
            <span class="ml-1" v-if="crewExpanded">
              Less
            </span>
            <span class="ml-1" v-else>
              More
            </span>
            <v-icon v-if="crewExpanded" small class="ml-2">arrow_upward</v-icon>
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
      castExpanded: false,
      crewExpanded: false,
      casts: "",
      crews: "",
      tabTitle: [
        {
          title: "Cast",
        },
        {
          title: "Crew",
        },
      ],
    };
  },
  methods: {
    async callCredits() {
      await this.$http.get("/movie/" + this.id + "/credits").then((res) => {
        this.casts = res.data.cast;
        this.crews = res.data.crew;
      });
    },
  },
  mounted() {
    this.callCredits();
  },
};
</script>

<style lang="scss">
div.cast-expanded {
  height: 100%;
  overflow: visible;
}
div.cast-unexpanded {
  height: 450px;
  overflow: hidden;
}

div.crew-expanded {
  height: 100%;
  overflow: visible;
}
div.crew-unexpanded {
  height: 450px;
  overflow: hidden;
}
</style>
