angular.module('fishTank')
.controller('PostsCtrl', [
    '$scope',
    'postsFactory',
    'post',
    function($scope, postsFactory, post){
      $scope.post = post;
      $scope.incrementUpvotes = function(comment) {
        comment.upvotes += 1;
      }

      $scope.addComment = function(){
        $scope.post.comments.push({
          body: $scope.body,
          author: 'user',
          upvotes: 0
        });
        $scope.body = '';
      };
  }]);