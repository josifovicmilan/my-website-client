<template>
  <div class="main">
    <app-spinner></app-spinner>
    <app-jumbotron>
      <template #header>
        <h1 class="jumbotron__heading-1">
          <span class="jumbotron__heading-name">Platni</span> Listići
        </h1>
      </template>
      <template #paragraph>
        <p class="jumbotron__paragraph">
          Zbog vaše sigurnosti, dodat je još jedan nivo zaštite. Nakon što
          izaberete mesec i unesete svoj JMBG, <span>morate</span> uneti i svoju
          email adresu. Nakon toga, na vašu adresu će biti poslat odgovarajući
          platni listić.
        </p></template
      >
    </app-jumbotron>
    <app-card #form>
      <template>
        <form class="form" @submit.prevent="requestPayment">
          <h1 class="form__heading">Popunite:</h1>
          <div class="form__select-custom">
            <select
              class="form__select"
              :class="{ invalidInput: errors.invalidPayment }"
              name="form__select"
              id="form__select"
              v-model="formData.payment"
            >
              <option value="">Mesec</option>
              <option
                v-for="payment in loadedPayments"
                :key="payment.id"
                :value="payment.id"
              >
                {{ payment.monthName }}
              </option>
            </select>
            <span class="custom-arrow"></span>
          </div>
          <div class="form__group">
            <input
              id="form__select-number"
              type="number"
              class="form__input"
              :class="{ invalidInput: errors.invalidJMBG }"
              placeholder="JMBG"
              v-model="formData.jmbg"
              required
            />
            <label class="form__label" for="form__select-number">JMBG</label>
          </div>
          <div class="form__group">
            <input
              id="form__input-email"
              type="email"
              class="form__input"
              :class="{ invalidInput: errors.invalidEmail }"
              placeholder="Email"
              required
              v-model="formData.email"
            />
            <label class="form__label" for="form__input-email">email</label>
          </div>
          <button class="form__button">Pošalji zahtev</button>
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
  name: "payment",

  data() {
    return {
      formData: {
        payment: "",
        jmbg: "",
        email: "",
      },
      errors: {
        invalidEmail: false,
        invalidJMBG: false,
        invalidPayment: false,
      },
    };
  },
  methods: {
    requestPayment() {
      this.$store
        .dispatch("api/requestPayments", { data: this.formData })
        .then(() => {
          this.clearFields();
        });
    },
    clearFields() {
      this.formData.payment = "";
      this.formData.jmbg = "";
      this.formData.email = "";
    },
    // checkEmail(data) {
    //   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //   return re.test(String(email).toLowerCase());
    // },
    // validateEmail() {
    //   if (this.checkEmail(this.formData.email)) {
    //     this.errors.invalidEmail = false;
    //   } else this.errors.invalidEmail = true;
    // },
    // validateJMBG() {
    //   if (
    //     typeof this.formData.jmbg !== "number" ||
    //     this.formData.jmbg.toString().length !== 13
    //   ) {
    //     this.errors.invalidJMBG = true;
    //   } else this.errors.invalidJMBG = false;
    // },
    // validatePayment() {
    //   if (!this.formData.payment) {
    //     this.errors.invalidPayment = true;
    //   } else this.errors.invalidPayment = false;
    // },
  },

  asyncData(context) {
    //console.log(context);
    return context.store.dispatch("api/loadPayments");
  },
  computed: {
    loadedPayments() {
      return this.$store.getters["api/getPayments"];
    },
  },
};
</script>

<style scoped lang="scss">
.invalidInput {
  border-bottom: 4px solid $color-red;
}
.invalidSelect {
  border: 2px solid $color-red;
}
</style>
