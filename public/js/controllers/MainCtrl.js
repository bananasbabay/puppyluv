angular.module('MainController', ['OwnerService']).controller('MainCtrl', function($scope, Owner) {

    $scope.tagline = '';

  Owner.get().then(function(data){
      // console.log(data)
      $scope.owners = data.data;
    })
  $scope.delete = function($index){
    // console.log(this);
    // call the delete service
    Owner.delete(this.owner._id);
    
    // remove the currently selected item from the dom
    $scope.owners.splice(this.$index,1);
  }
});