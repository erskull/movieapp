<template>
  <div class="homepage">
    <TopCarousel />
    <PopularMovie />
    <PopularTvShow />
  </div>
</template>

<script>
import TopCarousel from "@/components/TopCarousel";
import PopularMovie from "@/components/Popular/Movie";
import PopularTvShow from "@/components/Popular/TvShow";

export default {
  name: "Home",
  components: {
    TopCarousel,
    PopularMovie,
    PopularTvShow,
  },
};
</script>
