<template>
  <div>
    <h1>My Content</h1>
  </div>
</template>

<script>
export default {
  name: "MyContent",
  mounted() {
    let user = localStorage.getItem("apiToken");
    if (!user) {
      this.$router.push({ name: "login" });
    }
  },
};
</script>

<style></style>
