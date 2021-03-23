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
    // Массив ошибок
    error: {
      request: true,
      type: Array,
    },
  },
};
</script>
<style lang="sass">
@import "src/assets/sass/base/base-errors"
</style>
