 
//template level subscription
 Template.Resources.onCreated(function (){
 	var self = this;
 	self.autorun(function(){
 		self.subscribe('resources');
 		//self.subscribe('myFavorites');
 		self.subscribe('favorites')
 	 });
 });

 Template.Resources.helpers({
 	resources: ()=> {
 		return Resources.find({});
 	}
 });


Template.Resources.events({
	'click .new-resource' : () =>{
		Session.set('newResource', true);
	}
});