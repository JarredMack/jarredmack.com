angular.module( 'jarredmack.experience', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',

  'services.jmapi'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'experience', {
    url: '/experience',
    views: {
      "main": {
        controller: 'ExperienceCtrl',
        templateUrl: 'experience/experience.tpl.html'
      }
    },
    data:{ pageTitle: 'Employment History' }
  });
})

.controller( 'ExperienceCtrl', ['$scope', 'JMApi', function ExperienceCtrl( $scope, JMApi ) {

    JMApi.get('experience')
        .then(function(response) {
            $scope.experience = _.merge([{
                visible: false
            }], response);
        });
}])

;
