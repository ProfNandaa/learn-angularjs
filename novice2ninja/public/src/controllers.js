angular.module('myApp')
	.controller('FinanceController',function($scope){
		$scope.salary = 0;
		$scope.percentage = 0;
		$scope.result = function(){
			return $scope.salary * $scope.percentage * 0.01;
		};
	})
	.controller('GreetingController',function($scope){
		$scope.now = new Date();
		$scope.helloMessages = ['Hello','Bonjour','Hola','Ciao','Ola','Hallo'];
		$scope.greeting = $scope.helloMessages[0];
		$scope.getRandomHelloMessage = function(){
			$scope.greeting = $scope.helloMessages[parseInt(Math.random()
				* $scope.helloMessages.length)];
		};
		
	})
	.controller('SiteController',function($scope){
		$scope.publisher = 'SitePoint';
		$scope.type = "Web Development";
		$scope.name = 'Scope for SiteController';
	})
	.controller('BookController',function($scope){
		$scope.books = ['JumpStart HTML5','JumpStart CSS','JumpStart Responsive Web Design'];
		$scope.wishList = [];
		$scope.name = 'Scope for BookController';
		$scope.addToWishList = function(book){
			$scope.wishListCount++;
			$scope.wishList.push(book);
			console.log($scope.wishList);
		};
		$scope.wishListCount = 0;
		var unbindWatcher = $scope.$watch('wishListCount',function(newValue,oldValue){
			console.log('called ' + newValue + ' times');
			if(newValue==2){
				alert('Great! You have 2 items in your wish list. Time to buy what you love.');
				unbindWatcher();
			}
		});

		$scope.$watchCollection('books',function(newCol,oldCol){
			console.log("collection changed: "+ newCol);
		});

		$scope.addBook = function(book){
			$scope.books.push(book);
			$scope.item = "";
		}
	})
	.controller('UserController',function($scope,$log){
		$scope.users = [];
		$scope.user = {};
		$scope.user.country="KE";
		$scope.user.choice = "Tea";

		$scope.countries = [{
			id: 'US',
			desc: 'United States'
		},{
			id: 'GB',
			desc: 'United Kingdom'
		},{
			id: 'AU',
			desc: 'Australia'
		},{
			id: 'KE',
			desc: 'Kenya'
		}];

		$scope.addUser = function(){
			$log.info($scope.myform.firstname);
			if($scope.myform.$valid){
				var u = jQuery.extend({}, $scope.user);
				$scope.users.push(u);
			}
		}

	})
	.controller('PromiseController',['$scope','$q','$interval',
		function($scope,$q,$interval){
			// $scope.cancelRequest

			$scope.getPromise = function(){
				var i = 0;
				var deferred = $q.defer(); //creates a new deferred object

				var timer = $interval(function(){
					if(!! $scope.cancelRequest){
						//if cancel is requested from UI, reject the promise
						deferred.reject('Promise Rejected due to Cancellation');
						$interval.cancel(timer);
					}

					i = i + 1; //increment i each time

					if(i == 5){
						deferred.resolve('Counter has reached 5'); //once the 
							//value of i = 5, resolve promise
						$interval.cancel(timer); //make sure to cancel timer
					}
					else{
						deferred.notify('Counter has reached ' + i);
						//else, notify the client about the progress
					}
				}, 1000);

				return deferred.promise; //finally return the promise instance
			}

			$scope.getAsyncMessage = function(){
				var promise = $scope.getPromise(); //get hold of the promise instance

				promise.then(function(message){
					$scope.status = 'Resolved: ' + message;
				}, function(message){
					$scope.status = 'Rejected: ' + message;
				}, function(message){
					$scope.status = 'Notifying: ' + message;
				});
			}
		}])
	.controller('HttpController',function($scope,customService){
		$scope.getData = function(){
			customService.getData().then(function(data,status,config,headers){
				console.log('Response from server: ' + data);
				$scope.res = data;
				//called when response arrives from server
			},function(data,status,config,headers){
				console.log('Some error occured!'); //called in case
					//of error
			});
		}
	});