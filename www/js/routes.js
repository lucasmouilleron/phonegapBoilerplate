/////////////////////////////////////////////////////////////////////
// Routes
/////////////////////////////////////////////////////////////////////
define(["app"], function(app) {
	
	return app.config(["$routeProvider", function($routeProvider) {

		/////////////////////////////////////////////////////////////////////
		$routeProvider.when("/reddits", {
			templateUrl: "js/views/reddits.html",
			controller: "redditsController"
		});

		/////////////////////////////////////////////////////////////////////
		$routeProvider.when("/github/:anId", {
			templateUrl: "js/views/github.html",
			controller: "githubController"
		});

		/////////////////////////////////////////////////////////////////////
		$routeProvider.otherwise({redirectTo: "/reddits"});
		
	}]);

});
