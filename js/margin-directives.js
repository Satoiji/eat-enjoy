(function(){
	var app = angular.module('pageControl', []);

	menu1 = [
		{
			"nombre": "Tacos",
			"platillos": [
				{
					"ID": "0",
					"nombre": "Tacos de bistek",
					"precio": "125",
					"descripcion": "5 tacos de bistek con doble tortilla",
					"img": "../public/img/tacos/1.jpg",
					"ingredientes": [
						{
							"nombre": "Cilantro",
						},
						{
							"nombre": "Cebolla",
						},
						{
							"nombre": "Aguacate",
						}
					]
				},
				{
					"ID": "1",
					"nombre": "Tacos al pastor",
					"precio": "80",
					"descripcion": "6 tacos al pastor con doble tortilla",
					"img": "../public/img/tacos/2.jpg",
					"ingredientes": [
						{
							"nombre": "Cilantro",
						},
						{
							"nombre": "Cebolla",
						}
					]
				},
				{
					"ID": "2",
					"nombre": "Tacos de alambre",
					"precio": "150",
					"descripcion": "Platillo preparado para tacos de alambre",
					"img": "../public/img/tacos/3.jpg",
					"ingredientes": [
						{
							"nombre": "Pimiento Morron",
						},
						{
							"nombre": "Cebolla",
						},
						{
							"nombre": "Queso",
						}
					]
				}
			]
		},
		{
			"nombre": "Tortas",
			"platillos": 
			[
				{
					"ID": "0",
					"nombre": "Torta ahogada",
					"precio": "90",
					"descripcion": "lorem ipsum",
					"img": "../public/img/tortas/1.jpg"
				},
				{
					"ID": "1",
					"nombre": "Torta de lomo",
					"precio": "80",
					"descripcion": "lorem ipsum",
					"img": "../public/img/tortas/2.jpg"
				},
				{
					"ID": "2",
					"nombre": "Torta de bistek",
					"precio": "150",
					"descripcion": "lorem ipsum",
					"img": "../public/img/tortas/3.jpg"
				}
			]
		},
		{
			"nombre": "Bebidas",
			"platillos": 
			[
				{
					"ID": "0",
					"nombre": "Refrescos",
					"precio": "20",
					"descripcion": "lorem ipsum",
					"img": "../public/img/bebidas/1.jpg",
					"types": [
						{
							"ID": "0",
							"nombre": "Coca Cola 355ml",
							"img": "/public/img/bebidas/refrescos/1.jpg"
						},
						{
							"ID": "1",
							"nombre": "Pepsi 355ml",
							"img": "/public/img/bebidas/refrescos/2.jpg"
						}
					]
				},
				{
					"ID": "1",
					"nombre": "Aguas Frescas",
					"precio": "15",
					"descripcion": "lorem ipsum",
					"img": "../public/img/bebidas/2.jpg",
					"types": [
						{
							"ID": "0",
							"nombre": "Limonada",
							"img": "/public/img/bebidas/aguas/1.jpg"
						},
						{
							"ID": "1",
							"nombre": "Horchata",
							"img": "/public/img/bebidas/aguas/2.jpg"
						}
					]
				}
			]
		}
	];


	app.controller('menuDisplayController', function(){

		this.menu = menu1;

		this.navSel = 0;

		this.navSelected = function(index){
			this.navSel = index;
		}

		this.prodSelected = function(index){
			this.prodSel = index;
		}

	});

	app.directive('headDefault', function(){
		return {
			restrict: 'E',
			templateUrl: '../public/directives/header.html'
		};
	});

	app.directive('footDefault', function(){
		return {
			restrict: 'E',
			templateUrl: '../public/directives/footer.html'
		};
	});


})();