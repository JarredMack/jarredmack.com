angular.module( 'jarredmack.about', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',

  'services.content'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'about', {
    url: '/about',
    views: {
      "main": {
        controller: 'AboutCtrl',
        templateUrl: 'about/about.tpl.html'
      }
    },
    data:{
        pageTitle: 'About Me',
        active: 'about'
    }
  })
  .state( 'about.page', {
    url: '/:page',
    views: {
      "main": {
        controller: 'AboutCtrl',
        templateUrl: 'about/about.tpl.html'
      }
    },
    data:{
        pageTitle: 'About Me',
        active: 'about'
    }
  });
})

.controller( 'AboutCtrl', ['$scope', '$state', 'ContentService', function AboutCtrl( $scope, $state, ContentService ) {
        $scope.pages = [];

        $scope.feeds = ['me', 'skills', 'preferences'];

        ContentService.fetchMany($scope.feeds)
            .then(function(pages) {
                $scope.pages = pages;

                var $page = _.find($scope.pages, { title: $state.params.page });

                if(angular.isUndefined($scope.pages[0].active)) {
                    if($page) {
                        $page.active = true;
                    } else {
                        $scope.pages[0].active = true;
                    }
                }
            });
}])

;
