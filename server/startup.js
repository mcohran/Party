Meteor.startup(function(){
	if (Parties.find({}).count()==0){
		
		Parties.insert({school:"Brandeis", 
						where:"Farber 101", 
						when:"4/28/15 10:00pm"});
						
		Parties.insert({school:"Tufts", 
						where:"Student Center 101", 
						when:"4/29/15 10:00pm"});
						
		Parties.insert({school:"Wellesley College", 
						where:"main Gym", 
						when:"4/30/15 10:00pm"});


		 
	}
	
});
