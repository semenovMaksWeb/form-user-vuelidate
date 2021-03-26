<template>
  <button class="user-button" @click.prevent="setUser">Сохранить</button>
</template>

<script lang="ts">
export default {
  name: "user-button",
  props: {
    $v: {
      type: Object,
      required: true,
    },
    validate: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    setUser() {
      this.$v.$touch();
      if (this.$v.$error === true) {
        console.log("error");
      } else {
        console.log("goot");
        this.$emit("update:validate", true);
        for (const dataKey in this.$v.$model) {
          this.$v.$model[dataKey] = "";
        }
        this.$v.$reset();
      }
    },
  },
};
</script>
<style lang="sass">
@import "src/assets/sass/user/user-button"
</style>