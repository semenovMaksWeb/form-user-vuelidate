<template>
  <form>
    <h1 class="user_form-name">Форма регистрации клиента</h1>
    <input-text
      name="surname"
      items="Фамилия"
      :$v="$v.form"
      :value.sync="$v.form.surname.$model"
      :error="error.surname"
    />
    <input-text
      name="name"
      items="Имя"
      :$v="$v.form"
      :value.sync="$v.form.name.$model"
      :error="error.name"
    />
    <input-text
      name="patronymic"
      items="Отчество"
      :$v="$v.form"
      :value.sync="$v.form.patronymic.$model"
      :error="error.patronymic"
    />
    <input-text
      name="phone"
      items="Номер телефона"
      :$v="$v.form"
      :value.sync="$v.form.phone.$model"
      :error="error.phone"
    />
    <input-text
      type="date"
      name="dateBirths"
      items="Дата рождения"
      :$v="$v.form"
      :value.sync="$v.form.dateBirths.$model"
      :error="error.dateBirths"
    />
    <user-pol :$v="$v.form" :error="error" />
    <user-customer-group
      :$v="$v.form"
      :error="error.customerGroup"
      :value.sync="$v.form.customerGroup.$model"
    />
    <user-healing-doctor
      :$v="$v.form"
      :error="error.healingDoctor"
      :value.sync="$v.form.healingDoctor.$model"
    />
    <input-checkbox
      name="sms"
      items="СМС"
      :$v="$v.form"
      :value.sync="$v.form.sms.$model"
      :error="error.sms"
    />
    <input-text
      name="addressIndex"
      items="Индекс"
      :$v="$v.form"
      :value.sync="$v.form.addressIndex.$model"
      :error="error.addressIndex"
    />
    <input-text
      name="addressCountry"
      items="Страна"
      :$v="$v.form"
      :value.sync="$v.form.addressCountry.$model"
      :error="error.addressCountry"
    />
    <input-text
      name="addressArea"
      items="Область"
      :$v="$v.form"
      :value.sync="$v.form.addressArea.$model"
      :error="error.addressArea"
    />
    <input-text
      name="addressArea"
      items="Город"
      :$v="$v.form"
      :value.sync="$v.form.addressCity.$model"
      :error="error.addressCity"
    />
    <input-text
      name="addressArea"
      items="Улица"
      :$v="$v.form"
      :value.sync="$v.form.addressStreet.$model"
      :error="error.addressStreet"
    />
    <input-text
      name="addressHouse"
      items="Дом"
      :$v="$v.form"
      :value.sync="$v.form.addressHouse.$model"
      :error="error.addressHouse"
    />
    <user-document-type
      :$v="$v.form"
      :value.sync="$v.form.documentType.$model"
      :error="error.documentType"
    />
    <input-text
      name="documentSeries"
      items="Серия"
      :$v="$v.form"
      :value.sync="$v.form.documentSeries.$model"
      :error="error.documentSeries"
    />
    <input-text
      name="documentNumber"
      items="Номер"
      :$v="$v.form"
      :value.sync="$v.form.documentNumber.$model"
      :error="error.documentNumber"
    />
    <input-text
      name="documentIssued"
      items="Кем выдан"
      :$v="$v.form"
      :value.sync="$v.form.documentIssued.$model"
      :error="error.documentIssued"
    />
    <input-text
      type="date"
      name="documentDateIssued"
      items="Дата выдачи"
      :$v="$v.form"
      :value.sync="$v.form.documentDateIssued.$model"
      :error="error.documentDateIssued"
    />
    <user-button :$v="$v.form" />
  </form>
</template>

<script>
import InputText from "@/components/base/input-text";
import mixinValidate from "@/mixins/user/form-validate";
import mixinError from "@/mixins/user/error-validate";
import InputCheckbox from "@/components/base/input-checkbox";
import UserPol from "@/components/user/user-pol";
import UserCustomerGroup from "@/components/user/select/user-customer-group";
import UserHealingDoctor from "@/components/user/select/user-healing-doctor";
import UserDocumentType from "@/components/user/select/document-type";
import UserButton from "@/components/user/user-button";
export default {
  name: "user-form",
  mixins: [mixinValidate, mixinError],
  components: {
    UserButton,
    UserDocumentType,
    UserHealingDoctor,
    UserCustomerGroup,
    UserPol,
    InputCheckbox,
    InputText,
  },
};
</script>
<style lang="sass">
@import "src/assets/sass/user/user-form"
</style>
