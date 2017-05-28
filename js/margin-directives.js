(function(){
	var app = angular.module('pageControl', ['ngStorage']);

	/* ticketFood = [
		{
			nav = X
			prod = Y
		},
		...
	] */

	/* ticketDrink = [
		{
			nav = X
			prod = Y
			drink = Z
		}
	]
	*/

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
					"img": "../public/img/tortas/1.jpg",
					"ingredientes": [
						{
							"nombre": "Chile del que pica",
						},
						{
							"nombre": "Lechuga",
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
					"nombre": "Torta de lomo",
					"precio": "80",
					"descripcion": "lorem ipsum",
					"img": "../public/img/tortas/2.jpg",
					"ingredientes": [
						{
							"nombre": "Lechuga",
						},
						{
							"nombre": "Cebolla",
						},
						{
							"nombre": "Aguacate",
						},
						{
							"nombre": "Mayonesa",	
						}
					]
				},
				{
					"ID": "2",
					"nombre": "Torta de bistek",
					"precio": "150",
					"descripcion": "lorem ipsum",
					"img": "../public/img/tortas/3.jpg",
					"ingredientes": [
						{
							"nombre": "Repollo",
						},
						{
							"nombre": "Cebolla",
						},
						{
							"nombre": "Cilantro",
						},
						{
							"nombre": "Tomate",
						}
					]
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

	app.controller('menuDisplayController', function($scope, $sessionStorage){
		this.menu = menu1;

		this.ticketFood = [];
		this.ticketDrink = [];

		this.navSel = 0;

		this.addingPosition = 0;

		this.navSelected = function(index){
			this.navSel = index;
		}

		this.prodSelected = function(index){
			this.prodSel = index;
		}

		this.foodAdd = function(item){
			this.ticketFood.push({
				"nav": item[0],
				"prod": item[1]
			});

			this.saveData();
		}

		this.drinkAdd = function(item){
			if(item[3] > 0){
				if(!this.drinkInTicket(item[1], item[2])){
					this.ticketDrink.push({
						"nav": item[0],
						"prod": item[1],
						"drink": item[2],
						"cant": item[3]
					});
				} else {
					this.ticketDrink[this.addingPosition].cant = item[3];
				}
				this.saveData();

			} else {
				alert("Ingrese una cantidad antes de hacer su pedido");
			}
		}

		this.drinkInTicket = function(number1, number2){
			for (var i = 0; i < this.ticketDrink.length; i++) {
				if(this.ticketDrink[i].prod == number1 && this.ticketDrink[i].drink == number2){
					this.addingPosition = i;
					return true;
				}
			}
			return false;
		}

		this.saveData = function(){
			var aux = [];
			if(sessionStorage.getItem('ticketFood')){
				aux = JSON.parse(sessionStorage.getItem("ticketFood"));
			}
			for (var i = 0; i < this.ticketFood.length; i++) {
				aux.push({
					"nav": this.ticketFood[i].nav,
					"prod": this.ticketFood[i].prod
				});
			}
			sessionStorage.setItem("ticketFood", JSON.stringify(aux));

			sessionStorage.setItem("ticketDrink", JSON.stringify(this.ticketDrink));
		}

		this.initializeDrink = function(){
			this.ticketDrink = JSON.parse(sessionStorage.getItem("ticketDrink"));
			if(this.ticketDrink == null){
				this.ticketDrink = [];
			}
		}

		this.initializeDrink();
	});

	app.controller('ticketDisplayController', function($scope, $sessionStorage){

		this.ticketFood = [];
		this.ticketDrink = [];

		this.loadData = function(){
			this.ticketDrink = JSON.parse(sessionStorage.getItem("ticketDrink"));
			this.ticketFood = JSON.parse(sessionStorage.getItem("ticketFood"));
		}

		this.loadData();
	});
})();