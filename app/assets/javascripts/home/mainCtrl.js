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
        if(!$scope.title || $scope.title === '') {$scope.error = "Title can't be blank"; return;}
        
        postsFactory.create({
          title: $scope.title,
          link: $scope.link,
          upvotes: 0
        }).success(function(data){
          self.posts.push(data);
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

      var errors = function() {
        $scope.$on('devise:unauthorized', function(event, xhr, deferred) {
          $scope.error = xhr.data.error
          setTimeout(function(){ $('p.auth-error').fadeOut();}, 5000);
          setTimeout(function(){$('p.auth-error').show();}, 10);
        });
      }

    }
  ])


