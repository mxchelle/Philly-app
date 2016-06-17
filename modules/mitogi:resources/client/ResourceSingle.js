 
//template level subscription
 Template.ResourceSingle.onCreated(function (){
 	var self = this;
 	self.autorun(function(){
 		var id = FlowRouter.getParam('id');
 		self.subscribe('singleResource', id);
 	 });
 });

 Template.ResourceSingle.helpers({
 	resource: ()=> {
 		var id = FlowRouter.getParam('id');
 		return Resources.findOne({_id: id});
 	},
 	resourceId: ()=> {
 		return FlowRouter.getParam('id');
 	}
 });