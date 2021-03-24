<template>
  <div class="base-item-input">
    <div class="base-label">Пол</div>
    <div class="user_pol-item_input">
      <input-radio
        name="pol"
        :id="'pol-1'"
        :value-radio="'М'"
        items="М"
        :$v="$v"
        :value.sync="$v.$model"
        :error="error"
      />
      <input-radio
        name="pol"
        :id="'pol-2'"
        value-radio="Ж"
        items="Ж"
        :$v="$v"
        :value.sync="$v.$model"
        :error="error"
      />
    </div>
  </div>
</template>

<script>
import InputRadio from "@/components/base/input-radio";
export default {
  name: "user-pol",
  components: { InputRadio },
  props: {
    error: {
      type: Array,
      required: true,
    },
    $v: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="sass">
@import "src/assets/sass/user/user-pol"
</style>
