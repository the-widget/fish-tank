angular.module('fishTank')
.controller('MainCtrl', [
    '$scope', 
    'postsFactory',
    function($scope, postsFactory){
      $scope.posts = postsFactory.posts;

      $scope.addPost = function(){
        if(!$scope.title || $scope.title === '') {return;}
        postsFactory.create({
          title: $scope.title,
          link: $scope.link,
          upvotes: 0
        });
        $scope.title = '';
        $scope.link = '';
      };

      $scope.incrementUpvotes = function(post) {
        postsFactory.upvote(post);
      };

      $scope.decrementUpvotes = function(post) {
        postsFactory.downvote(post);
      };
    }
  ])