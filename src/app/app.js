angular.module( 'jarredmack', [
  'templates-app',
  'templates-common',

  'site.config',

  'jarredmack.about',
  'jarredmack.experience',
  'jarredmack.portfolio',
  'jarredmack.contact',

  'form.contact',

  'factories.availability',
  'factories.status',

  'services.jmapi',
  'services.content',

  'directives.collapsible',
  'directives.tabMenu',

  'filters.raw',

  'ui.router',
  'ui.bootstrap',
  'placeholders',
  'ngAnimate'
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
            pageTitle: 'Homepage',
            active: 'about'
        }
    });

    $urlRouterProvider.otherwise( '/' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, $window, ContentService, Config, availability, status ) {
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
        if ( angular.isDefined( toState.data.pageTitle ) ) {
            $scope.pageTitle = toState.data.pageTitle + ' | Jarred Mack - Front End Developer' ;
            $scope.active = toState.data.active;
        }

        $scope.menu = {
            active: false
        };

        $window.ga('send', 'pageview', { page: $location.url() });
    });

    ContentService.fetch('contact', Config.contact)
        .then(function(contact) {
            $scope.details = {};
            $scope.details.email = _.find(contact.details, { title: 'email' } );
            $scope.details.phone = _.find(contact.details, { title: 'phone' } );
        });

    availability.process().then(function(status) {
        $scope.availability = status;
    });

    $scope.status = status;
})

;

