<template>
  <li class="carousel__item">
    <img class="carousel__img" :src="imgUrl" :alt="headingText" />
    <h1 class="carousel__heading" :class="`carousel__heading-${id}`">
      {{ headingText }}
    </h1>
    <p class="carousel__paragraph">
      {{ paragraphText }}
    </p>
    <a :href="link" class="carousel__link">Više <span>&rarr;</span></a>
  </li>
</template>

<script>
export default {
  name: "AppCarouselItem",
  props: ["id", "imgUrl", "headingText", "paragraphText", "link"],
};
</script>

<style scoped lang="scss">
.carousel {
  &__item {
    background-color: $color-grey-light-1;
    //width: 33.33%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    padding-bottom: 1rem;
  }
  &__img {
    width: 100%;
    height: 60%;
    object-fit: cover;
    flex-grow: 0;
  }
  &__heading {
    color: $color-white;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 200;
    opacity: 0.8;
    width: 100%;
    flex-grow: 0;
    transform: translateY(0);
    letter-spacing: 2px;
    @media screen and (max-width: $bp-lg) {
      font-size: 2rem;
    }
    @media screen and (max-width: $bp-lg) {
      font-size: 2.4rem;
    }
    &-1 {
      background-color: $color-yellow;
    }
    &-2 {
      background-color: $color-gold;
    }
    &-3 {
      background-color: $color-pink;
    }
    &-4 {
      background-color: $color-grey-dark-3;
    }
  }
  &__paragraph {
    margin-top: 2rem;
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 1.4rem;
    color: $color-grey-dark-2;
    flex-grow: 1;
    @media screen and (max-width: $bp-lg) {
      font-size: 1.7rem;
    }
    @media screen and (max-width: $bp-xs) {
      font-size: 2rem;
    }
  }
  &__link,
  &__link:link,
  &__link:visited {
    color: $color-blue;
    font-weight: 500;
    align-self: flex-end;
    margin-right: 2rem;
    font-size: 1.4rem;
    text-decoration: none;
    text-transform: lowercase;
    border-bottom: 1.5px solid $color-blue;
    transition: all 0.2s;
    margin-top: 1rem;
    span {
      transition: all 0.8s;
      margin-left: 3px;
      margin-right: 3px;
    }
  }
  &__link:hover,
  &__link:active {
    color: $color-blue-1;
    span {
      margin-left: 8px;
      margin-right: 0px;
    }
  }
}
</style>
