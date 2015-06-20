var app = angular.module("fan1",["firebase","ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
		.when("/add-book",{
			templateUrl: "/js/views/add-book.html",
			controller: "MainController"
		})
		.when("/",{
			templateUrl: "/js/views/book-list.html",
			controller: "MainController"
		});
})
