const error = {
  surname: [
    {
      ifv: "required",
      text: "Укажите вашу фамилию",
    },
  ],
  name: [
    {
      ifv: "required",
      text: "Укажите ваше имя",
    },
  ],
  patronymic: [{}],
  dateBirths: [
    {
      ifv: "required",
      text: "Укажите вашу дату рождения",
    },
  ],
  phone: [
    {
      ifv: "required",
      text: "Укажите наш номер телефона",
    },
    {
      ifv: "phoneValidate",
      text: "Не корреткно указан номер",
    },
  ],
  customerGroup: [
    {
      ifv: "required",
      text: "Укажите вашу группу",
    },
  ],
  pol: [{}],
  healingDoctor: [{}],
  sms: [{}],
  // address
  addressIndex: [{}],
  addressCountry: [{}],
  addressArea: [{}],
  addressCity: [
    {
      ifv: "required",
      text: "Укажите ваш город",
    },
  ],
  addressStreet: [{}],
  addressHouse: [{}],
  // document
  documentType: [
    {
      ifv: "required",
      text: "Укажите ваш тип документа",
    },
  ],
  documentSeries: [{}],
  documentNumber: [{}],
  documentIssued: [{}],
  documentDateIssued: [
    {
      ifv: "required",
      text: "Укажите дату выдачи документа",
    },
  ],
};
export default {
  data() {
    return {
      error,
    };
  },
};
