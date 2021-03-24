<template>
  <input-select
    type="date"
    name="documentType"
    id="documentType"
    items="Тип документ"
    :$v="$v"
    :value.sync="$v.$model"
    :error="error"
    :option="documentType"
  />
</template>

<script>
import InputSelect from "@/components/base/input-select";
export default {
  name: "user-document-type",
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
      documentType: [
        { value: "Паспорт", text: "Паспорт" },
        { value: "Свидетельство о рождении", text: "Свидетельство о рождении" },
        { value: "Вод. удостоверение", text: "Вод. удостоверение" },
      ],
    };
  },
};
</script>
