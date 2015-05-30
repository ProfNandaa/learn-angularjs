'use strict';

angular.module('myApp',[
	'myApp.controllers',
	'ngRoute'
	]);

angular.module('myApp').run(function($rootScope){
	$rootScope.title = "Famout Books";
	$rootScope.name = "Root Scope";
});

angular.module('myApp').config(function($routeProvider){
	$routeProvider.when('/view1',{
		templateUrl: 'views/partials/view1.html'
	}).when('/view2',{
		// controller: 'Controller2',
		templateUrl: 'views/partials/view2.html'
	}).otherwise({
		redirectTo: "/"
	});

	// $locationProvider.html5Mode(true); //activate HTML5 Mode
});
