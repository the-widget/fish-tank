function Welcome() {
    return {
        template: [
        '<div class="welcome">', '<div>','<h1>Fish Tank</h1>', '<p class="lead">Find a rock, settle in and swim around!!</p>',
        '</div>', '<div class="page-header"></div>', '</div>'
      ].join('')
      
    }
  }

angular
    .module('fishTank')
    .directive('welcome', Welcome);

