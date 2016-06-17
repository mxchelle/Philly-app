Favorites = new Mongo.Collection('favorites');

Favorites.allow({
	//if you're signed in, you're able to
	insert : function(userId, doc){
		return !!Meteor.userId();
	},
	update : function(userId, doc){
		return !!Meteor.userId();
	},
	remove : function(userId, doc){
		return !!Meteor.userId();
	},

}); 

FavoriteSchema = new SimpleSchema({
	userId : {
		type: String,
		label: 'userId',
	},
	resourceId : {
		type: String,
		label: 'resourceId',
	}
});


Favorites.attachSchema(FavoriteSchema);


Meteor.methods({
	checkFavorite: function(resourceId){
		return !!Favorites.findOne({userId: Meteor.userId(), resourceId: resourceId});
	},
	addFavorite: function(userId, resourceId){
		Favorites.insert({userId: userId , resourceId: resourceId});
	},
	removeFavorite: function(userId, resourceId){
		Favorites.remove({userId: userId , resourceId: resourceId});
	},
	toggleFavorite: function(resourceId){
		var userId = Meteor.userId();
		if(Meteor.call('checkFavorite', resourceId)){
			Meteor.call('removeFavorite', userId, resourceId);
		}
		else{
			Meteor.call('addFavorite', userId, resourceId);
		}
	},

});