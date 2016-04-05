import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      house: function() {
        var url = "http://congress.api.sunlightfoundation.com/committees?chamber=house&apikey=df8234f721df44e9814b0aba94aeaf3a";
        return Ember.$.getJSON(url).then(function(responseJSON) {
          return responseJSON.results;
        });
      },
      senate: function() {
        console.log("senate search");
        var url = "http://congress.api.sunlightfoundation.com/committees?apikey=df8234f721df44e9814b0aba94aeaf3a";
        return Ember.$.getJSON(url).then(function(responseJSON) {
          return responseJSON.results;
        })
      }
    })
  }

});
