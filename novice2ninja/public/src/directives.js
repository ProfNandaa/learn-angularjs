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
});