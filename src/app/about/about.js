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
    data:{ pageTitle: 'About Me' }
  });
})

.controller( 'AboutCtrl', ['$scope', '$q', 'JMApi', function AboutCtrl( $scope, $q, JMApi ) {
        var contentFeeds = [
            'about',
            'skills'
        ];

        var promises = [];
        _.forEach(contentFeeds, function(feed) {
            promises.push(JMApi.get('content', feed));
        });

        $q.all(promises)
            .then(function(data) {
                console.log(data);
            });

}])

;
