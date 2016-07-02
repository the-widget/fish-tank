angular.module('fishTank')
.controller('PostsCtrl', [
    '$scope',
    '$stateParams',
    'postsFactory',
    function($scope, $stateParams, postsFactory){
      $scope.post = postsFactory.posts[$stateParams.id]
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