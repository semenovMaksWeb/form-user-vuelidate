<template>
  <div class="base-item-input">
    <input-label :required="$v[name]" :name="name" :items="items" />
    <input
      v-bind="$attrs"
      v-model="propsValue"
      class="base-input"
      :id="name"
      :name="name"
    />
    <input-error :$v="$v[name]" :error="error" />
  </div>
</template>

<script>
import InputError from "@/components/base/input-error";
import InputLabel from "@/components/base/input-label";
export default {
  name: "input-text",
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
  components: { InputLabel, InputError },
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
    // объект ошибок
    error: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang="sass">
@import "src/assets/sass/base/base-input"
</style>
