import Vue from "vue";

import AppSnackbar from "@/components/Utility/AppSnackbar";
import AppJumbotron from "@/components/Layout/AppJumbotron";
import AppSidebar from "@/components/Layout/AppSidebar";
import AppSpinner from "@/components/Utility/AppSpinner";
const components = { AppJumbotron, AppSidebar, AppSnackbar, AppSpinner };

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component);
});
