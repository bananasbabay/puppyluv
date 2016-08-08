angular.module('signup',[])

..config(function($routeProvider){
  $routeProvider
  // the state will go on the html that you want route the user.
  .when('/signup', {
    templateUrl: 'views/signup.html',
    controller: function($scope, $http, $location, $window){
        
        // create user and http requestf
        $scope.submit = function(usern, passwrd){
          $scope.newUser = {
            username: usern,
            password: passwrd,
          }
          console.log('New user', $scope.newUser)
          $http({
            method: 'POST',
            url: '/signup',
            contentType: 'application/json',
            data: $scope.newUser
          })
          .then(function(resp){
            console.log('this is resp++++',resp)
            $window.localStorage.setItem('puppylove', resp.data.token); 
            $location.path('/home')
          })
          .catch(function(error){
            console.log(error)
          });

          $scope.username = '';
          $scope.password = '';
        }
    },
    controllerAs: 'SignupCtrl'
  })


})