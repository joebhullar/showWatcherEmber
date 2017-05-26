import Ember from 'ember';


const watchStatusTypes = [
  'Watched some of it',
  'Finished watching',
  'Watched'
];

export function watchStatusType([watchstatus]) {

	if (watchStatusTypes.includes(watchstatus)) {
    	return 'Watched';
  		}

  return 'Notwatched';
}

export default Ember.Helper.helper(watchStatusType);
