<template>
  <form>
    <input-validate
      name="name"
      items="Имя"
      :$v="$v"
      :value.sync="$v.name.$model"
      :error="error.name"
    />
    <input-validate
      name="surname"
      items="Фамилия"
      :$v="$v"
      :value.sync="$v.surname.$model"
      :error="error.surname"
    />
    <input-validate
      name="patronymic"
      items="Отчество"
      :$v="$v"
      :value.sync="$v.patronymic.$model"
      :error="error.patronymic"
    />
    <input-validate
      :type="'date'"
      name="dateBirths"
      items="Дата рождения"
      :$v="$v"
      :value.sync="$v.dateBirths.$model"
      :error="error.dateBirths"
    />
    <!--    <input-validate-->
    <!--      name="pol"-->
    <!--      items="Пол"-->
    <!--      :$v="$v"-->
    <!--      :value.sync="$v.pol.$model"-->
    <!--      :error="error.pol"-->
    <!--    />-->
    <input-validate
      name="customerGroup"
      items="Группа клиентов"
      :$v="$v"
      :value.sync="$v.customerGroup.$model"
      :error="error.customerGroup"
    />
  </form>
</template>

<script>
import InputValidate from "@/components/base/input-validate";
import mixinValidate from "@/mixins/user/form-validate";
import mixinError from "@/mixins/user/error-validate";
export default {
  created() {
    console.log(this);
  },
  name: "user-form",
  mixins: [mixinValidate, mixinError],
  components: { InputValidate },
};
</script>
<style lang="sass"></style>
