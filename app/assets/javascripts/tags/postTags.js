function postTags(postsFactory){
  return {
    restrict: "E",
    replace: true,
    link: function(scope, elem, attrs){
      var postId = attrs.ngData
      postsFactory.get(postId).then(function(data){
        var postTags = data.tags;

        $('div#tags-'+ postId).tagsinput({
          allowDuplicates: false,
            itemValue: 'id',
            itemText: 'label'
        });
          $("input.tags").tagsinput('items')
          $("div.bootstrap-tagsinput > input").hide()
        for(i = 0; i < postTags.length; i++) {
          var tag = postTags[i]
          $('div#tags-'+ postId).tagsinput('add', { id: tag['id'], label: tag['name'] });
        }
      })
    }
  }
}

angular
  .module('fishTank')
  .directive('postTags', ['postsFactory', postTags])