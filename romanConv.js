angular.module('myApp', []).controller('myController', function($scope){
	$scope.con = function(){
		var array = [
			["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
			["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
			["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
			["", "M", "MM", "MMM", "MMMM", "MMMMM"],
		];
		var n = $scope.val;
		if(n>5000){
			alert("The value is greater than 5000");
		}
		var a=0, count = 0;
		var conver = "";
		while(n!=0){
			a = n%10;
			conver = array[count][a] + conver;
			n /= 10;
	        n = parseInt(n);
			count++;
		}
		$scope.result = conver;
	}
});