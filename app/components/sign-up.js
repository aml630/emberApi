import Ember from 'ember';

export default Ember.Component.extend({
  firebase: Ember.inject.service(),
  actions: {
    signUp() {
      console.log("function run")
      let controller = this;
      this.get('firebase').createUser({
        email: this.get('email') || '',
        password: this.get('password') || '',
      }, (error, data) => {
        if (error) {
          console.log(error);
        } else {
          controller.set('email', null);
          controller.set('password', null);
        }
      });
      console.log(controller);
    }
  }
});
