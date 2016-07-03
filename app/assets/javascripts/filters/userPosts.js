function userPostsFilter() {
    return function (items, username) {
      return items.filter(function(item){
        return item.user.username === username;
      });
    };
}
 
angular
    .module('fishTank')
    .filter('userPostsFilter', userPostsFilter);
