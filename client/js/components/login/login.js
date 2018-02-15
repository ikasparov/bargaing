const login = require('./login.html');

export const loginComponent = {
  template: login,

    data: function() {
      return {
        email:"",
        error: ""
      }
    },

  methods: {
    login: function (e) {
      e.preventDefault();
      this.$http
        .post('/users/login', { email: this.email })
        .then(
          function(response) {
            console.log(response)
            localStorage.setItem('user', response.body.user);
            this.$router.push('/home');
          },
          function(response) {
            console.log(response);
              if (response.status === 422) {
                this.error = response.body;
                this.$router.push('/reg');
              }
          });
    }
  }
};
