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

.controller( 'ExperienceCtrl', ['$scope', 'ContentService', function ExperienceCtrl( $scope, ContentService ) {

    ContentService.fetch('experience')
        .then(function(experience) {
            $scope.experience = experience;
            _.forEach($scope.experience, function(exp) {
                if(angular.isUndefined(exp.visible)) {
                    exp.visible = false;
                }
            });
        });
}])

;
