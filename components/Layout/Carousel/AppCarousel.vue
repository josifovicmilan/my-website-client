<template>
  <div class="carousel" id="carousel">
    <observer @noIntersect="noIntersect"></observer>
    <h1 class="heading">Recent <span class="heading__sub">activities</span></h1>
    <ul class="carousel__list">
      <app-carousel-item
        v-for="item in carouselItems"
        :key="item.id"
        :id="item.id"
        :imgUrl="item.imgUrl"
        :headingText="item.headingText"
        :paragraphText="item.paragraphText"
        :link="item.link"
      ></app-carousel-item>
    </ul>
  </div>
</template>

<script>
import AppCarouselItem from "./AppCarouselItem";
import Observer from "../../Utility/Observer";
export default {
  name: "AppCarousel",
  components: { AppCarouselItem, Observer },
  provide: ["carouselPosition"],
  data() {
    return {
      carouselPosition: "",
      carouselItems: [
        {
          id: 1,
          imgUrl: `${require("@/assets/img/koncic.jpg")}`,
          headingText: "Končić sreće",
          paragraphText: "Instragram stranice prodavnice Končić sreće.",
          link: "https://www.instagram.com/koncic_srece/",
        },
        {
          id: 2,
          imgUrl: `${require("@/assets/img/listici.jpg")}`,
          headingText: "Platni listići",
          paragraphText: "Uvid u prethodna primanja Gimnazije Kruševac.",
          link: "#",
        },
        {
          id: 3,
          imgUrl: `${require("@/assets/img/python.jpg")}`,
          headingText: "ePython",
          paragraphText: "Interaktivni kurs za programski jezik Python.",
          link: "http://edusoft.matf.bg.ac.rs/ePython/",
        },
        {
          id: 4,
          imgUrl: `${require("@/assets/img/tabla.jpg")}`,
          headingText: "eMatematika",
          paragraphText: "Video lekcije iz matematike za srednjoškolce.",
          link: "https://www.youtube.com/channel/UCxN2OogAr72H-bsYWnCVvgA",
        },
      ],
    };
  },
  methods: {
    noIntersect() {
      this.$store.commit("page/setHeaderFilledTrue");
    },
  },
  computed: {
    displayedItems() {
      const splicedItems = this.carouselItems.filter((item) => {
        return item.id !== this.counter;
      });
      return splicedItems;
    },
  },
  mounted() {
    const heading = this.$el.querySelector(".heading").clientHeight;
    this.$store.commit("page/setCarouselPosition", this.$el.offsetTop);
  },
};
</script>

<style scoped lang="scss">
/*height: 40rem;*/

.heading {
  display: block;
  text-align: center;
  margin-top: 5rem;
  text-transform: uppercase;
  font-size: 4rem;
  font-weight: 400;
  letter-spacing: 4px;
  color: $color-orange;
  &__sub {
    color: $color-pink;
  }
  @media screen and (max-width: $bp-xs) {
    font-size: 3rem;
  }
}
.carousel {
  grid-column: sidebar-start/sidebar-end;
  @media screen and (max-width: $bp-xl) {
    grid-column: full-start/full-end;
  }
  @media screen and (max-width: $bp-lg) {
    grid-column: sidebar-start/sidebar-end;
  }
  @media screen and (max-width: $bp-md) {
    grid-column: full-start / full-end;
  }
  &__list {
    margin: 10rem 5rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5rem;
    @media screen and(max-width: $bp-lg) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 3rem;
    }
    @media screen and (max-width: $bp-md) {
      grid-gap: 8rem;
    }
    @media screen and (max-width: $bp-xs) {
      grid-template-columns: 1fr;
      grid-gap: 3rem;
    }
  }
}
</style>
