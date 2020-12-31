<template>
  <div class="sidebar" :class="{ active: loginFormState }">
    <form class="form" @submit.prevent="login" v-if="!$auth.loggedIn">
      <h3 class="form__heading">Log in</h3>
      <div class="form__group">
        <svg class="form__icon">
          <use xlink:href="@/assets/img/stripe.svg#icon-envelop"></use>
        </svg>
        <input
          placeholder="Email"
          type="email"
          name="email"
          id="email"
          class="form__input"
          v-model="loginInfo.email"
        />
      </div>
      <div class="form__group">
        <svg class="form__icon">
          <use xlink:href="@/assets/img/stripe.svg#icon-lock"></use>
        </svg>

        <input
          placeholder="Šifra"
          type="password"
          name="password"
          id="password"
          class="form__input"
          v-model="loginInfo.password"
        />
      </div>

      <button class="form__button-100">Login</button>
    </form>
    <div class="form" v-else>
      <h3 class="form__heading">Zdravo, {{ $auth.user.name }}</h3>
      <ul class="sidebar__list">
        <li v-if="this.$auth.hasScope('admin')">
          <nuxt-link class="sidebar__link" to="/admin"
            >Administracija</nuxt-link
          >
        </li>
        <li>
          <span class="sidebar__link" to="#" @click="logout">Logout</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppSidebar",
  data() {
    return {
      loginInfo: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("api/login", {
          data: this.loginInfo,
        })
        .then((data) => {
          this.loginInfo.email = "";
          this.loginInfo.password = "";
        });
    },
    logout() {
      this.$store.dispatch("api/logout").then(() => {
        this.$store.commit("page/toggleLoginForm");
      });
    },
  },
  computed: {
    loginFormState() {
      return this.$store.getters["page/getLoginFormState"];
    },
  },
};
</script>

<style scoped lang="scss">
.sidebar {
  &__list {
    list-style-type: none;
    align-self: center;
  }
  &__link,
  &__link:link,
  &__link:visited {
    color: $color-grey-light-1;
    font-size: 2rem;
    letter-spacing: 4px;
    cursor: pointer;
    text-decoration: none;
    margin-bottom: 1rem;
    &:hover,
    &:active {
      color: $color-grey-dark-1;
    }
  }
  position: fixed;
  top: -50%;
  right: 0;
  width: 0;
  opacity: 0;
  transform: scaleY(0);
  height: 100vh;
  transition: all 0.8s cubic-bezier(0.86, 0, 0.07, 1);
  z-index: 300;
  background: radial-gradient(ellipse at bottom, $color-purple, $color-blue-1);
  display: flex;
  justify-content: center;
  .form {
    align-self: center;
    /*background-color: orangered;*/
    padding: 4rem;
    width: 60%;
    @media screen and (max-width: $bp-lg) {
      width: 80%;
    }
    @media screen and (max-width: $bp-sm) {
      width: 100%;
    }
    &__heading {
      color: $color-white;
      font-size: 3rem;
      font-weight: 300;
      letter-spacing: 3px;
      margin-bottom: 3rem;
    }
    &__group {
      display: flex;
      align-items: center;
      border-bottom: 1px solid $color-white;
      margin-bottom: 2rem;
    }
    &__icon {
      fill: $color-white;
      height: 2.2rem;
      width: 2.2rem;
      margin-right: 1rem;
    }
    &__input {
      width: 100%;
      font-family: inherit;
      padding: 1.2rem 0.5rem;
      font-size: 1.8rem;
      color: $color-white;
      border: none;
      letter-spacing: 2px;
      &:focus {
        outline: none;
      }
      background: none;
      &::-webkit-input-placeholder {
        color: $color-white;
        letter-spacing: 2px;
      }
    }
    &__button-100 {
      margin-top: 3rem;
      background-color: $color-white;
      border: none;
      padding: 3rem;
      font-weight: 500;
      color: $color-blue-1;
      font-family: inherit;
      font-size: 2rem;
      display: block;
      width: 100%;
      letter-spacing: 2px;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        background-color: $color-grey-light-1;
      }
    }
  }
}
.active {
  width: 100%;
  opacity: 1;
  top: 0;
  transform: scaleY(1);
}
</style>
