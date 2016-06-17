/**
create group routes, so every router has prefix radiegtya
*/

//if user is logged in, change home
 FlowRouter.route('/',{
 	name :'home',
 	action(){
 		if(Meteor.userId()){
 			FlowRouter.go('resources');
 		}
 		BlazeLayout.render('HomeLayout');
 	} 
 });


var resourceRoutes = FlowRouter.group({
    prefix: '/resources',
    name: 'resourcePath',
});


resourceRoutes.route('/',{
 	name :'resources',
 	action(){
 		BlazeLayout.render('MainLayout', {content: 'Resources'});
 	} 
 });

 resourceRoutes.route('/:id',{
 	name :'singleResource',
 	action(){
 		BlazeLayout.render('MainLayout', {content: 'ResourceSingle'});
 	} 
 });

var userRoutes = FlowRouter.group({
    prefix: '/user',
    name: 'userPath',
});

 userRoutes.route('/favorites',{
 	name :'favorites',
 	action(){
 		BlazeLayout.render('MainLayout', {content: 'Favorites'});
 	} 
 });

  userRoutes.route('/video',{
 	name :'videoRecord',
 	action(){
 		BlazeLayout.render('MainLayout', {content: 'VideoRecord'});
 	} 
 });






//checks only work in client-side
/*if (Meteor.isClient){
	Accounts.onLogin(function(){
		FlowRouter.go('resources');
	});

	Accounts.onLogout(function(){
		FlowRouter.go('home');
	});
}*/

/*//if no id, go directly to home

 FlowRouter.triggers.enter([function(context, redirect){
 	if(!Meteor.userId()){
 		FlowRouter.go('home');
 	}
 }]);


 //if user is logged in, change home
 FlowRouter.route('/logout',{
 	name :'logout',
 	action(){
 		Meteor.logout(function() {
      });
 	this.next();
 	} 
 });*/




/*
var adminRoutes = FlowRouter.groups({
	prefix: '/admin',
	name: 'admin'
});

/*adminRoutes.route('/users',
	)


//map to admin. say unauthorized if not in role
  FlowRouter.route('/admin/newUser',{
 	name :'newUser',
 	action(){
 		BlazeLayout.render('MainLayout', {main: 'NewUsers'});
 	} 
 });*/












