<template>
  <footer class="footer">
    <img src="~/assets/img/logo.png" alt="logo" class="footer__logo" />
    <ul class="footer__list">
      <li class="footer__item">
        <nuxt-link class="footer__link" to="/contact">Kontakt</nuxt-link>
      </li>
      <li class="footer__item">
        <nuxt-link class="footer__link" to="payment">Platni listići</nuxt-link>
      </li>
      <li class="footer__item">
        <nuxt-link class="footer__link" to="#">Registracija</nuxt-link>
      </li>
    </ul>
    <div class="footer__lower">&copy; josifovic.milan</div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped lang="scss">
.footer {
  background: rgba($color-blue-light, 0.8);
  color: $color-blue;
  height: 50vh;
  clip-path: polygon(0 20%, 100% 0, 100% 100%, 0 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //item1
  &__logo {
    height: 10rem;
    flex-grow: 0;
    align-self: center;
    flex-basis: min-content;
    margin-top: 6rem;
    @media screen and (max-width: $bp-md) {
      margin-top: 10rem;
    }
  }
  //item2
  &__list {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    width: 40%;
    justify-content: space-between;
    border-top: 2px solid $color-blue-1;
    margin-top: 4rem;
    padding-top: 2rem;
    flex-grow: 1;
    @media screen and (max-width: $bp-md) {
      width: 70%;
    }
    @media screen and (max-width: $bp-xs) {
      width: 90%;
    }
  }
  &__link {
    &:link,
    &:visited {
      text-decoration: none;
      text-transform: uppercase;
      font-size: 1.4rem;
      color: $color-blue-1;
      padding: 0.5rem 1rem;
      transition: all 0.3s;
      display: inline-block;
      @media screen and (max-width: $bp-xs) {
        font-size: 1.5rem;
      }
    }
    &:hover,
    &:active {
      color: $color-blue;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
      background-color: inherit;
      transform: rotate(5deg) scale(1.3);
    }
  }
  //item3
  &__lower {
    align-self: stretch;
    background-color: $color-blue-1;
    align-items: flex-end;
    color: $color-white;
    flex-grow: 0;
    display: flex;
    justify-content: center;
    @media screen and (max-width: $bp-sm) {
      font-size: 1.4rem;
    }
  }
}
</style>
