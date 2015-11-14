
//the angular app
var bnyBlogApp = angular.module('bnyBlogApp',['ngRoute','ngResource','ui.bootstrap']);

//definig resources
bnyBlogApp.config(function($routeProvider,$locationProvider){

	$routeProvider
	//article list view
	.when('/',{
		templateUrl: 'app/views/articleList.html',
		controller:  'articleListController'
	})
	.when('/articles',{
		templateUrl: 'app/views/articleList.html',
		controller:  'articleListController'
	})

	//article list view by tag
	.when('/articles/tag/:param',{
		templateUrl: 'app/views/articleList.html',
		controller:  'articleTagListController'
	})

	//article view
	.when('/article/:param',{
		templateUrl: 'app/views/article.html',
		controller:  'articleController'
	})
	
	//my mosted love software
	.when('/favs',{
		templateUrl: 'app/views/favs.html',
		controller:  'favsController'
	})

	//my projects
	.when('/projects',{
		templateUrl: 'app/views/projects.html'
	})

	//the about view
	.when('/about',{
		templateUrl: 'app/views/about.html',
		controller:  'aboutController'
	});

}); 


