angular.module('myApp').directive('helloWorld',function(){
	return {
		restrict: 'AEC',
		replace: true,
		template: '<h3 ng-click="clearMessage()">Hello World {{message}}</h3>',
		link: function(scope,elem,attrs){
			scope.$watch('message',function(value){
				console.log('Message changed');
			});

			scope.clearMessage = function(){
				scope.message = '';
			}

			elem.bind('mouseover',function(){
				elem.css('cursor','pointer');
			});
		}
	};
})
.directive('transcludeDirective',function(){
	return {
		transclude: 'element',
		scope: {},
		restrict: 'AE',
		replace: true,
		link: function(scope,elem,attrs,ctrl,transclude){
			transclude(function(clone){
				//'clone' is the clone of the directive element
				clone.css('background-color','yellow');
				elem.after(clone);
			});
		},
		template:'<div ng-transclude></div>'
	}
})
.directive("starRating", function() {
  return {
    restrict : "EA",
    template : "<ul class='rating' ng-class='{readonly: readonly}'>" +
               "  <li ng-repeat='star in stars' ng-class='star' ng-click='toggle($index)'>" +
               "    <i class='fa fa-star'></i>" + //&#9733
               "  </li>" +
               "</ul>",
    scope : {
      ratingValue : "=ngModel",
      max : "=?", //optional: default is 5
      onRatingSelected : "&?",
      readonly: "=?"
    },
    link : function(scope, elem, attrs) {
      if (scope.max == undefined) { scope.max = 5; }
      function updateStars() {
        scope.stars = [];
        for (var i = 0; i < scope.max; i++) {
          scope.stars.push({
            filled : i < scope.ratingValue
          });
        }
      };
      scope.toggle = function(index) {
        if (scope.readonly == undefined || scope.readonly == false){
          scope.ratingValue = index + 1;
          scope.onRatingSelected({
            rating: index + 1
          });
        }
      };
      scope.$watch("ratingValue", function(oldVal, newVal) {
        if (newVal) { updateStars(); }
      });
    }
  };
});