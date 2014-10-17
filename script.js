var myApp= angular.module("myApp", []);

myApp.controller("MyController", function($scope){

	$scope.submit= function(){
			$scope.subtotal = function(a, b){
			a *(1+ b);
			console.log("workoinf")
			return subtotal;
		};

			$scope.tip = function(a,b){
			a * b/100;
			return tip;
			};

			$scope.total= function (subtotal,tip){
			return a +b;
		};
	}

});





// $scope.totTip={};
	
	// $scope.submit= function (a, b){
	// 		 var subtotal = function(a, b){
	// 		a *(1+ b);
	// 		console.log("workoinf")
	// 		return subtotal;
	// 	};
		
	// 		$scope.tip = function(a,b){
	// 		a * b/100;
	// 		return tip;
	// 		};

	// 		$scope.total= function (a,b){
	// 		return a +b;
	// 	};
	// }


	
		// function totalTip (tip){
		// tip.push($scope.totTip);
		// return $scope.totTip;

		// };

// // 	$scope.submit= 
// 		function subtotal(a, b){
// 			var subtotal = a *(1+ b);
// 			console.log("workoinf")
// 			return subtotal;
// 			};
// 		function tip(a,b){
// 			var tip = a * b/100;
// 			return tip;
// 			};
// 		function total (a,b){
// 			return a +b;
// 		};

// 		function totalTip (tip){
// 		tip.push($scope.totTip);
// 		return $scope.totTip;

// 		};
// });