// app.controller("MainController",["$scope", "books",
//   function($scope, books){
//     // $scope.title = "Books Central";
//     // $scope.jumbotron = true;

//     $scope.books = books;

//   }]);

app.controller("MainController",["$scope", "books", 
	function($scope, books){
		$scope.books = books;

		$scope.addBook = function(){
			var pubdate = $scope.pubdate.split("/");
			pubdate = Math.round(new Date(pubdate[0],pubdate[1],pubdate[2]).getTime()/1000.0);

			console.log($scope.books);
			$scope.books.$add({
				title: $scope.title,
				author: $scope.author,
				price: $scope.price,
				rating: 0,
				pubdate: pubdate
			});

			//reset form
			//find better way with form Models
			$scope.title = $scope.author = $scope.price = $scope.pubdate = "";

		}
	}

]);