<template>
  <div class="main">
    <app-spinner></app-spinner>
    <app-jumbotron>
      <template #header>
        <h1 class="jumbotron__heading-1">
          <span class="jumbotron__heading-name"> Dodaj novi</span>platni listić
        </h1>
      </template>
      <template #paragraph>
        <p class="jumbotron__paragraph">
          Ime fajla treba da bude u formatu <span>godina_mesec.pdf</span>. Na
          primer za januar 2021. godine, ime fajla je <span>2021_01.pdf</span>
        </p>
      </template>
    </app-jumbotron>
    <app-card>
      <template #form>
        <form class="form" @submit.prevent="addPayment">
          <h1 class="form__heading">Pošaljite poruku:</h1>
          <div class="form__group">
            <input
              id="form__input-name"
              type="file"
              name="file"
              required
              @change="filePlaced($event)"
            />
            <label class="form__label" for="form__input-name"
              >Izaberite fajl:</label
            >
          </div>

          <button class="form__button">Dodaj platni listic</button>
          <div class="card__information">
            <h3 class="card__information__heading">Kontakt:</h3>
            <ul class="card__information__list">
              <li class="card__information__item">
                <svg class="card__information__icon">
                  <use xlink:href="@/assets/img/stripe.svg#icon-envelop"></use>
                </svg>
                <span>josifovic.milann@gmail.com</span>
              </li>
              <li class="card__information__item">
                <svg class="card__information__icon">
                  <use xlink:href="@/assets/img/stripe.svg#icon-phone"></use>
                </svg>
                <span>+381 (0)64 388-63-83</span>
              </li>
            </ul>
          </div>
        </form>
      </template>
    </app-card>
    <app-snackbar></app-snackbar>
  </div>
</template>

<script>
export default {
  name: "admin",
  middleware: "authenticated",
  data() {
    return {
      file: [],
    };
  },
  methods: {
    addPayment() {
      //console.log(this.file);
      this.$store
        .dispatch("api/setPayment", { data: this.file })
        .then(() => {});
    },
    filePlaced(event) {
      this.file = event.target.files[0];
    },
  },
  mounted() {
    this.$store.commit("page/closeLoginForm");
  },
};
</script>

<style scoped></style>
