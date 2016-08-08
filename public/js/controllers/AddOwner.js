//declare your new module
angular.module('AddOwnerController', ['OwnerService'])
//add and label the controller
.controller('AddOwner', function($scope, Owner) {

  $scope.submit = function(){

    // collect user data
    var obj = {

    };

    // create it in our api
    Owner.create(obj)
  }

})