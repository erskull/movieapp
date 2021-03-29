<template>
  <div class="homepage">
    <TopCarousel />
    <PopularMovie />
    <LatestMovie />
  </div>
</template>

<script>
import TopCarousel from "@/components/TopCarousel";
import PopularMovie from "@/components/Popular/Movie";
import LatestMovie from "@/components/TopRated/Movie";

export default {
  name: "Home",
  components: {
    TopCarousel,
    PopularMovie,
    LatestMovie,
  },
};
</script>
