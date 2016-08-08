angular.module('MainController', ['OwnerService']).controller('MainCtrl', function($scope, Owner) {

    $scope.tagline = '';

  Owner.get().then(function(data){
      console.log(data.data)
      $scope.owners = data.data;
    })

  $scope.delete = function(){
    Owner.delete(this.owner._id);
  }
})