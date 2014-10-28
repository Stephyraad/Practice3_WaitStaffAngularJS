var myApp= angular.module("myApp", ["ngRoute"]);

myApp.config(function($routeProvider){
	$routeProvider.when("/", {
		templateUrl: "./home.html",
		controller: "HomeCtrl"
		}).when("/new-meal", {
			templateUrl: "./newmeal.html",
			controller: "MealCtrl"
		}).when("/my-earnings", {
			templateUrl: "./myearnings.html",
			controller: "EarningCtrl"
		});
	})
	.controller("HomeCtrl", function($scope){
		// empty for now
	})
	.controller("MealCtrl", function($scope){

	})
	.controller("EarningCtrl", function($scope){

	});


myApp.controller("MyController", function($scope){
	$scope.mealCount=[];
	$scope.x=0;
	$scope.y= 0;
	$scope.z=0;
	$scope.a =0;
	$scope.b=0;
	$scope.c=0;

	var tipArray=[];
	$scope.totTip=0;
	


	$scope.subtotal = function(a, b){
			console.log("workoinf")
			return a *(1+ b/100);;
	}

	$scope.tip= function(a,b){
		return a * b/100;
	}

	$scope.total= function(a,b){
		return a + b;
	}


	$scope.submit= function(){
		$scope.x = $scope.subtotal($scope.mealPrice, $scope.taxRate);
		$scope.y= $scope.tip($scope.mealPrice, $scope.tipPercent);
		$scope.z= $scope.total($scope.x, $scope.y)

		tipArray.push($scope.y);
	
		for( var i=0;  i<tipArray.length; i++){
		$scope.totTip +=tipArray[i];
		// return $scope.totTip;	
		};
		
		$scope.a= parseFloat($scope.totTip);
		

		$scope.mealCount[$scope.mealCount.length]="0";
		$scope.b = $scope.mealCount.length;

		$scope.c =($scope.a/$scope.b).toFixed(2);

	}

	//why when i add the .toFixed(2) to z it gives me undefined

	$scope.reset= function(){
		$scope.x=0;
		$scope.y= 0;
		$scope.z=0;
	}
	$scope.resetTwo= function(){

		$scope.mealPrice= null;
		$scope.taxRate=null;
		$scope.tipPercent=null;


		$scope.x=0;
		$scope.y= 0;
		$scope.z=0;

		$scope.a =0;
		$scope.b =0;
		$scope.c =0;
		var tipArray=[];
		

		$scope.mealCount=[];
		$scope.b=0;
	}
});

// NG INIT 
