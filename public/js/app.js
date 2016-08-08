var app = angular.module('puppyLove', [
  'ngRoute',
  'OwnerService',
  'MainController',
  'AddOwnerController'
  ])

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider

    // home page
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainCtrl'
    })
    .when('/add', {
      templateUrl: 'views/addOwner.html',
      controller: 'AddOwner'
    })
    .when('/owners', {
      templateUrl: 'views/owners.html',
      controller: 'OwnerController'
    })

}]);