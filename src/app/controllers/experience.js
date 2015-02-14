angular.module( 'jarredmack.experience', [])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'experience', {
    url: '/experience',
    views: {
      "main": {
        controller: 'ExperienceCtrl',
        templateUrl: 'views/experience.tpl.html'
      }
    },
    data:{
        pageTitle: 'Employment History',
        active: 'experience'
    }
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
