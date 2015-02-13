angular.module( 'jarredmack.about', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',

  'services.jmapi'
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

.controller( 'AboutCtrl', ['$scope', '$q', '$state', 'JMApi', function AboutCtrl( $scope, $q, $state, JMApi ) {
        //@TODO Move this stuff to a content service
        $scope.pages = [
            {
                title: 'about'
            },
            {
                title: 'skills'
            },
            {
                title: 'preferences'
            }
        ];

        var currentPage = _.find($scope.pages, { title: $state.params.page });
        if(currentPage) {
            currentPage.active = true;
        } else {
            $scope.pages[0].active = true;
        }

        var promises = [];
        _.forEach($scope.pages, function(page) {
            promises.push(JMApi.get('content', page.title));
        });

        $q.all(promises)
            .then(function(response) {
                _.forEach($scope.pages, function(page, key) {
                    var data = _.find(response, {title: page.title});
                    _.extend($scope.pages[key], data);
                });
            });

}])

;
