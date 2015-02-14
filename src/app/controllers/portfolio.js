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
  });
})

.controller( 'PortfolioCtrl', ['$scope', 'JMApi', function PortfolioCtrl( $scope, JMApi ) {
    $scope.portfolios = {};

    JMApi.get('portfolio')
        .then(function(portfolios) {
            $scope.portfolios = portfolios;
        });
}])

;
