angular.module( 'directives.imageAccordion.accordionRow', [])

.directive( 'accordionRow', [function ( ) {
        return {
            transclude: true,
            restrict: 'E',
            templateUrl: 'directives/imageAccordion/accordionRow.tpl.html',
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
