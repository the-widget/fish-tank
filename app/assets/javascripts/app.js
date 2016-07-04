angular
  .module('fishTank', ['ui.router', 'templates', 'Devise', 'ngMessages', 'ngAnimate'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    'AuthInterceptProvider',
    function($stateProvider, $urlRouterProvider, AuthInterceptProvider){
      AuthInterceptProvider.interceptAuth(true);
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
        })
        .state('login', {
          url: '/login',
          templateUrl: 'auth/_login.html',
          controller: 'AuthCtrl'
        })
        .state('register', {
          url: '/register',
          templateUrl: 'auth/_register.html',
          controller: 'AuthCtrl',
          onEnter: ['$state', 'Auth', function($state, Auth) {
            Auth.currentUser().then(function (){
            $state.go('home');
            })
          }]
        })
        .state('about', {
          url: '/about',
          templateUrl: 'home/_about.html'
        })
        .state('contact', {
          url: '/contact',
          templateUrl: 'home/_contact.html'
        });

      $urlRouterProvider.otherwise('home');
    }])

  

  

  