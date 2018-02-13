const reg = require('./register.html');


export const registerComponent = {
  template: reg,
  methods: {
    greet: function () {
      alert('Hello');
    }
  }
};
