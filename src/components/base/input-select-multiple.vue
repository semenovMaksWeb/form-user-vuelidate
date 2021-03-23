<template>
  <div class="base-item-input">
    <input-label :required="$v[name]" :name="name" :items="items" />
    <div class="base-item-select_multiple">
      <input readonly @click="click" :value="value" />
      <select
        :ref="'select'"
        @blur="sizeCheck = 0"
        v-if="sizeCheck !== 0"
        :size="sizeCheck"
        multiple
        v-bind="$attrs"
        v-model="propsValue"
        class="base-input base-select-multiple"
        :id="name"
        :name="name"
      >
        <option
          :value="data.value"
          v-for="(data, index) in option"
          :key="index"
        >
          {{ data.text }}
        </option>
      </select>
    </div>
    <input-error :$v="$v[name]" :error="error" />
  </div>
</template>

<script>
import InputError from "@/components/base/input-error";
import InputLabel from "@/components/base/input-label";
export default {
  name: "input-select-multiple",
  data() {
    return {
      sizeCheck: 0,
    };
  },
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
  methods: {
    click() {
      this.sizeCheck = this.size;
      this.$nextTick(() => {
        this.$refs["select"].focus();
      });
    },
  },
  components: { InputLabel, InputError },
  props: {
    // количество option
    size: {
      type: String,
    },
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
