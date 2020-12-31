<template>
  <div class="main">
    <app-jumbotron>
      <template #header>
        <h1 class="jumbotron__heading-1">
          <span class="jumbotron__heading-name">Milan</span> Josifović
        </h1>
      </template>
      <template #header2>
        <h2 class="jumbotron__heading-2">Full-stack developer</h2>
      </template>
      <template #cta>
        <nuxt-link to="/contact" class="cta__button">Contact me</nuxt-link>
      </template>
      <template #arrow>
        <span class="jumbotron__arrow" @click="scrollToDiv">&#10095;</span>
      </template>
    </app-jumbotron>
    <app-carousel></app-carousel>
  </div>
</template>

<script>
import AppJumbotron from "../components/Layout/AppJumbotron";
import AppCarousel from "../components/Layout/Carousel/AppCarousel";
export default {
  components: {
    AppCarousel,
    AppJumbotron,
  },
  methods: {
    scrollToDiv() {
      window.scrollTo(0, this.$store.getters["page/getCarouselPosition"]);
    },
  },
};
</script>

<style lang="scss">
.main {
  display: grid;
  grid-template-columns:
    [full-start] 10%
    [sidebar-start] minmax(10rem, 10%)
    [container-start]1fr[container-end] 10% [sidebar-end]minmax(10rem, 10%)
    [full-end];
}
</style>
