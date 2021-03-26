<template>
  <div class="get-block-info" v-if="validate">
    <div>Вы успешно зарегистрировались</div>
    <div class="get-block-info-close" @click="close">X</div>
  </div>
</template>

<script>
export default {
  name: "get-block-info",
  props: {
    validate: {
      type: Boolean,
      required: true,
    },
  },
  watch: {
    validate() {
      if (this.validate) {
        setTimeout(() => {
          this.$emit("update:validate", false);
        }, 3000);
      }
    },
  },
  methods: {
    close() {
      this.$emit("update:validate", false);
    },
  },
};
</script>

<style lang="sass">
@import "src/assets/sass/base/get-block-info"
</style>
