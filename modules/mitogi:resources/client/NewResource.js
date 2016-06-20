Template.NewResource.events({
	'click .fa-close' : function(){
		Session.set('newResource', false);
	}
});

 AutoForm.setDefaultTemplateForType("file", "upload_bootstrap");


 Template.NewResource.onCreated(function (){

 
    var hooksObject = {
      after: {
        insert: function(error, result) {
          if (error) {
            console.log("Insert Error:", error);
            Meteoris.Flash.set('error', 'Error inserting');
          } else {
            Meteoris.Flash.set('success', 'Successfully added');
            console.log("Document inserted:", result);
            FlowRouter.go('singleResource', {id: this.docId });
          }
        },
        update: function(error, result) {
           console.log("this: " + this._id);
          if (error) {
            console.log("Update Error:", error);
          } else {
            console.log("Document updated: " + result);
            FlowRouter.go('singleResource', {id: this.docId });
          }
        }
      }
    };
    
    AutoForm.addHooks("insertResourceForm", hooksObject);
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