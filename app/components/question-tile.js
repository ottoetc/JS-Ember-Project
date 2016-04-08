import Ember from 'ember';

export default Ember.Component.extend({
  authorQuestion: Ember.computed('question.author', 'question.content', function() {
    return this.get('question.author') + ' asks: ' + this.get('question.content');
  })
});
