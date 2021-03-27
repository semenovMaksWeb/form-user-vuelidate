module.exports = {
  publicPath: process.env.NODE_ENV === 'production' 
  ? '/form-user-vuelidate/'
  : '/',

  lintOnSave: false,
  css: {
    extract: true,
  },
};
