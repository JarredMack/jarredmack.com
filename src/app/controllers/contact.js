angular.module( 'jarredmack.contact', [])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'contact', {
    url: '/contact',
    views: {
      "main": {
        controller: 'ContactCtrl',
        templateUrl: 'views/contact.tpl.html'
      }
    },
    data:{
        pageTitle: 'Contact Me',
        active: 'contact'
    }
  })
  ;
})

.controller( 'ContactCtrl', ['$scope', 'ContentService', function ContactCtrl( $scope, ContentService ) {
    ContentService.fetch('contact')
        .then(function(contact) {
            $scope.contact = contact[0];
        });
}])

;
