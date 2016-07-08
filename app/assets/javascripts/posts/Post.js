function Post(){
  return {
    templateUrl: 'posts/post.html'
  }
}

angular
  .module("fishTank")
  .directive("post", Post)
