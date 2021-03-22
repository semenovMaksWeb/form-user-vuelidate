<template>
  <div id="app">
    <user-form />
  </div>
</template>

<script>
import UserForm from "@/components/user/user-form";
export default {
  name: "App",
  components: { UserForm },
};
</script>

<style lang="sass">
@import "assets/sass/reset"
</style>
