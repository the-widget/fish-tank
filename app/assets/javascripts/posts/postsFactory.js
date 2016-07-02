angular.module('fishTank')
.factory('postsFactory', ['$http', function($http){
    var o = {
      posts: []
    };
  
  o.getAll = function(){
    return $http.get('/posts.json').success(function(data){
      angular.copy(data, o.posts);
    });
  };

  return o;
}]);