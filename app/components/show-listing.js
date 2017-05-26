import Ember from 'ember';

export default Ember.Component.extend({
    isWide: false,
    actions: {
        		toggleImageSize() {
            							this.toggleProperty('isWide');
        				  		  },
        		func() {
				        			    

                    var val ="";
                    var type = document.getElementsByName("type");
                    if(type[0].checked)
                    {
                         val = type[0].value;

                    }
                    
                    else if(type[1].checked)
                    {
                         val = type[1].value;
                    }
                    
                    else if(type[2].checked)
                    {
                         val = type[2].value;
                    }
                    console.log(val);

                
        						    }		  
  			 }

});


