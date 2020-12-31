<template>
  <div class="main">
    <app-spinner></app-spinner>
    <app-jumbotron>
      <template #header>
        <h1 class="jumbotron__heading-1">
          <span class="jumbotron__heading-name">Pošaljite</span> mail
        </h1>
      </template>
      <template #paragraph>
        <p class="jumbotron__paragraph">
          Popunite kontakt formu kako biste stupili u kontakt sa mnom.
        </p>
      </template>
    </app-jumbotron>
    <app-card>
      <template #form>
        <form class="form">
          <h1 class="form__heading">Pošaljite poruku:</h1>
          <div class="form__group">
            <input
              id="form__input-name"
              type="text"
              class="form__input"
              placeholder="Ime"
              required
              v-model="contactData.name"
            />
            <label class="form__label" for="form__input-name">Ime</label>
          </div>
          <div class="form__group">
            <input
              id="form__input-email"
              type="email"
              class="form__input"
              placeholder="Email"
              v-model="contactData.email"
              required
            />
            <label class="form__label" for="form__input-email">email</label>
          </div>
          <div class="form__group">
            <textarea
              class="form__textarea"
              name="form__textarea"
              id="form__textarea"
              cols="30"
              rows="5"
              placeholder="Poruka"
              v-model="contactData.message"
            ></textarea>
            <label for="form__textarea" class="form__label">Poruka</label>
          </div>
          <button class="form__button" @click.prevent="contact">
            Pošalji poruku
          </button>
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
  name: "contact",
  data() {
    return {
      contactData: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    async contact() {
      this.$store
        .dispatch("api/contact", { data: this.contactData })
        .then(() => {
          this.clearFields();
        });
    },
    clearFields() {
      this.contactData.name = "";
      this.contactData.email = "";
      this.contactData.message = "";
    },
  },
};
</script>

<style scoped></style>
