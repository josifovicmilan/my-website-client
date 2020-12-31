<template>
  <div
    class="snackbar"
    :class="{ visible: snackbarVisible }"
    :style="{ backgroundColor: snackbarColor }"
  >
    <p class="snackbar__text">{{ snackbarContent }}</p>
    <span @click="closeSnack">
      <svg class="snackbar__icon">
        <use xlink:href="~/assets/img/stripe.svg#icon-cross"></use>
      </svg>
    </span>
  </div>
</template>

<script>
export default {
  name: "AppSnackbar",
  data() {
    return {
      snackbarColor: "#eee",
      snackbarContent: "",
      snackbarVisible: false,
    };
  },
  created() {
    this.$store.subscribe((mutation, state) => {
      if ((mutation.type = "snackbar/showMessage")) {
        this.snackbarVisible = this.$store.getters["snackbar/getVisibility"];
        this.snackbarContent = this.$store.getters["snackbar/getContent"];
        this.snackbarColor = this.$store.getters["snackbar/getColor"];
      }
    });
  },

  methods: {
    closeSnack() {
      console.log("usao u close snack");
      this.$store.commit("snackbar/closeSnackbar");
    },
  },
};
</script>

<style scoped lang="scss">
.snackbar {
  opacity: 0;
  z-index: 1000;
  position: fixed;
  bottom: 10vh;
  left: 10%;
  width: 80%;
  background-color: #7f828b;
  border-radius: 1rem;
  display: none;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  box-shadow: 0rem 0.8rem 1rem rgba(0, 0, 0, 0.2);

  &__text {
    margin-left: 2rem;
    color: $color-white;
    font-size: 1.8rem;
  }
  &__icon {
    width: $default-font-size;
    height: $default-font-size;
    fill: $color-white;
    margin-right: 1rem;
    cursor: pointer;
    &:hover {
      fill: $color-grey-dark-1;
    }
  }
}
.visible {
  opacity: 1;
  display: flex;
  transition: opacity 3s ease-out;
}
@keyframes fade {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
</style>
