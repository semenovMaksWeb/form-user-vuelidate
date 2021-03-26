<template>
  <div class="base-item-input">
    <input-label :required="$v" :name="$attrs.id" :items="items" />
    <div class="base-item-select_multiple">
      <input readonly @click="click" :value="value" class="base-input"  />
      <select
        :ref="'select'"
        @blur="sizeCheck = 0"
        v-if="sizeCheck !== 0"
        :size="sizeCheck"
        multiple
        v-bind="$attrs"
        v-model="propsValue"
        class="base-input base-select-multiple"
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
    <input-error :$v="$v" :error="error" />
  </div>
</template>

<script>
import InputError from "@/components/base/input-error";
import InputLabel from "@/components/base/input-label";
import ValidateElement from "@/mixins/base/validate-element.js";
export default {
  name: "input-select-multiple",
  mixins:[ValidateElement],
  data() {
    return {
      sizeCheck: 0,
    };
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
  },
};
</script>
<style lang="sass">
@import "src/assets/sass/base/base-input"
</style>
