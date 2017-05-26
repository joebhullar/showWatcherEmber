import Ember from 'ember';

export default Ember.Component.extend({
    isWide: false,
    actions: {
        		toggleImageSize() {
            							this.toggleProperty('isWide');
        				  		  },
        		selectOnlyThis(id) {
				        			    for (var i = 1;i <= 3; i++)
				    					 {
				        						document.getElementById("Status" + i).checked = false;
				    					 }
				    					 document.getElementById(id).checked = true;
        						    }		  
  			 }

});
