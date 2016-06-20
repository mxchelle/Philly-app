
//set publish here
Meteor.publish('resources', function(){
	return Resources.find({});
});

Meteor.publish('singleResource', function(id){
	//check(id, String);
	return Resources.find({_id: id});
});

Meteor.publish('singleFavorite', function(userId, resourceId){
	//check(id, String);
	return Favorites.find({userId: userId, resourceId: resourceId});
});


Meteor.publish('allUsers', function(id){
	return Meteor.users.find({});
});

/*Meteor.publish('myFavorites', function(id){
	check(id, String);
	return Resources.find({_id: Meteor.userId()});
});*/


Meteor.publish("images", function (userId) {
  //check(userId, String);
  return Images.find();
});