angular.module( 'jarredmack', [
  'templates-app',
  'templates-common',

  'jarredmack.about',
  'jarredmack.experience',
  'jarredmack.portfolio',
  'jarredmack.contact',

  'services.jmapi',
  'services.content',

  'directives.collapsible',
  'directives.tabMenu',

  'filters.raw',

  'ui.router',
  'ui.bootstrap',
  'placeholders'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider ) {
    $locationProvider.html5Mode(true);

    $stateProvider.state( 'home', {
        url: '/',
        views: {
            "main": {
                controller: 'AboutCtrl',
                templateUrl: 'views/about.tpl.html'
            }
        },
        data:{
            pageTitle: 'About Me',
            active: 'about'
        }
    });

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

