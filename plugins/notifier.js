import Vue from "vue";

export default ({ app, store }, inject) => {
  //console.log(inject); ovo daje nuxt
  inject("notifier", {
    showMessage(data) {
      console.log("called injection");
      store.commit("snackbar/showMessage", data);
    },
  });
};
