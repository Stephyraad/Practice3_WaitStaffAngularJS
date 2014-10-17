var myApp= angular.module("myApp", []);

myApp.controller("MyController", function($scope){
	$scope.mealCount=[];
	


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
		$scope.z= $scope.total($scope.x, $scope.y);

		$scope.a= parseFloat($scope.totTip);


		$scope.mealCount[$scope.mealCount.length]="0";
		$scope.b = $scope.mealCount.length;

	}


	var tipArray=[];
	$scope.totTip=0;

	tipArray.push($scope.y);
	for( var i=0;  i<tipArray.length; i++){
		$scope.totTip +=tipArray[i];
		return $scope.totTip;	
	};

	//  function addTip (totTip, tipArray){
	// 	for( var i=0;  i<tipArray.length; i++){
	// 	$scope.totTip +=tipArray[i];
	// 	return $scope.totTip;
	// 	};
	// };


	$scope.reset= function(){
		$scope.x=null;
		$scope.y= null;
		$scope.z=null;
	}


	$scope.resetTwo= function(){

		$scope.x=null;
		$scope.y= null;
		$scope.z=null;
		
		// $scope.totTip=0;
		// var tipArray=[];
		// $scope.a=null;

		$scope.mealCount=[];
		$scope.b=null;
	}


	


});

// NG INIT 
