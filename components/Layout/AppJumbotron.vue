<template>
  <section class="jumbotron">
    <observer @intersect="intersect"></observer>
    <div class="jumbotron__contact">
      <slot name="header">
        <!--        <h1 class="jumbotron__heading-1">-->
        <!--          <span class="jumbotron__heading-name">Milan</span> Josifović-->
        <!--        </h1>-->
      </slot>
      <slot name="header2">
        <!--        <h2 class="jumbotron__heading-2">Full-stack developer</h2>-->
      </slot>
      <slot name="cta">
        <!--        ovde mi ide button cta-->
      </slot>
      <slot name="paragraph"> </slot>
      <slot name="arrow">
        <!--        <span class="jumbotron__arrow">&#10095;</span>-->
      </slot>
    </div>
  </section>
</template>

<script>
import Observer from "../Utility/Observer";
export default {
  name: "AppJumbotron",
  components: {
    Observer,
  },
  methods: {
    intersect() {
      this.$store.commit("page/setHeaderFilledFalse");
    },
  },
};
</script>

<style scoped lang="scss">
.jumbotron {
  grid-column: full-start/full-end;

  height: 80vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("~assets/img/header-lg.jpg");
  display: grid;
  grid-template-columns:
    [full-start] minmax(10rem, 10%)
    [sidebar-start] minmax(10rem, 10%)
    [container-start]1fr[container-end] minmax(10rem, 10%) [sidebar-end]minmax(
      10rem,
      10%
    )
    [full-end];
  justify-content: center;
  align-items: center;
  &__paragraph {
    color: $color-white;
    flex-grow: 0.4;
    font-size: 1.5rem;
    @media screen and (max-width: $bp-xl) {
      flex-grow: 0.4;
      margin: 1rem;
    }
  }
  &__contact {
    grid-column: container-start/container-end;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: inherit;
    @media screen and (max-width: $bp-sm) {
      grid-column: full-start/full-end;
    }
  }
  &__heading {
    &-1 {
      //font-family: $font-tertiary;
      color: $color-white;
      font-size: 3rem;
      letter-spacing: 5px;
      font-weight: 400;
      text-transform: uppercase;
      align-self: center;
      flex-grow: 0.2;
      @media screen and (max-width: $bp-sm) {
        font-size: 4rem;
      }
    }

    &-name {
      color: $color-orange-1;
    }
    &-2 {
      color: $color-grey-orange;
      font-size: 1.6rem;
      flex-grow: 0.2;
      font-weight: 400;
      text-transform: uppercase;
      @media screen and (max-width: $bp-sm) {
        font-size: 2rem;
      }
    }
  }
  .cta__button {
    font-family: inherit;
    color: $color-white;
    padding: 2rem 4rem;
    text-decoration: none;
    background: none;
    border: 2px solid $color-white;
    font-size: 1.2rem;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: 600;
    @media screen and (max-width: $bp-sm) {
      font-size: 1.8rem;
    }
  }
  &__arrow {
    margin-top: 10rem;
    transform: rotate(90deg) translateX(-2rem);
    color: $color-white;
    font-size: 2.4rem;
    cursor: pointer;
    transition: translate 0.3s ease-out;
    &:hover {
      transform: rotate(90deg) translateX(-2.3rem);
      color: $color-grey-orange;
    }
  }
}
</style>
