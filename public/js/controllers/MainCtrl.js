angular.module('MainController', ['OwnerService']).controller('MainCtrl', function($scope, Owner) {

    $scope.tagline = '';

  Owner.get().then(function(data){
      // console.log(data)
      $scope.owners = data.data;
    })

});