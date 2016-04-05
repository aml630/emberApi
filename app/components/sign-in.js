
import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    signIn(provider) {
      console.log(provider);
      let controller = this;
      this.get('session').open('firebase', {
        provider: provider,
        email: this.get('email') || '',
        password: this.get('password') || '',
      }).then(() => {
        controller.set('email', null);
        controller.set('password', null);
      }, (error) => {
        console.log(error);
      });
    }
  }
});
