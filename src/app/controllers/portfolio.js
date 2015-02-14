angular.module( 'jarredmack.portfolio', [])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'portfolio', {
    url: '/portfolio',
    views: {
      "main": {
        controller: 'PortfolioCtrl',
        templateUrl: 'views/portfolio.tpl.html'
      }
    },
    data:{
        pageTitle: 'Portfolio',
        active: 'portfolio'
    }
  })
  .state('portfolio.site', {
      url: '/:site',
      views: {
          "main": {
              controller: 'PortfolioCtrl',
              templateUrl: 'views/portfolio.tpl.html'
          }
      },
      data:{
          pageTitle: 'Portfolio',
          active: 'portfolio'
      }
  })
  ;
})

.controller( 'PortfolioCtrl', ['$scope', '$state', 'ContentService', function PortfolioCtrl( $scope, $state, ContentService ) {
    $scope.portfolios = {};

    ContentService.fetch('portfolio')
        .then(function(portfolios) {
            $scope.portfolios = portfolios;

            _.forEach($scope.portfolios, function(site) {
                site.active = false;
            });

            if($state.params.site) {
                var $site = _.find($scope.portfolios, { title: $state.params.site }) || {};
                $site.active = true;
            }
        });
}])

;
