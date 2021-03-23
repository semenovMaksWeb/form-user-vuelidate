import { required } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      form: {
        surname: "",
        name: "",
        patronymic: "",
        dateBirths: "",
        phone: "",
        customerGroup: [],
        pol: "",
        healingDoctor: "",
        sms: false,
        addressIndex: "",
        addressCountry: "",
        addressArea: "",
        addressCity: "",
        addressStreet: "",
        addressHouse: "",
        documentType: "",
        documentSeries: "",
        documentNumber: "",
        documentIssued: "",
        documentDateIssued: "",
      },
    };
  },
  validations: {
    form: {
      surname: {
        required,
      },
      name: {
        required,
      },
      patronymic: {},
      dateBirths: {
        required,
      },
      phone: {
        required,
      },
      customerGroup: {
        required,
      },
      pol: {},
      healingDoctor: {},
      sms: {},
      // address
      addressIndex: {},
      addressCountry: {},
      addressArea: {},
      addressCity: {
        required,
      },
      addressStreet: {},
      addressHouse: {},
      // document
      documentType: {
        required,
      },
      documentSeries: {},
      documentNumber: {},
      documentIssued: {},
      documentDateIssued: {
        required,
      },
    },
  },
};
