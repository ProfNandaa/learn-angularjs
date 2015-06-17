app.controller('MainController',
    ['$scope',function($scope){
      $scope.title = "Best Books";
      $scope.promo = "Get the best books the world can offer";
      $scope.product = {
        name: 'The Book of Trees',
        price: 19
      }
    }]);