<template>
  <div>
    <label class="base-label" :for="name">{{ items }} </label>
    <span class="base-label-required" v-if="required.$params.required">*</span>
  </div>
</template>

<script lang="ts">
export default {
  name: "input-label",
  props: {
    // названия привязка по id
    name: {
      type: String,
      required: true,
    },
    // проверка обязательное ли это поле
    required: {
      type: Object,
    },
    // текст label
    items: {
      type: String,
      required: true,
    },
  },
};
</script>
