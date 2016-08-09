angular.module('OwnerService', []).factory('Owner', ['$http', function($http) {

  return {
    // call to get all owners
    get : function() {
      return $http.get('/api/owners');
    },
    // call to create the owner
    create : function(ownerData) {
      return $http.post('/api/owners', ownerData);
    },

    // call to DELETE a owner
    delete : function(id) {
      return $http.delete('/api/owners/' + id);
    }
  }       

}]);