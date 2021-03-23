<template>
  <input-select-multiple
    size="3"
    multiple
    type="date"
    name="customerGroup"
    items="Группа клиентов"
    :$v="$v"
    :value.sync="$v.customerGroup.$model"
    :error="error"
    :option="typeCustomer"
  />
</template>

<script>
import InputSelectMultiple from "@/components/base/input-select-multiple";
export default {
  name: "user-customer-group",
  components: { InputSelectMultiple },
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
      typeCustomer: [
        { value: "VIP", text: "VIP" },
        { value: "Проблемные", text: "Проблемные" },
        { value: "ОМС", text: "ОМС" },
      ],
    };
  },
};
</script>
