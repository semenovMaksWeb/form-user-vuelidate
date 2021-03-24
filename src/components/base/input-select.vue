<template>
  <div class="base-item-input">
    <input-label :required="$v" :name="$attrs.id" :items="items" />
    <select
      v-bind="$attrs"
      v-model="propsValue"
      class="base-input"
    >
      <option :value="data.value" v-for="(data, index) in option" :key="index">
        {{ data.text }}
      </option>
    </select>
    <input-error :$v="$v" :error="error" />
  </div>
</template>

<script>
import InputError from "@/components/base/input-error";
import InputLabel from "@/components/base/input-label";
import ValidateElement from "@/mixins/base/validate-element.js";
export default {
  name: "input-select",
  mixins:[ValidateElement],
  components: { InputLabel, InputError },
  props: {
    // Массив выборов
    option: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang="sass">
@import "src/assets/sass/base/base-input"
</style>
