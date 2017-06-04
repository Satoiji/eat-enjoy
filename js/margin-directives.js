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
							"ID": "0",
							"nombre": "Cilantro",
						},
						{
							"ID": "1",
							"nombre": "Cebolla",
						},
						{
							"ID": "2",
							"nombre": "Aguacate",
						}
					],
					"calorias": [
						{
							"nombre": "grasas totales",
							"cantidades": "130 g"
						},
						{
							"nombre": "grasas saturadas",
							"cantidades": "50 g"
						},
						{
							"nombre": "calorias",
							"cantidades": "90 g"
						},
						{
							"nombre": "valor energético",
							"cantidades": "6000 kJ"
						},
						{
							"nombre": "azucares",
							"cantidades": "100 g"
						},
						{
							"nombre": "proteinas",
							"cantidades": "50 g"
						},
						{
							"nombre": "sal",
							"cantidades": "6 g"
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
							"ID": "0",
							"nombre": "Cilantro",
						},
						{
							"ID": "1",
							"nombre": "Cebolla",
						}
					],
					"calorias": [
						{
							"nombre": "grasas totales",
							"cantidades": "100 g"
						},
						{
							"nombre": "grasas saturadas",
							"cantidades": "30 g"
						},
						{
							"nombre": "calorias",
							"cantidades": "70g"
						},
						{
							"nombre": "valor energético",
							"cantidades": "5000 kJ"
						},
						{
							"nombre": "azucares",
							"cantidades": "80 g"
						},
						{
							"nombre": "proteinas",
							"cantidades": "60 g"
						},
						{
							"nombre": "sal",
							"cantidades": "2 g"
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
							"ID": "0",
							"nombre": "Pimiento Morron",
						},
						{
							"ID": "1",
							"nombre": "Cebolla",
						},
						{
							"ID": "2",
							"nombre": "Queso",
						}
					],
					"calorias": [
						{
							"nombre": "grasas totales",
							"cantidades": "150 g"
						},
						{
							"nombre": "grasas saturadas",
							"cantidades": "100 g"
						},
						{
							"nombre": "calorias",
							"cantidades": "120 g"
						},
						{
							"nombre": "valor energético",
							"cantidades": "8500 kJ"
						},
						{
							"nombre": "azucares",
							"cantidades": "100 g"
						},
						{
							"nombre": "proteinas",
							"cantidades": "75 g"
						},
						{
							"nombre": "sal",
							"cantidades": "5 g"
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
							"ID": "0",
							"nombre": "Chile del que pica",
						},
						{
							"ID": "1",
							"nombre": "Lechuga",
						},
						{
							"ID": "2",
							"nombre": "Cebolla",
						},
						{
							"ID": "3",
							"nombre": "Aguacate",
						}
					],
					"calorias": [
						{
							"nombre": "grasas totales",
							"cantidades": "200 g"
						},
						{
							"nombre": "grasas saturadas",
							"cantidades": "120 g"
						},
						{
							"nombre": "calorias",
							"cantidades": "150 g"
						},
						{
							"nombre": "valor energético",
							"cantidades": "9000 kJ"
						},
						{
							"nombre": "azucares",
							"cantidades": "50 g"
						},
						{
							"nombre": "proteinas",
							"cantidades": "100 g"
						},
						{
							"nombre": "sal",
							"cantidades": "3 g"
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
							"ID": "0",
							"nombre": "Lechuga",
						},
						{
							"ID": "1",
							"nombre": "Cebolla",
						},
						{
							"ID": "2",
							"nombre": "Aguacate",
						},
						{
							"ID": "3",
							"nombre": "Mayonesa",	
						}
					],
					"calorias": [
						{
							"nombre": "grasas totales",
							"cantidades": "100 g"
						},
						{
							"nombre": "grasas saturadas",
							"cantidades": "30 g"
						},
						{
							"nombre": "calorias",
							"cantidades": "60 g"
						},
						{
							"nombre": "valor energético",
							"cantidades": "3000 kJ"
						},
						{
							"nombre": "azucares",
							"cantidades": "50 g"
						},
						{
							"nombre": "proteinas",
							"cantidades": "50 g"
						},
						{
							"nombre": "sal",
							"cantidades": "3 g"
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
							"ID": "0",
							"nombre": "Repollo",
						},
						{
							"ID": "1",
							"nombre": "Cebolla",
						},
						{
							"ID": "2",
							"nombre": "Cilantro",
						},
						{
							"ID": "3",
							"nombre": "Tomate",
						}
					],
					"calorias": [
						{
							"nombre": "grasas totales",
							"cantidades": "150 g"
						},
						{
							"nombre": "grasas saturadas",
							"cantidades": "130 g"
						},
						{
							"nombre": "calorias",
							"cantidades": "90 g"
						},
						{
							"nombre": "valor energético",
							"cantidades": "10000 kJ"
						},
						{
							"nombre": "azucares",
							"cantidades": "30 g"
						},
						{
							"nombre": "proteinas",
							"cantidades": "30 g"
						},
						{
							"nombre": "sal",
							"cantidades": "10 g"
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
							"nombre": "Coca Cola",
							"img": "/public/img/bebidas/refrescos/1.jpg"
						},
						{
							"ID": "1",
							"nombre": "Pepsi",
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

			alert("Cambios guardados, ¡revisa tu ticket para verlos!");
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
				alert("Cambios guardados, ¡revisa tu ticket para verlos!");
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
		this.totalCost = 0;

		this.loadData = function(){
			this.ticketDrink = JSON.parse(sessionStorage.getItem("ticketDrink"));
			this.ticketFood = JSON.parse(sessionStorage.getItem("ticketFood"));
		}

		this.loadData();

		this.total = function(){
			m = menu1;
			if(this.ticketFood){
				for (var i = 0; i < this.ticketFood.length; i++) {
					this.totalCost = this.totalCost + m[this.ticketFood[i].nav].platillos[this.ticketFood[i].prod].precio * 1;
				}
			}
			if (this.ticketDrink) {
				for (var i = 0; i < this.ticketDrink.length; i++) {
					this.totalCost = this.totalCost + m[this.ticketDrink[i].nav].platillos[this.ticketDrink[i].prod].precio * this.ticketDrink[i].cant;
				}
			}
		}

		this.foodDelete = function(nav,prod){
			for (var i = 0; i < this.ticketFood.length; i++) {
				if(this.ticketFood[i].nav == nav && this.ticketFood[i].prod == prod){
					this.ticketFood.splice(i,1);
				}
			}

			sessionStorage.setItem("ticketFood", JSON.stringify(this.ticketFood));
		}

		this.drinkDelete = function(nav,prod, drink){
			for (var i = 0; i < this.ticketDrink.length; i++) {
				if(this.ticketDrink[i].nav == nav && this.ticketDrink[i].prod == prod && this.ticketDrink[i].drink == drink){
					this.ticketDrink.splice(i,1);
				}
			}

			sessionStorage.setItem("ticketDrink", JSON.stringify(this.ticketDrink));
		}

		this.total();
	});

	app.controller('contentController', function(){
		this.show = false;

		this.toggle = function(){
			this.show = !this.show;
			if(this.show){
				document.getElementById("btnCaloria").innerHTML = "Ocultar contenido calorico";
			} else {
				document.getElementById("btnCaloria").innerHTML = "Mostrar contenido calorico";
			}
		}
	});
})();