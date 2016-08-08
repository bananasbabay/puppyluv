//declare your new module
angular.module('AddOwnerController', ['OwnerService'])
//add and label the controller
.controller('AddOwner', function($scope, $http, Owner) {

  // empty object will contain user data
  $scope.owner
  $scope.message = 'Submit your data';

  $scope.submit = function(){
    console.log($scope.owner)
    Owner.create($scope.owner);
  }

})