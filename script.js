var myApp= angular.module("myApp", []);

myApp.controller("MyController", function($scope){
	
	$scope.submit= function subtotal(a, b){
			var subtotal = a *(1+ b);
			return subtotal;
			};
		function tip(a,b){
			var tip = a * b/100;
			return tip;
			};
		function total (a,b){
			return a +b;
		};
});