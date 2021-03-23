<template>
  <div class="base-item-input">
    <div class="base-label">Пол</div>
    <div class="user_pol-item_input">
      <input-radio
        :id="'pol-1'"
        :value-radio="'М'"
        name="pol"
        items="М"
        :$v="$v"
        :value.sync="$v.pol.$model"
        :error="error.pol"
      />
      <input-radio
        :id="'pol-2'"
        :value-radio="'Ж'"
        name="pol"
        items="Ж"
        :$v="$v"
        :value.sync="$v.pol.$model"
        :error="error.pol"
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
      type: Object,
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
