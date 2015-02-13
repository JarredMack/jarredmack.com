angular.module( 'directives.tabMenu', [])

.directive( 'tabMenu', [function ( ) {
        return {
            transclude: true,
            restrict: 'E',
            templateUrl: 'directives/tabMenu/tabMenu.tpl.html',
            scope: {
                menuItems: '=',
                baseRoute: '='
            },
            link: function($scope, element, attrs) {
                $scope.setActive = function(item) {
                    _.forEach($scope.menuItems, function(menu) {
                        menu.active = false;
                    });
                    item.active = true;
                };
            }
        };
}])

;
