import Ember from 'ember';

export function answerCount(params/*, hash*/) {
  var totalCount = params[0].get('answers.length');

  return totalCount;
}

export default Ember.Helper.helper(answerCount);
