angular.module('login',[])
.config(function($stateProvider){
  $stateProvider
  // the state will go on the html that you want route the user.
  .state('login', {
    url: '/login',
    templateUrl: 'views/signin.html',
    controller: function($scope, $http, $location, $window){
        
      $scope.signin = function(username, password){
        $scope.user = {
          username: username,
          password: password
        };
          $http({
            method: 'POST',
            url: '/login',
            data: $scope.user
          }).then(function(res){
            $window.localStorage.setItem('puppylove.login', res.data.token);
            $location.path('/home')
        })
        .catch(function(error){
          console.log(error)
        });

        $scope.username = '';
        $scope.password = '';
      }
    },
    controllerAs: 'LoginCtrl'
  });
})