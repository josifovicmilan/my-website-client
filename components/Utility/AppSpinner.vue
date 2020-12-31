<template>
  <div class="spinner" :class="{ loading: loading }">
    <div class="lds-grid">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppSpinner",

  computed: {
    loading() {
      console.log(this.$store.getters["api/loadingStatus"]);
      return this.$store.getters["api/loadingStatus"];
    },
  },
  // watch: {
  //   loading(oldValue, newValue) {
  //     console.log(oldValue);
  //     console.log(newValue);
  //   },
  // },
};
</script>

<style scoped lang="scss">
.loading {
  display: block !important;
}
.spinner {
  display: none;
  z-index: 10000;
  background-color: $color-blue-1;
  opacity: 0.8;
  cursor: not-allowed;
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .lds-grid {
    display: inline-block;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10rem;
    height: 10rem;
  }
  .lds-grid div {
    position: absolute;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: #fff;
    animation: lds-grid 1.2s linear infinite;
  }
  .lds-grid div:nth-child(1) {
    top: 8px;
    left: 8px;
    animation-delay: 0s;
  }
  .lds-grid div:nth-child(2) {
    top: 8px;
    left: 32px;
    animation-delay: -0.4s;
  }
  .lds-grid div:nth-child(3) {
    top: 8px;
    left: 56px;
    animation-delay: -0.8s;
  }
  .lds-grid div:nth-child(4) {
    top: 32px;
    left: 8px;
    animation-delay: -0.4s;
  }
  .lds-grid div:nth-child(5) {
    top: 32px;
    left: 32px;
    animation-delay: -0.8s;
  }
  .lds-grid div:nth-child(6) {
    top: 32px;
    left: 56px;
    animation-delay: -1.2s;
  }
  .lds-grid div:nth-child(7) {
    top: 56px;
    left: 8px;
    animation-delay: -0.8s;
  }
  .lds-grid div:nth-child(8) {
    top: 56px;
    left: 32px;
    animation-delay: -1.2s;
  }
  .lds-grid div:nth-child(9) {
    top: 56px;
    left: 56px;
    animation-delay: -1.6s;
  }
}

@keyframes lds-grid {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
