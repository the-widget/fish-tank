.controller('MainCtrl', [
    '$scope', 
    'postsFactory',
    function($scope, postsFactory){
      $scope.posts = postsFactory.posts;

  //--> FILLER POSTS
      $scope.posts.push(
        {title: 'post 1', upvotes: 5, comments: [
          {author: 'Joe', body: 'Cool post!', upvotes: 0},
          {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
        ]},
        {title: 'post 2', upvotes: 2},
        {title: 'post 3', upvotes: 15},
        {title: 'post 4', upvotes: 9},
        {title: 'post 5', upvotes: 4}
      );
  //<--

      $scope.addPost = function(){
        if(!$scope.title || $scope.title === '') {return;}
        $scope.posts.push({
          title: $scope.title,
          link: $scope.link,
          upvotes: 0
        });
        $scope.title = '';
        $scope.link = '';
      }

      $scope.incrementUpvotes = function(post) {
        post.upvotes += 1;
      }
    }
  ])