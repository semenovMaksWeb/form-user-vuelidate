<template>
  <div>
    <div v-for="data in error" :key="data.id" class="error-full">
      <div v-if="!$v[data.ifv] && $v.$dirty" class="error">
        {{ data.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "input-error",
  props: {
    // Массив валидации
    $v: {
      request: true,
      type: Object,
    },
    error: {
      request: true,
      type: Array,
    },
    name: {
      request: true,
      type: String,
    },
  },
};
</script>
<style lang="sass">
// .form_user-label
// .form_user-input
</style>
