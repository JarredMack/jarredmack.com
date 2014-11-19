angular.module( 'directives.imageAccordion.accordionRow', [])

.directive( 'accordionRow', [function ( ) {
        return {
            transclude: true,
            restrict: 'E',
            templateUrl: 'directives/imageAccordion/accordionRow.tpl.html'
        };
}])

;
