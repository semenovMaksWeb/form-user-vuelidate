<template>
  <div class="base-item-input">
    <input-label :required="$v" :name="$attrs.id" :items="items" />
    <input
      v-bind="$attrs"
      v-model="propsValue"
      class="base-input"
    />
    <input-error :$v="$v" :error="error" />
  </div>
</template>

<script>
import InputError from "@/components/base/input-error";
import InputLabel from "@/components/base/input-label";
import ValidateElement from "@/mixins/base/validate-element.js";
export default {
  name: "input-text",
  mixins:[ValidateElement],
  components: { InputLabel, InputError },
};
</script>
<style lang="sass">
@import "src/assets/sass/base/base-input"
</style>
