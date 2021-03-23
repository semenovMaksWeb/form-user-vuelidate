<template>
  <div class="base-item-input">
    <input-label :required="$v[name]" :name="name" :items="items" />
    <select
      v-bind="$attrs"
      v-model="propsValue"
      class="base-input"
      :id="name"
      :name="name"
    >
      <option :value="data.value" v-for="(data, index) in option" :key="index">
        {{ data.text }}
      </option>
    </select>
    <input-error :$v="$v[name]" :error="error" />
  </div>
</template>

<script>
import InputError from "@/components/base/input-error";
import InputLabel from "@/components/base/input-label";
export default {
  name: "input-select",
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
    // Массив выборов
    option: {
      type: Array,
      required: true,
    },
    // значения input
    value: {
      type: null,
      required: true,
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
  },
};
</script>
<style lang="sass">
@import "src/assets/sass/base/base-input"
</style>
