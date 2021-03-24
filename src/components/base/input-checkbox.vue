<template>
  <div class="base-item-input base-item-checkbox">
    <input-label :required="$v" :name="$attrs.id" :items="items" />
    <input
      type="checkbox"
      v-bind="$attrs"
      v-model="propsValue"
      class="base-checkbox"
    />
    <input-error :$v="$v" :error="error" />
  </div>
</template>

<script>
import InputError from "@/components/base/input-error";
import InputLabel from "@/components/base/input-label";
import ValidateElement from "@/mixins/base/validate-element.js";
export default {
  name: "input-checkbox",
  mixins:[ValidateElement],
  components: { InputLabel, InputError },
};
</script>
<style lang="sass">
@import "src/assets/sass/base/base-input"
</style>
