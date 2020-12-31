"use strict";
//STATE
export const state = () => ({
  payments: [],
  months: [
    "Januar",
    "Februar",
    "Mart",
    "April",
    "Maj",
    "Jun",
    "Jul",
    "Avgust",
    "Septembar",
    "Oktobar",
    "Novembar",
    "Decembar",
  ],
  loading: false,
});
//MUTATIONS
export const mutations = {
  setPayments(state, payload) {
    const payments = [];
    console.log(typeof payments);
    payload.forEach((item) => {
      console.log(item);
      const year = item.file.substring(0, 4);
      const month = +item.file.substring(5, 7) - 1;
      console.log(month);

      const namedMonth = state.months[month];
      const name = `${namedMonth} ${year}`;
      payments.push({
        id: item.id,
        file: item.file,
        monthName: name,
      });
    });

    state.payments = payments;
  },
  startLoading(state) {
    state.loading = true;
  },
  stopLoading(state) {
    state.loading = false;
  },
};
//GETTERS
export const getters = {
  getPayments(state) {
    return state.payments;
  },
  loadingStatus(state) {
    return state.loading;
  },
};

//ACTIONS
export const actions = {
  async loadPayments(context) {
    await this.$axios
      .$get("/api/payments")
      .then((data) => {
        context.commit("setPayments", data);
      })
      .catch((e) => new Error(e));
  },
  async contact(context, data) {
    context.commit("startLoading");
    // console.log(context.state.loading);
    await this.$axios
      .$post("/api/contacts", {
        name: data.data.name,
        email: data.data.email,
        message: data.data.message,
      })
      .then((response) => {
        this.$notifier.showMessage({
          content: response.message,
          color: "#6da556",
        });
      })
      .catch((e) => {
        this.$notifier.showMessage({
          content: e.response.data.errors[0],
          color: "#d6384f",
        });
      })
      .finally(() => {
        // console.log(context.state.loading);
        context.commit("stopLoading");
      });
  },
  async login(context, data) {
    //console.log(data);
    await this.$auth
      .loginWith("local", {
        data: data.data,
      })
      .then((response) => {});
  },
  async logout(context) {
    //console.log("usao u log out");
    await this.$auth.logout();
  },
  async setPayment(context, data) {
    context.commit("startLoading");
    let formData = new FormData();
    formData.append("file", data.data, data.data.name);
    //console.log(formData);
    this.$axios.setHeader("Content-Type", "multipart/form-data");
    await this.$axios
      .$post("/api/payments", formData)
      .then((response) => {
        this.$notifier.showMessage({
          content: response.message,
          color: "#6da556",
        });
      })
      .catch((e) => {
        //console.log(e.response.data.errors);
        this.$notifier.showMessage({
          content: e.response.data.errors,
          color: "#d6384f",
        });
      })
      .finally(() => {
        context.commit("stopLoading");
      });
  },
  async requestPayments(context, data) {
    context.commit("startLoading");
    this.loading = true;
    await this.$axios
      .$post("/api/request-payments", {
        jmbg: data.data.jmbg,
        email: data.data.email,
        payment: data.data.payment,
      })
      .then((response) => {
        console.log(response.message);
        this.$notifier.showMessage({
          content: response.message,
          color: "#6da556",
        });
      })
      .catch((e) => {
        this.$notifier.showMessage({
          content: e.response.data.errors[0],
          color: "#d6384f",
        });
      })
      .finally(() => {
        context.commit("stopLoading");
      });
  },
};
