Template.NewResource.events({
	'click .fa-close' : function(){
		Session.set('newResource', false);
	}
});


/*AutoForm.addHooks(
  ["insertResourceForm"],
  {
    before   : {
      method: CfsAutoForm.Hooks.beforeInsert
    },
    after    : {
      method: CfsAutoForm.Hooks.afterInsert
    }
  }
);*/