angular
  .module('fishTank', [])
  .controller('MainCtrl', ['$scope', 
    function($scope){
      $scope.test = 'Hello world!';

      $scope.posts = [
      {title: 'post 1'},
      {title: 'post 2'},
      {title: 'post 3'},
      {title: 'post 4'},
      {title: 'post 5'}
      ];


    }
  ]);