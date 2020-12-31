<template>
  <div class="card">
    <observer @noIntersect="noIntersect"></observer>
    <slot name="form"> </slot>
  </div>
</template>

<script>
import ButtonInline from "../Utility/ButtonInline";
import Observer from "../Utility/Observer";
export default {
  name: "AppCard",
  components: { ButtonInline, Observer },
  props: ["imageUrl", "backColor"],
  methods: {
    noIntersect() {
      this.$store.commit("page/setHeaderFilledTrue");
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  grid-column: container-start/container-end;
  z-index: 200;
  height: 70vh;
  width: 100%;
  opacity: 1;
  @media screen and (max-width: $bp-xl) {
    grid-column: sidebar-start/sidebar-end;
    height: 80vh;
  }
  @media screen and (max-width: $bp-md) {
    grid-column: full-start/full-end;
    height: 80vh;
  }
  @media screen and (max-width: $bp-md) {
    height: 60vh;
  }
  @media screen and (max-width: $bp-xs) {
    height: 50vh;
  }
  &__information {
    grid-column: 3/4;
    grid-row: 1/-1;
    background-color: $color-blue-1;
    @media screen and (max-width: $bp-xs) {
      grid-column: 1/-1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__heading {
      color: $color-white;
      font-size: 2rem;
      text-transform: uppercase;
      font-weight: 300;
      letter-spacing: 2px;
      margin: 1rem;
      @media screen and (max-width: $bp-xs) {
        font-size: 1.6rem;
      }
    }
    &__list {
      margin: 1rem;
      list-style-type: none;
      @media screen and (max-width: $bp-xs) {
        display: flex;
        align-items: center;
      }
    }
    &__item {
      color: $color-white;
      font-size: 1.2rem;
      display: flex;
      /*justify-content: center;*/
      align-items: center;
      margin: 2rem 1rem;
      svg {
        margin-right: 1rem;
      }
      @media screen and (max-width: $bp-xs) {
        margin: 0rem 0.5rem;
        font-size: 1rem;
        svg {
          margin-right: 0.5rem;
        }
      }
    }
    &__icon {
      height: 1.2rem;
      width: 1.2rem;
      fill: $color-white;
      margin-right: 0.4rem;
    }
  }
  &__heading {
    font-size: 3rem;
    color: $color-white;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 400;
  }
  .form {
    display: grid;
    margin-top: -10rem;
    grid-gap: 1rem;
    background-color: white;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, max-content) max-content;
    @media screen and (max-width: $bp-md) {
      margin-left: 2rem;
      margin-right: 2rem;
    }
    @media screen and (max-width: $bp-xs) {
      margin-left: 1rem;
      margin-right: 1rem;
    }
    &__heading {
      grid-column: 1/3;
      font-size: 3rem;
      color: $color-blue;
      letter-spacing: 2px;
      text-transform: uppercase;
      font-weight: 400;
      align-self: center;
      justify-self: center;
      margin: 3rem 0rem;
    }

    &__label {
      font-size: 1.8rem;
      margin-top: 0.7rem;
      color: $color-grey-dark-1;
      display: block;
      transition: all 0.3s;
    }
    &__input {
      &:focus {
        outline: none;
        box-shadow: 0 1rem 2rem rgba($color-grey-dark-1, 0.1);
      }
      font-family: inherit;
      font-size: 1.8rem;
      justify-self: stretch;
      width: 100%;
      border: none;
      color: $color-grey-dark-3;
      border-bottom: 1.8px solid $color-orange;
      margin-bottom: 0.4rem;
      padding-bottom: 0.3rem;
      background-color: transparent;
      display: block;
      &::-webkit-input-placeholder {
        color: $color-grey-dark-1;
      }
    }
    &__textarea {
      width: 100%;
      border: 1.8px solid $color-orange;
      resize: vertical;
      font-family: inherit;
      font-size: 1.6rem;
      padding: 0.5rem;
      color: $color-grey-dark-1;
      &:focus {
        outline: none;
      }
    }
    &__textarea:placeholder-shown ~ label {
      opacity: 0;
      visibility: hidden;
      transform: translateY(-14rem);
    }
    &__input:placeholder-shown + label {
      opacity: 0;
      visibility: hidden;
      transform: translateY(-4rem);
    }

    &__group {
      grid-column: 1/3;
      margin: 2rem 3rem;
      @media screen and (max-width: $bp-xs) {
        grid-column: 1/4;
      }
    }
    &__select-custom {
      position: relative;
      grid-column: 1/3;
      margin: 2rem 3rem;
      border: 1.8px solid $color-orange;
      display: flex;
      @media screen and (max-width: $bp-xs) {
        grid-column: 1/4;
      }
    }
    &__select-custom select {
      width: 100%;
      font-size: 1.6rem;
      color: $color-grey-dark-1;
      font-family: inherit;
      //appearance: none;
      border: none;
      outline: none;
      padding: 2rem;
    }
    &__button {
      margin-bottom: 1rem;
      grid-column: 2/3;
      border: 1px solid $color-orange;
      background-color: transparent;
      font-family: inherit;
      font-size: 1.5rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      padding: 1.2rem;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        background-color: $color-orange;
        color: white;
      }
    }
  }
}
.custom-arrow {
  position: absolute;
  top: 0;
  right: 0;
  background-color: white;
  display: block;
  height: 100%;
  width: 5rem;
  pointer-events: none;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &::before {
    border-left: 0.65em solid transparent;
    border-right: 0.65em solid transparent;
    border-bottom: 0.65em solid $color-orange;
    top: 30%;
  }
  &::after {
    top: 60%;
    border-left: 0.65em solid transparent;
    border-right: 0.65em solid transparent;
    border-top: 0.65em solid $color-orange;
  }
}
</style>
