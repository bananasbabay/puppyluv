//declare your new module
angular.module('AddOwnerController', ['OwnerService'])
//add and label the controller
.controller('AddOwner', function($scope, $http, Owner) {

  // empty object will contain user data
  $scope.owner = {};
  $scope.message = '';

  $scope.submitOwner = function(){
    Owner.create($scope.owner).success( function(){
    console.log('User created!')
      $scope.owner.firstName = '';
      $scope.owner.lastName = '';
      $scope.owner.age = '';
      $scope.owner.location = '';
      $scope.owner.favorite = '';
      $scope.owner.numberOfBreeds = '';
      $scope.owner.numberOfDogs = '';
      $scope.message = 'Form has been submitted!';
  });
  }
})