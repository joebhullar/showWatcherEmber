import Ember from 'ember';

export default Ember.Route.extend({
model() {
  return this.get('store').findAll('show');

    // return [{
    //   id: 'limitless',
    //   title: 'Limitless',
    //   producer: 'Neil Burger',
    //   watchstatus:'Not watched',
    //   rating: 5,
    //   image: 'https://upload.wikimedia.org/wikipedia/en/1/17/Limitless_Poster.jpg',
    //   description: 'Based on novel The Dark Fields by Alan Glynn.'
    // }, {
    //   id: 'phenomenon',
    //   title: 'Phenomenon',
    //   producer: 'Barbara Boyle',
    //   rating: 4,
    //   watchstatus:'Watched some of it',
    //   image: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Phenomenonposter.jpg',
    //   description: 'Story about a village boy with super human abilities.'

    // }, {
    //   id: 'superbad',
    //   title: 'Superbad',
    //   producer: 'Judd Apatow',
    //   rating: 4,
    //   watchstatus:'Finished watching',
    //   image: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Superbad_Poster.png',
    //   description: 'Teen comedy about two highschool kids wanting to party before college.'

    // }];
  }

});
