 Template.FavoriteButton.onRendered(function (){
 	var self = this;
 	var resourceId = this.resourceId;
 	self.autorun(function(){
 		console.log(self);
 		self.subscribe('singleFavorite', Meteor.userId(), Template.instance().resourceId);
 	 });
 });

 Template.FavoriteButton.events({
    'click .toggle-favorite': function(event, template){
		//console.log(Meteor.call('checkFavorite', this.resourceId));
		console.log(Favorites.findOne({userId: Meteor.userId(), resourceId: this.resourceId}));
		Meteor.call('toggleFavorite', this.resourceId);
	}
});

Template.FavoriteButton.helpers({
    myFavorite:function() {
    	//console.log(Meteor.call('checkFavorite', this.resourceId));
    	
        return Meteor.call('checkFavorite', this.resourceId)

        //Favorites.findOne({resourceId: }); //MyCollection.findOne({});
    }
});





