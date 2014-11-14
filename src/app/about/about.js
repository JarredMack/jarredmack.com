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
    data:{ pageTitle: 'What is It?' }
  });
})

.controller( 'AboutCtrl', ['$scope', 'JMApi', function AboutCtrl( $scope, JMApi ) {

    JMApi.get('experience')
        .then(function(response) {
            console.log(response);
        });
}])

;
