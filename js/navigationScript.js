$(document).ready(function($) {
	
});

/* Angular JS */
var myApp = angular.module('portobuild', []);

myApp.controller('NavController', ['$scope', '$http', function($scope, $http) {
  $http.get('data/data.json').success(function(data) {
    $scope.navList = data;
  });
}]);

myApp.controller('UserController', ['$scope', '$http', function($scope, $http) {
  $http.get('data/user.json').success(function(data) {
    $scope.user = data;
  });
}]);