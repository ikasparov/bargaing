const login = require('./login.html');

export const loginComponent = {
  template: login,

  methods: {
    greet: function () {
      alert(123);
    }
  }
};
