var app = angular.module('puppyLove', [
  'ngRoute',
  'OwnerService',
  'ngMaterial',
  'ngAnimate',
  'ngAria',
  'ngMessages',
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
    .when('/dogs', {
       templateUrl: 'views/dogs.html',
        controller: 'DogController'
    })
    .otherwise({
     redirectTo: '/'
    })

}]);