angular.module('myApp').directive('helloWorld',function(){
	return {
		restrict: 'AEC',
		replace: true,
		template: '<h3>Hello World!</h3>'
	};
});