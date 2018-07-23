app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'assets/templates/home/index.html'
	}).when('/favoritos', {
		templateUrl: 'assets/templates/favs/index.html'
	}).when('/ofertas', {
		templateUrl: 'assets/templates/offers/index.html'
	});
});