<template>
  <section class="section-user-form">
    <div class="container">
      <get-block-info :validate.sync="getBlogItem" />
      <h1 class="user_form-name">Форма регистрации клиента</h1>
      <form class="user-form">
        <div class="user-form-block">
          <h3 class="user-form-title">Личные данные</h3>
          <input-text
            name="surname"
            id="surname"
            items="Фамилия"
            :$v="$v.form.surname"
            :value.sync="$v.form.surname.$model"
            :error="error.surname"
          />
          <input-text
            name="name"
            id="name"
            items="Имя"
            :$v="$v.form.name"
            :value.sync="$v.form.name.$model"
            :error="error.name"
          />
          <input-text
            name="patronymic"
            id="patronymic"
            items="Отчество"
            :$v="$v.form.patronymic"
            :value.sync="$v.form.patronymic.$model"
            :error="error.patronymic"
          />
          <input-text
            name="phone"
            id="phone"
            items="Номер телефона"
            :$v="$v.form.phone"
            :value.sync="$v.form.phone.$model"
            :error="error.phone"
            @input="phoneValidate($v.form.phone)"
          />
          <input-text
            type="date"
            name="dateBirths"
            id="dateBirths"
            items="Дата рождения"
            :$v="$v.form.dateBirths"
            :value.sync="$v.form.dateBirths.$model"
            :error="error.dateBirths"
          />
          <user-pol :$v="$v.form.pol" :error="error.pol" />
          <user-customer-group
            :$v="$v.form.customerGroup"
            :error="error.customerGroup"
            :value.sync="$v.form.customerGroup.$model"
          />
          <user-healing-doctor
            :$v="$v.form.healingDoctor"
            :error="error.healingDoctor"
            :value.sync="$v.form.healingDoctor.$model"
          />
          <input-checkbox
            name="sms"
            id="sms"
            items="СМС"
            :$v="$v.form.sms"
            :value.sync="$v.form.sms.$model"
            :error="error.sms"
          />
        </div>
        <div class="user-form-block">
          <h3 class="user-form-title">Адрес</h3>
          <input-text
            name="addressIndex"
            id="addressIndex"
            items="Индекс"
            :$v="$v.form.addressIndex"
            :value.sync="$v.form.addressIndex.$model"
            :error="error.addressIndex"
          />
          <input-text
            name="addressCountry"
            id="addressCountry"
            items="Страна"
            :$v="$v.form.addressCountry"
            :value.sync="$v.form.addressCountry.$model"
            :error="error.addressCountry"
          />
          <input-text
            name="addressArea"
            id="addressArea"
            items="Область"
            :$v="$v.form.addressArea"
            :value.sync="$v.form.addressArea.$model"
            :error="error.addressArea"
          />
          <input-text
            name="addressCity"
            id="addressCity"
            items="Город"
            :$v="$v.form.addressCity"
            :value.sync="$v.form.addressCity.$model"
            :error="error.addressCity"
          />
          <input-text
            name="addressStreet"
            id="addressStreet"
            items="Улица"
            :$v="$v.form.addressStreet"
            :value.sync="$v.form.addressStreet.$model"
            :error="error.addressStreet"
          />
          <input-text
            name="addressHouse"
            id="addressHouse"
            items="Дом"
            :$v="$v.form.addressHouse"
            :value.sync="$v.form.addressHouse.$model"
            :error="error.addressHouse"
          />
        </div>
        <div class="user-form-block">
          <h3 class="user-form-title">Документ удовлетворяющий личности</h3>
          <user-document-type
            :$v="$v.form.documentType"
            :value.sync="$v.form.documentType.$model"
            :error="error.documentType"
          />
          <input-text
            name="documentSeries"
            id="documentSeries"
            items="Серия"
            :$v="$v.form.documentSeries"
            :value.sync="$v.form.documentSeries.$model"
            :error="error.documentSeries"
          />
          <input-text
            name="documentNumber"
            id="documentNumber"
            items="Номер"
            :$v="$v.form.documentNumber"
            :value.sync="$v.form.documentNumber.$model"
            :error="error.documentNumber"
          />
          <input-text
            name="documentIssued"
            id="documentIssued"
            items="Кем выдан"
            :$v="$v.form.documentIssued"
            :value.sync="$v.form.documentIssued.$model"
            :error="error.documentIssued"
          />
          <input-text
            type="date"
            name="documentDateIssued"
            id="documentDateIssued"
            items="Дата выдачи"
            :$v="$v.form.documentDateIssued"
            :value.sync="$v.form.documentDateIssued.$model"
            :error="error.documentDateIssued"
          />
        </div>
      </form>
      <UserButton :$v="$v.form" :validate.sync="getBlogItem" />
    </div>
  </section>
</template>

<script>
import InputText from "@/components/base/input-text";
import mixinValidate from "@/mixins/user/form-validate/form-validate";
import goodCreateUser from "@/mixins/user/get-good-create-user";
import mixinError from "@/mixins/user/form-validate/error-validate";
import InputCheckbox from "@/components/base/input-checkbox";
import UserPol from "@/components/user/user-pol";
import UserCustomerGroup from "@/components/user/select/user-customer-group";
import UserHealingDoctor from "@/components/user/select/user-healing-doctor";
import UserDocumentType from "@/components/user/select/document-type";
import UserButton from "@/components/user/user-button";
import PhoneValidate from "@/mixins/user/phone-validate";
import GetBlockInfo from "@/components/base/get-block-info";
export default {
  name: "user-form",
  mixins: [mixinValidate, mixinError, PhoneValidate, goodCreateUser],
  components: {
    GetBlockInfo,
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
