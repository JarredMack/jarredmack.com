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

.controller( 'ContactCtrl', ['$scope', 'ContentService', 'Config', function ContactCtrl( $scope, ContentService, Config ) {
    ContentService.fetch('content', 'contact')
        .then(function(content) {
            $scope.content = content;
        });

    ContentService.fetch('contact', Config.contact)
        .then(function(contact) {
            $scope.contact = contact;
        });
}])

;
