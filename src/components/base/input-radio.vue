<template>
  <div class="base-item-radio">
    <label class="base-label" :for="id">{{ items }}</label>
    <input
      :value="valueRadio"
      type="radio"
      v-bind="$attrs"
      v-model="propsValue"
      class="base-radio"
      :id="id"
      :name="name"
    />
    <input-error :$v="$v[name]" :error="error" />
  </div>
</template>

<script>
import InputError from "@/components/base/input-error";
export default {
  name: "input-radio",
  computed: {
    propsValue: {
      get: function () {
        return this.value;
      },
      set: function (value) {
        this.$emit("update:value", value);
      },
    },
  },
  components: { InputError },
  props: {
    valueRadio: {
      type: null,
      required: true,
    },
    // значения input
    value: {
      type: null,
    },
    // названия input + id
    name: {
      type: String,
      required: true,
    },
    // текст для input
    items: {
      type: String,
      required: true,
    },
    // объект валидации
    $v: {
      type: Object,
      required: true,
    },
    // объект ошибок
    error: {
      type: Array,
      required: true,
    },
    // id Input
    id: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="sass">
@import "src/assets/sass/base/base-input"
</style>
