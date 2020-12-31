export const state = () => ({
  loginForm: false,
  headerFilled: false,
  carouselPosition: 0,
  admin: false,
});
export const mutations = {
  toggleLoginForm(state) {
    state.loginForm = !state.loginForm;
  },
  closeLoginForm(state) {
    state.loginForm = false;
  },
  setHeaderFilledTrue(state) {
    state.headerFilled = true;
  },
  setHeaderFilledFalse(state) {
    state.headerFilled = false;
  },
  setCarouselPosition(state, payload) {
    state.carouselPosition = payload;
  },
};
export const getters = {
  getLoginFormState(state) {
    return state.loginForm;
  },
  getHeaderFilled(state) {
    return state.headerFilled;
  },
  getCarouselPosition(state) {
    return state.carouselPosition;
  },
};
