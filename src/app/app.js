angular.module( 'jarredmack', [
  'templates-app',
  'templates-common',

  'jarredmack.about',
  'jarredmack.experience',

  'services.jmapi',

  'directives.collapsible',
  'directives.tabMenu',

  'filters.raw',

  'ui.router',
  'ui.bootstrap',
  'placeholders'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider ) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise( '/' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
        if ( angular.isDefined( toState.data.pageTitle ) ) {
            $scope.pageTitle = toState.data.pageTitle + ' | JarredMack.com' ;
            $scope.active = toState.data.active;
        }

        $scope.menu = {
            active: false
        };
    });
})

;

