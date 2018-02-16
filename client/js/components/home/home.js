const home = require('./home.html');

export const homeComponent = {
  template: home,

  data: function() {
    return {
      rooms: []
    }
  },
  created: function () {
    this.fetchData();
  },
  methods: {
    fetchData: function () {
      this.$http
        .get('/rooms')
        .then(
          function(response) {
            this.rooms = response.body.rooms;

          },
          function(response) {

          });
    }
  }
};
