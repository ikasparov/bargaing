const reg = require('./register.html');


export const registerComponent = {
  template: reg,

    data: function() {
      return {
      name: '',
      mail: '',
      errors: []
      }
    },

  methods: {
    register: function(e) {
      e.preventDefault();
      this.errors = [];
      this.$http
        .post('/users/register', {
          user: { name:this.name, email:this.mail }
        })

        .then(function(response){
          localStorage.setItem('user', response.body.user);
          this.$router.push('/home');
        },

        function(response) {
          if (response.status===422) {
            this.errors = response.body;
          };

        }
      )
    }
  }
};
