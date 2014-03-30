App = Ember.Application.create({});


App.Router.map(function(){
	this.resource("about");
});

App.IndexRoute = Ember.Route.extend({
	setupController: function(controller){
		controller.set('content',['red','yellow','blue']);
	}
});