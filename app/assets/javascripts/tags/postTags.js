function postTags(postsFactory){
  return {
    link: function(scope, elem, attrs){
      postsFactory.get(attrs.ngData).then(function(data){
        var postTags = data.tags;

        $('div#tags-'+ attrs.ngData).tagsinput({
          allowDuplicates: false,
            itemValue: 'id',
            itemText: 'label'
        });

        $("div.bootstrap-tagsinput > input").hide()

        for(i = 0; i < postTags.length; i++) {
          var tag = postTags[i]
          $('div#tags-'+ attrs.ngData).tagsinput('add', { id: tag['id'], label: tag['name'] });
        }
      })
    }
  }
}

angular
  .module('fishTank')
  .directive('postTags', ['postsFactory', postTags])