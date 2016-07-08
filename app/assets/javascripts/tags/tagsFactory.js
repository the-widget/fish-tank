angular.module('fishTank')
.factory('tagsFactory', ['$http', function($http){

    var o = {
      posts: []
    };

  o.create = function(post, tag){
    return $http.post('/posts/' + post.id + '/tags.json', tag)
  };

  return o;
}]);