<template>
  <input-select
    type="date"
    name="healingDoctor"
    items="Лечащий врач"
    :$v="$v"
    :value.sync="$v.healingDoctor.$model"
    :error="error"
    :option="healingDoctor"
  />
</template>

<script>
import InputSelect from "@/components/base/input-select";
export default {
  name: "user-healing-doctor",
  components: { InputSelect },
  props: {
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
  data() {
    return {
      healingDoctor: [
        { value: "Иванов", text: "Иванов" },
        { value: "Захаров", text: "Захаров" },
        { value: "Чернышева", text: "Чернышева" },
      ],
    };
  },
};
</script>
