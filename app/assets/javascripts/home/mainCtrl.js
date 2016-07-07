angular.module('fishTank')
.controller('MainCtrl', [
    '$scope',
    'postsFactory',
    'Auth',
    '$http',
    function($scope, postsFactory, Auth, $http){
      var self = $scope; 
      Auth.currentUser().then(function(user){
        $scope.user = user;
      });
      self.posts = postsFactory.posts;
      self.showAddPost = function(){
        $("div.addPost").toggle();
      }
      self.showAddPost = function(){$('div.addPost').toggle()}
      self.addPost = function(){
        errors()
        if(!$scope.title || $scope.title === '') {return;}
        postsFactory.create({
          title: $scope.title,
          link: $scope.link,
          upvotes: 0
        });
        $scope.title = '';
        $scope.link = '';
      };

      self.openItem = function(event){
        console.log(event)
        event.preventDefault();
        // $window.open(url, '_blank');
      }

      self.incrementUpvotes = function(post) {
        postsFactory.upvote(post);
      };

      self.decrementUpvotes = function(post) {
        postsFactory.downvote(post);
      };

      var errors = function() {
        $scope.$on('devise:unauthorized', function(event, xhr, deferred) {
          $scope.error = xhr.data.error
        });
      }

    }
  ])


