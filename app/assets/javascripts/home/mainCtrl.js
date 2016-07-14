angular.module('fishTank')
.controller('MainCtrl', [
    '$scope',
    'postsFactory',
    'tagsFactory',
    'Auth',
    '$http',
    function($scope, postsFactory, tagsFactory, Auth, $http){
      var self = $scope; 
      Auth.currentUser().then(function(user){
        $scope.user = user;
      });
      self.posts = postsFactory.posts;
      self.showAddPost = function(){
        $("div.addPost").toggle();
      }
      self.showAddPost = function(){$('div.addPost').toggle()}
      self.addTag = function(){$('div.tag-input').after("<div class='form-group'> <input type='text' class='tag-inputs-" + $scope.tagInputs + " placeholder='Tag' ng-model='tags' size='19'></input></div>"); $scope.tagInputs++}
      $scope.tagInputs = 1
      self.addPost = function(){
        errors()
        if(!$scope.title || $scope.title === '') {$scope.error = "Title can't be blank"; return;}
        var tagsArray = Array.from($("input[class*='tag-inputs'").map(function(){return({name: $(this).val()})}))
        postsFactory.create({
          post: {
            title: $scope.title,
            link: $scope.link,
            upvotes: 0,
            tags_attributes: tagsArray
          }
        }).success(function(post){
          self.posts.push(post);
        });
        setTimeout(function(){ $(".form-group > input").each(function(){$(this).val('')});}, 50);
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