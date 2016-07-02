angular.module('fishTank')
.controller('PostsCtrl', [
    '$scope',
    'postsFactory',
    'post',
    function($scope, postsFactory, post){
      $scope.post = post;
      $scope.incrementUpvotes = function(comment) {
        postsFactory.upvoteComment(post, comment);
      };

      $scope.addComment = function(){
        if($scope.body === ''){return;}
        postsFactory.addComment(post.id, {
          body: $scope.body,
          author: 'user'
        }).success(function(comment) {
          $scope.post.comments.push(comment)
        });
        $scope.body = '';
      };
  }]);