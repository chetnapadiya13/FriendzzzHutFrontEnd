var app = angular.module("myApp", [ "ngRoute" ]);
app.config(function($routeProvider) {
	console.log("In routeProvider");
	$routeProvider
		.when("/", {
			templateUrl : "index.jsp"
		})
		.when("/about", {
			templateUrl : "Template/about.html"
		})
		.when("/contact", {
			templateUrl : "Template/contact.html"
		})
		.when("/blog", {
			templateUrl : "c_Blog/Blog.html"
		})
		.when("/ViewBlog", {
			templateUrl : "c_Blog/ViewBlog.html"
		})
		.when("/forum", {
			templateUrl : "c_Forum/Forum.html"
		})
		
		.when("/signin", {
			templateUrl : "Template/signin.html"
		})
		.when("/signup", {
			templateUrl : "Template/signup.html"
		});
});