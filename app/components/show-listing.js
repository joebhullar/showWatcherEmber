import Ember from 'ember';

export default Ember.Component.extend({
    isWide: false,
    statusChanged: Ember.observer('show', 'show.watchstatus', function() {
        console.info('watchstatus');
        this.get('show').save();
    }),
    actions: {
        		toggleImageSize() {
            							this.toggleProperty('isWide');
        				  		  }
    }

});


