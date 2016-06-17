 
//template level subscription
 Template.Favorites.onCreated(function (){
 	var self = this;
 	self.autorun(function(){
 		self.subscribe('resources');
 	 });
 });

 Template.Favorites.helpers({
 	resources: ()=> {
 		return Resources.find({inFavorite: true}); //only with true toggle
 	}
 });