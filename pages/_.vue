<template>
  <div>
    <h1>THIS PAGE DOESNT EXIST</h1>
  </div>
</template>

<script>
export default {
  name: "error",
  layout: "blog",
  middleware: [
    function ({ redirect }) {
      return redirect("/");
    },
  ],
};
</script>

<style scoped></style>
