Template.add.events({
	"submit #addParty": function(event){
		console.log("In addParty");
		event.preventDefault(); // don't try to go to another page!
		var theSchool = $("#school").val();
		var theLocation = $("#where").val();
		var theTime =$("#when").val();
		Parties.insert({school:theSchool, 
				where:theLocation, 
				when:theTime});
		Router.go('showall');
	}
})