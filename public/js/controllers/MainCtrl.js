angular.module('MainController', ['OwnerService']).controller('MainCtrl', function($scope, Owner) {

    $scope.tagline = 'To the moon and back!';

    Owner.get().then(function(data){
      console.log(data)
      $scope.owners = data.data;
    })

});