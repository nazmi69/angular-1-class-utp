var app = angular.module("starterApp", ["ngRoute"])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/index', {
			templateUrl: '../mainpage.html',
			controller:  'MainCtrl'
		})
		.when('/contact', {
			templateUrl: '../contact.html',
			controller:  'ContactCtrl'
		})
		.when('/about', {
			templateUrl: '../about.html',
			controller:  'AboutCtrl'
		})
		.otherwise({redirectTo: '/index'})
}])

.controller('MainCtrl', [function(){
	console.log("This is the MainCtrl");
}])

.controller('ContactCtrl', [function(){
	console.log("This is the ContactCtrl");
}])

.controller('AboutCtrl', [function(){
	console.log("This is the AboutCtrl");
}])
