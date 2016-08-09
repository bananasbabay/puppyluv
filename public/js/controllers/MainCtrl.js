angular.module('MainController', ['OwnerService']).controller('MainCtrl', function($scope, Owner) {

    $scope.tagline = '';
    
    $scope.go = function ( path ) {
  $location.path( path );
};

  Owner.get().then(function(data){
      // console.log(data)
      $scope.owners = data.data;
    })

  $scope.delete = function(){
    Owner.delete(this.owner._id);
  }
});