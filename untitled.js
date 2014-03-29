App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

App.Store=DS.Store.extend({
	revision: 12,
	adapter: 'DS.FixtureAdapter'
});

App.Router.map(function(){
	this.resource('about');
	this.resource('posts');
})

App.Post = DS.Model.extend({
	title: DS.attr('string'),
	author: DS.attr('string'),
	intro: DS.attr('string'),
	extended DS.attr('string'),
	publishment: DS.attr('date')
});


<script type="text/x-handlebars" id="posts">
    <div class="container-fluid">
    <div class="row-fluid">
    <div class="span3">
    <table class ="table">
    <thread>
      <tr><th>Recent Posts</th></tr>
    </thread>
    {{#each}}
    <tr><td>
    <a href='#'>Title <small class='muted'>by Author</small></a>
    </tr></td>
    {{/each}}
    </table>
    </div>
    <div class="span9">
      {{outlet}}
    </div>
    </div>
    </div>
  </script>
