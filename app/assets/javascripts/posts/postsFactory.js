angular.module('fishTank')
.factory('postsFactory', ['$http', function($http){
    var o = {
      posts: []
    };

  var updateVotes = function(post){
    return $http.get('/posts/' + post.id + '.json').then(function(res){
      post.upvotes = res.data.upvotes;
    })
  }
  
  o.getAll = function(){
    return $http.get('/posts.json').success(function(data){
      angular.copy(data, o.posts);
    });
  };

  o.create = function(post){
    return $http.post('/posts.json', post)
  };

  o.upvote = function(post) {
    return $http.put('/posts/' + post.id + '/upvote.json', post)
      .then(function(event, data){
        console.log(event);
      });
  };

  o.downvote = function(post) {
    return $http.put('/posts/' + post.id + '/downvote.json')
      .success(function(data){
        updateVotes(post);
      });
  };

  o.get = function(id){
    return $http.get('/posts/' + id + '.json').then(function(res){
      return res.data;
    });
  };

  o.addComment = function(id, comment) {
    return $http.post('/posts/' + id + '/comments.json', comment);
  };

  o.upvoteComment = function(post, comment) {
    return $http.put('/posts/' + post.id + '/comments/' + comment.id + '/upvote.json')
    .success(function(data){
      comment.upvotes += 1;
    });
  };

  o.downvoteComment = function(post, comment) {
    return $http.put('/posts/' + post.id + '/comments/' + comment.id + '/downvote.json')
    .success(function(data){
      comment.upvotes -= 1;
    });
  };

  return o;
}]);