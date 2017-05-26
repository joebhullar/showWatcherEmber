export default function() {
 this.namespace = '/api';

  this.get('/shows', function() {
    return {
      data: [{
        type: 'shows',
        id: 'limitless',
        attributes: {
          title: 'Limitless',
          producer: 'Neil Burger',
          rating: 5,
          watchstatus:'Not Watched',
          image: 'https://upload.wikimedia.org/wikipedia/en/1/17/Limitless_Poster.jpg',
          description: 'Based on novel The Dark Fields by Alan Glynn.'
        }
      }, {
        type: 'shows',
        id: 'phenomenon',
        attributes: {
          title: 'Phenomenon',
          producer: 'Barbara Boyle',
          rating: 4,
          watchstatus:'Watched Some of it',
          image: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Phenomenonposter.jpg',
          description: 'Story about a village boy with super human abilities.'
        }
      }, {
        type: 'shows',
        id: 'superbad',
        attributes: {
          title: 'Superbad',
          producer: 'Judd Apatow',
          rating: 4,
          watchstatus:'Watched',
          image: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Superbad_Poster.png',
          description: 'Teen comedy about two highschool kids wanting to party before college.'

        }
      }]
    };
  });

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}
