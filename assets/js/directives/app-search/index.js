var app = angular.module('core',['ngRoute']);
app.directive('appSearch', function() {
	return {
		restrict: 'E',
		scope: {
			info: '='
		},
		templateUrl: 'assets/templates/appSearch/index.html'
	}
});