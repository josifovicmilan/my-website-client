<template>
  <header class="header" :class="{ header__filled: headerFilled }">
    <div class="header__logo">
      <nuxt-link to="/">
        <img src="@/assets/img/logo.png" alt="logo" class="header__logo-img" />
      </nuxt-link>
    </div>
    <ul class="header__list">
      <li class="header__item">
        <nuxt-link to="contact" class="header__link">Kontakt</nuxt-link>
      </li>
      <li class="header__item">
        <nuxt-link to="payment" class="header__link">Listići</nuxt-link>
      </li>
      <li class="header__item">
        <span @click="toggleLoginForm" class="header__link">
          <svg class="header__icon">
            <use xlink:href="@/assets/img/stripe.svg#icon-user"></use>
          </svg>
        </span>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      //loginForm: false,
    };
  },
  mounted() {
    // console.log(this.$el);
  },
  methods: {
    toggleLoginForm() {
      this.$store.commit("page/toggleLoginForm");
    },
  },
  computed: {
    loginFormState() {
      return this.$store.getters["page/getLoginFormState"];
    },
    headerFilled() {
      return this.$store.getters["page/getHeaderFilled"];
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  &__logo-img {
    height: 3rem;
    width: 3rem;
  }
  z-index: 400;
  position: fixed;
  width: 100%;
  padding: 0 2rem;
  height: 8vh;
  display: flex;

  justify-content: space-between;
  align-items: center;
  &__list {
    list-style-type: none;
    display: flex;
    align-items: center;
  }
  &__link,
  &__link:visited,
  &__link:link {
    border: none;
    background: none;
    font-size: 1.6rem;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1.4px;
    color: $color-white;
    font-weight: 300;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:not(last-child) {
      margin-right: 1.5rem;
    }
    &:hover > * {
      color: $color-grey-light-2;
    }
    @media screen and (max-width: $bp-md) {
      font-size: 1.8rem;
    }
    @media screen and (max-width: $bp-sm) {
      font-size: 2rem;
    }
  }
  &__icon {
    height: $default-font-size;
    width: $default-font-size;
    fill: $color-white;
    margin-right: 0.4rem;
  }
  &__filled {
    background-color: white;
    box-shadow: 0 3px 20px rgba(black, 0.2);
    ul li a {
      color: $color-blue !important;
    }
    ul li svg {
      fill: $color-blue !important;
    }
  }
}
</style>
