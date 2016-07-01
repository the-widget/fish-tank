angular
  .module('fishTank', ['ui.router'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: '/home.html',
          controller: 'MainCtrl'
        })
        .state('posts', {
          url: '/posts/{id}',
          templateUrl: '/posts.html',
          controller: 'PostsCtrl'
        });

      $urlRouterProvider.otherwise('home');
    }])

  .factory('postsFactory', [function(){
    var o = {
      posts: []
    };
    return o;

  }])

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

  .controller('PostsCtrl', [
    '$scope',
    '$stateParams',
    'postsFactory',
    function($scope, $stateParams, postsFactory){
      $scope.post = postsFactory.posts[$stateParams.id];
    }]);