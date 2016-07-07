angular.module('fishTank')
  .controller('NavCtrl', [
    '$scope',
    'Auth',
    function($scope, Auth){
      $scope.signedIn = Auth.isAuthenticated;
      $scope.logout = Auth.logout;

      Auth.currentUser().then(function(user){
        $scope.user = user;
      });

      $scope.$on('devise:new-registration', function(event, user){
        $('p.alert').html("Congratulations, You signed up!")
        setTimeout(function(){ $('p.alert').html(""); }, 3000);

        $scope.user = user;
      });

      $scope.$on('devise:login', function(event, user){
        $('p.alert').html("Logged in as " + user.username)
        setTimeout(function(){ $('p.alert').html(""); }, 3000);
        $scope.user = user;

      });

      $scope.$on('devise:logout', function(event, user){
        $('p.alert').html("You successfully signed out!")
        setTimeout(function(){ $('p.alert').html(""); }, 3000);
        $scope.user = {};
      });
    }]);