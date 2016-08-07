var app = angular.module('puppyLove', [
  'ngRoute',
  'OwnerService',
  'MainController'
  ])

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider

    // home page
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
    })
    .when('/owners', {
        templateUrl: 'views/owners.html',
        controller: 'OwnerController'
    })

}]);