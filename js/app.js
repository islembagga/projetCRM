var myApp = angular.module("myApp",[]);

myApp.controller("myController", function($scope){
	console.log("in my controller ...");

	$scope.newUser = {};
	$scope.clickedUser = {};

	$scope.users = [
		{name:"islem", fname:"bagga", email:"islem.bagga@gmail.com"},
		{name:"user", fname:"f user", email:"f.user@gmail.com"}
	];

	$scope.saveUser = function(){
		$scope.users.push($scope.newUser);
		$scope.newUser = {};
	};

	$scope.selectUser = function(user){
		$scope.clickedUser = user;
	};

	$scope.updateUser = function(){

	};

	$scope.deleteUser = function(){
		$scope.users.splice($scope.users.indexOf($scope.clickedUser),1);
	};
});