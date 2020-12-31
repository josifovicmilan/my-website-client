<template>
  <div class="container">
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <Nuxt />
    <app-footer></app-footer>
  </div>
</template>
<script>
import AppJumbotron from "../components/Layout/AppJumbotron";
import AppHeader from "@/components/Layout/AppHeader";
import AppFooter from "@/components/Layout/AppFooter";
import AppSidebar from "../components/Layout/AppSidebar";
export default {
  components: {
    AppHeader,
    AppFooter,
    AppJumbotron,
    AppSidebar,
  },
};
</script>
<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  /*grid-template-rows: auto 1fr auto;*/
  /*grid-template-columns: [full-start]minmax(15rem, 10%)[container-start] 1fr [container-end sidebar-start] 15rem minmax(15rem,10%)[sidebar-end full-end];*/
}
</style>
