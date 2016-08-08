//declare your new module
angular.module('AddOwnerController', ['OwnerService'])
//add and label the controller
.controller('AddOwner', function($scope, $http, Owner) {

  // empty object will contain user data
  $scope.owner
  $scope.message = '';

  $scope.submitOwner = function(){
    $scope.firstName = '';
    $scope.lastName = '';
    $scope.age = '';
    $scope.location = '';
    $scope.favorite = '';
    $scope.numberOfBreeds = '';
    $scope.numberOfDogs = '';
    Owner.create($scope.owner).success( function(){
      console.log('User created!');
      $scope.owner = {};
      $scope.message = 'Form has been submitted!';
    }).error(function(error){
      console.log(error);
    });
  }
});