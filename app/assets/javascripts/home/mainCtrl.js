angular.module('fishTank')
.controller('MainCtrl', [
    '$scope',
    'postsFactory',
    'Auth',
    function($scope, postsFactory, Auth){
      var self = $scope

      Auth.currentUser().then(function(user){
        $scope.user = user;
      });

      self.posts = postsFactory.posts;
      
      self.addPost = function(){
        if(!$scope.title || $scope.title === '') {return;}
        postsFactory.create({
          title: $scope.title,
          link: $scope.link,
          upvotes: 0
        });
        $scope.title = '';
        $scope.link = '';
      };

      self.incrementUpvotes = function(post) {
        postsFactory.upvote(post);
      };

      self.decrementUpvotes = function(post) {
        postsFactory.downvote(post);
      };
    }
  ])


