import DS from 'ember-data';

export default DS.Model.extend({
      title: DS.attr(),
      producer: DS.attr(),
      rating: DS.attr(),
      watchstatus: DS.attr(),
      image: DS.attr(),
      description: DS.attr()
});

