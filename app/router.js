import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'});
  this.route('committees');
  this.route('houseCommittees');
  this.route('all-committees');
  this.route('sub-committees', {path: '/sub-committees/:committee_id'});
  this.route('recent-bills');
  this.route('bill-info');
  this.route('bill-sponsor', {path:'/bill-sponsor/:sponsor.last_name'});
  this.route('oregon-legislative-info');
  this.route('sign-up');
  this.route('sign-in');
});

export default Router;
