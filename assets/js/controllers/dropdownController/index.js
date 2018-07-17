app.controller('dropdownControl', function($scope) {
	$scope.drop = function() {
		var list = document.getElementsByClassName('dropdown')[0];
		if(list.style.visibility == 'hidden') {
			list.style.visibility = 'visible';
			list.style.height = '7em';
		} else {
			list.style.visibility = 'hidden';
			list.style.height = '0em';
		}
	};

});