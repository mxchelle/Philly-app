Template.Resource.onCreated(function(){
	this.editMode = new ReactiveVar(false);
});

Template.Resource.helpers({
	editMode : function() {
		return Template.instance().editMode.get();
	}
});

Template.Resource.events({
	'click .fa-trash' : function() {
		Meteor.call('deleteResource', this._id);
	},
	'click .fa-pencil' : function(event, template) {
		template.editMode.set(!template.editMode.get());
	}

});
