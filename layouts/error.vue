<template>
  <div>
    <h1 v-if="error.statusCode === 404">PAGE NOT FOUND</h1>
    <h1 v-else>An error ocurred</h1>
  </div>
</template>

<script>
export default {
  layout: "blog",
};
</script>

<style scoped></style>
