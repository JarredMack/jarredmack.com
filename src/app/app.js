angular.module( 'jarredmack', [
  'templates-app',
  'templates-common',

  'jarredmack.about',
  'jarredmack.experience',

  'services.jmapi',

  'directives.collapsible',
  'directives.tabMenu',

  'ui.router',
  'ui.bootstrap',
  'placeholders'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
        if ( angular.isDefined( toState.data.pageTitle ) ) {
            $scope.pageTitle = toState.data.pageTitle + ' | JarredMack.com' ;
        }

        $scope.menu = {
            active: false
        };
    });
})

;

