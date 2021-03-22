<template>
  <div class="">
    <label class="form_user-label" :for="name">{{ items }}</label>
    <input
      v-bind="$attrs"
      v-model="propsValue"
      class="form_user-input"
      :id="name"
      :name="name"
    />
    <input-error :$v="$v[name]" :error="error" />
  </div>
</template>

<script>
import InputError from "@/components/base/input-error";
export default {
  name: "input-validate",
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
    // значения input
    value: {},
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
    error: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang="sass">
// .form_user-label
// .form_user-input
</style>
