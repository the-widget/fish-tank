angular
  .module('fishTank', ['ui.router', 'templates', 'Devise'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'home/_home.html',
          controller: 'MainCtrl',
          resolve: {
            postPromise: ['postsFactory', function(posts){
              return posts.getAll();
            }]
          }
        })
        .state('posts', {
          url: '/posts/{id}',
          templateUrl: 'posts/_posts.html',
          controller: 'PostsCtrl',
          resolve: {
            post:['$stateParams', 'postsFactory', function($stateParams, postsFactory){
              return postsFactory.get($stateParams.id);
            }]
          }
        });

      $urlRouterProvider.otherwise('home');
    }])

  

  

  