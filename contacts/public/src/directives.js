angular.module('ContactsApp')
	.value('FieldTypes',
		{
			text: ['Text','should be text'],
			email: ['Email','should be email'],
			number: ['Number','should be number'],
			date: ['Date','should be date'],
			datetime: ['Datetime','should be datetime'],
			time: ['Time','should be time'],
			month: ['Month','should be month'],
			week: ['Week','should be week'],
			url: ['URL','should be URL'],
			tel: ['Phone Number','should be phone number'],
			color: ['Color','should be a color']
		}
	)
	.directive('formField',function($timeout,FieldTypes){
		return {
			restrict: 'EA',
			templateUrl: 'views/form-field.html',
			replace: true,
			scope: {
				record: '=',
				field: '@',
				live: '@',
				required: '@'
			},
			link: function($scope,element,attr){
				$scope.types = FieldTypes;
				$scope.remove = function(field){
					delete $scope.record[field];
					$scope.blurUpdate();
				};

				$scope.blurUpdate = function(){
					if($scope.live !== 'false'){
						$scope.record.$update(function(updatedRecord){
							$scope.record = updatedRecord;
						});
					}
				};

				var saveTimeout;
				$scope.update = function(){
					$timeout.cancel(saveTimeout);
					saveTimeout = $timeout($scope.blurUpdate,1000);
				}
			}
		}
	})