angular
  .module('fishTank', [])
  .controller('MainCtrl', ['$scope', 
    function($scope){
      $scope.test = 'Hello world!';
    }]);