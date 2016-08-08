angular.module('NavController')
  .directive('spNavbar', function () {
    return {
      templateUrl: './views/navbar.html',
      restrict: 'E',
      controller: 'NavbarCtrl'
    };
  });