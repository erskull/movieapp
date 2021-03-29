<template>
  <div class="homepage">
    <TopCarousel />
    <NowPlayingMovie />
    <PopularMovie />
    <TopRatedMovie />
  </div>
</template>

<script>
import TopCarousel from "@/components/TopCarousel";
import NowPlayingMovie from "@/components/NowPlaying/Movie";
import PopularMovie from "@/components/Popular/Movie";
import TopRatedMovie from "@/components/TopRated/Movie";

export default {
  name: "Home",
  components: {
    TopCarousel,
    NowPlayingMovie,
    PopularMovie,
    TopRatedMovie,
  },
};
</script>
