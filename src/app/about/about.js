angular.module( 'jarredmack.about', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',

  'services.jmapi'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'about', {
    url: '/',
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

.controller( 'AboutCtrl', ['$scope', '$q', 'JMApi', function AboutCtrl( $scope, $q, JMApi ) {
        $scope.pages = [
            {
                title: 'about',
                active: true
            },
            {
                title: 'skills'
            }
        ];

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
