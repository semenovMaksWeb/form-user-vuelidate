<template>
  <div class="base-item-radio">
    <label class="base-label" :for="$attrs.id">{{ items }}</label>
    <input
      type="radio"
      v-bind="$attrs"
      v-model="propsValue"
      class="base-radio"
    />
    <input-error :$v="$v" :error="error" />
  </div>
</template>

<script>
import InputError from "@/components/base/input-error";
import ValidateElement from "@/mixins/base/validate-element.js";
export default {
  name: "input-radio",
  mixins:[ValidateElement],
  components: { InputError },
  props:{
    valueRadio:{
      type: null,
      required: true,
    }
  }
};
</script>
<style lang="sass">
@import "src/assets/sass/base/base-input"
</style>
