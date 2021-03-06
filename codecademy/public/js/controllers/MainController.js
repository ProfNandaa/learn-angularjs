app.controller('MainController',
    ['$scope',function($scope){
      $scope.title = "Best Books";
      $scope.promo = "Get the best books the world can offer";
      $scope.products = [
       	{
          name: 'The Book of Trees',
          price: 19,
          pubdate: new Date('2014','03','08'),
          cover: 'img/the-book-of-trees.jpg',
          likes: 0,
          dislikes: 0
      	},
        {
          name: 'Program or be Programmed',
          price: 8,
          pubdate: new Date('2013','08','01'),
          cover: 'img/program-or-be-programmed.jpg',
          likes: 0,
          dislikes: 0
      	},
        {
          name: 'JavaScript: The Better Parts',
          price: 8,
          pubdate: new Date('2014','08','01'),
          cover: 'img/program-or-be-programmed.jpg',
          likes: 0,
          dislikes: 0
      	},
        {
          name: 'Introduction to ES6',
          price: 8,
          pubdate: new Date('2015','08','01'),
          cover: 'img/program-or-be-programmed.jpg',
          likes: 0,
          dislikes: 0
      	},
        ];
      
      $scope.plusOne = function(index){
      	$scope.products[index].likes += 1;
      };
      $scope.minusOne = function(index){
      	$scope.products[index].dislikes += 1;
      };
      
    }]);

//part 2

app.controller('MainController', ['$scope', function($scope) {
  $scope.apps = [
    {
    icon: 'img/move.jpg',
    title: 'MOVE',
    developer: 'MOVE, Inc.',
    price: 0.99
  },
	{
    icon: 'img/shutterbugg.jpg',
    title: 'Shutterbugg',
    developer: 'Chico Dusty',
    price: 2.99
  },
  {
    icon: 'img/gameboard.jpg',
    title: 'Gameboard',
    developer: 'Armando P.',
    price: 1.99
  },
  {
    icon: 'img/forecast.jpg',
    title: 'Forecast',
    developer: 'Forecast',
    price: 1.99
  }
  ];
  
}]);

//part 3 - Services
app.controller('MainController', ['$scope', 'forecast', function($scope, forecast) {
  forecast.success(function(data){
    $scope.fiveDay = data;
  });
}]);

