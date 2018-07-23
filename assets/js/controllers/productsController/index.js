app.controller('productsControl', function($scope, $http) {
	$http.get('assets/php/home/products/search/index.php').then((response) => {
		$scope.products = response.data;
	}, (response) => {

	});
	$scope.products = [{
		name: 'Tal producto',
		price: '19',
		bs_price: '220000',
		img: 'https://qph.fs.quoracdn.net/main-qimg-16b8fe5f4274e2baf68c2b226a17b2c5',
		link: '/product?id=23'
	},{
		name: 'Tal producto 2',
		price: '32',
		bs_price: '440000',
		img: 'https://qph.fs.quoracdn.net/main-qimg-16b8fe5f4274e2baf68c2b226a17b2c5',
		link: '/product?id=23'
	}, {
		name: 'Tal producto 2',
		price: '32',
		bs_price: '440000',
		img: 'https://qph.fs.quoracdn.net/main-qimg-16b8fe5f4274e2baf68c2b226a17b2c5',
		link: '/product?id=23'
	}, {
		name: 'Tal producto 2',
		price: '32',
		bs_price: '440000',
		img: 'https://qph.fs.quoracdn.net/main-qimg-16b8fe5f4274e2baf68c2b226a17b2c5',
		link: '/product?id=23'
	}, {
		name: 'Tal producto 2',
		price: '32',
		bs_price: '440000',
		img: 'https://qph.fs.quoracdn.net/main-qimg-16b8fe5f4274e2baf68c2b226a17b2c5',
		link: '/product?id=23'
	}, {
		name: 'Tal producto 2',
		price: '32',
		bs_price: '440000',
		img: 'https://qph.fs.quoracdn.net/main-qimg-16b8fe5f4274e2baf68c2b226a17b2c5',
		link: '/product?id=23'
	}, {
		name: 'Tal producto 2',
		price: '32',
		bs_price: '440000',
		img: 'https://qph.fs.quoracdn.net/main-qimg-16b8fe5f4274e2baf68c2b226a17b2c5',
		link: '/product?id=23'
	}];

	$scope.setButton = (e) => {
		var item = document.getElementsByClassName('checkout')[];
		item.style.visibility = 'visible';
		console.log(e);
	};
	$scope.hideButton = (e) => {
		var item = document.getElementsByClassName('checkout')[];
		item.style.visibility = 'hidden';
		console.log(e);
	};
});