angular.module('fishTank')
  .controller('AuthCtrl', [
  '$scope',
  '$state',
  'Auth',
  function($scope, $state, Auth){

      $scope.login = function(){
        errors();
        Auth.login($scope.user).then(function(){
          $state.go('home');  
        });
      };
  
      $scope.register = function(){
        errors();
        Auth.register($scope.user).then(function(){
          $state.go('home');
        });
      };

      var errors = function() {
        $scope.$on('devise:unauthorized', function(event, xhr, deferred) {
          $scope.error = xhr.data.error
        });
      }  
      
  }]);
