<template>
  <div class="observer"></div>
</template>

<script>
export default {
  name: "Observer",
  props: ["options"],
  data() {
    return {
      observer: null,
    };
  },
  mounted() {
    const options = this.options || {};
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        //ako je u preseku sa nekim emmit
        this.$emit("intersect");
      } else {
        this.$emit("noIntersect");
      }
    }, options);
    //observuje ovaj element na koji ga nakacimo
    //da li ekran ima dodirne tacke sa elementom na koji ga nakacimo
    this.observer?.observe(this.$el);
  },
  destroyed() {
    this.observer.disconnect();
  },
};
</script>

<style scoped></style>
