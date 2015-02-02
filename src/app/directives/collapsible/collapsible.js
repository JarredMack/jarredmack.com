angular.module( 'directives.collapsible', [])

.directive( 'collapsible', [function ( ) {
        return {
            transclude: true,
            restrict: 'E',
            templateUrl: 'directives/collapsible/collapsible.tpl.html',
            scope: {
                title: '@',
                alternate: '='
            },
            link: function(scope, element, attrs) {
                scope.visible = false;
            }
        };
}])

;
