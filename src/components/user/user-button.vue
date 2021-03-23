<template>
  <button @click.prevent="setUser">Сохранить</button>
</template>

<script lang="ts">
export default {
  name: "user-button",
  props: {
    $v: {
      type: Object,
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
      }
      const data = {};
      for (const dataKey in this.$v.$model) {
        data[dataKey] = this.$v.$model[dataKey];
      }
      console.log(data);
    },
  },
};
</script>
