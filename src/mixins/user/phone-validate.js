export default {
  methods: {
    phoneValidate(input) {
      input.$model = input.$model.replace(/[^+\d]/g, "");
      if (input.$model[0] !== "7" && input.$model.length > 0) {
        input.$model = 7 + input.$model;
      }
      if(input.$model.length > 11){
        input.$model = input.$model.slice(0, 11);
      }
    },
  },
};
