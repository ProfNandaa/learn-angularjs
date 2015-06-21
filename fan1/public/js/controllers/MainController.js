// app.controller("MainController",["$scope", "books",
//   function($scope, books){
//     // $scope.title = "Books Central";
//     // $scope.jumbotron = true;

//     $scope.books = books;

//   }]);

app.controller("MainController",
	["$scope", "$firebaseObject", "$routeParams", "books", 
	function($scope, $firebaseObject, $routeParams, books){
		$scope.books = books;

		$scope.addBook = function(){
			var pubdate = $scope.pubdate.split("/");
			pubdate = Math.round(new Date(pubdate[0],pubdate[1],pubdate[2]).getTime()/1000.0);

			console.log($scope.books);
			$scope.books.$add({
				title: $scope.title,
				author: $scope.author,
				price: $scope.price,
				rating: 1,
				pubdate: pubdate
			});
			//reset form
			//find better way with form Models
			$scope.title = $scope.author = $scope.price = $scope.pubdate = "";
		}

		$scope.id = $routeParams.id;
		var ref = new Firebase('https://fan1.firebaseio.com/books/' + 
										$routeParams.id);
		$scope.book = $firebaseObject(ref);
		var commentsRef = ref.child("comments");

		$scope.comments = $firebaseObject(commentsRef);

		$scope.addComment = function(){
			commentsRef.push({comment: $scope.comment});
			$scope.comment = "";
		}

		$scope.ratings = function(){
			var a = new Array();
			for(var i = 1; i <= 5; i++){
				a.push(i);
			}
			return a;
		}();

		$scope.rate = function(id,rating) {
		   // console.log("Rating selected: "+ id + " / " + rating);
		   ref.update({rating: rating});
		};
	}

]);