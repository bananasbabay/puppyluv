angular.module('OwnerService', []).factory('Owner', ['$http', function($http) {

    return {
        // call to get all owners
        get : function() {
            return $http.get('/api/owners');
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new owner
        create : function(ownerData) {
            return $http.post('/api/owners', ownerData);
        },

        // call to DELETE a owner
        delete : function(id) {
            return $http.delete('/api/owners/' + id);
        }
    }       

}]);