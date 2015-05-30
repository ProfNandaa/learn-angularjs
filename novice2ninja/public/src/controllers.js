angular.module('myApp',[])
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
	});