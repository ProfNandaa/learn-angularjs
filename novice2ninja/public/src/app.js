// 'use strict';

angular.module('myApp', []);

// angular.module('myApp').run(function($rootScope){
// 	$rootScope.title = "Famout Books";
// 	$rootScope.name = "Root Scope";
// });

angular.module('myApp').service('customService',
	function($http){
		this.getData = function(){
			return $http({
				method:'GET',
				url:'/api'
			}); //this function returns a Promise
		}
	});

angular.module('myApp').factory('weatherService',
	function($http){
		return {
			getWeather: function(city,country){
				var query = city + ',' + country;
				return $http.get('http://api.openweathermap.org/data/2.5/weather',
				{
					params: {
						q: query
					}
				}).then(function(response){
					//returns a promise which is resolved with return 
					//value of success callback
					return response.data.weather[0].description;
				});
			}
		}
	});
