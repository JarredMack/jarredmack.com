angular.module( 'directives.imageAccordion', [
    'directives.imageAccordion.accordionRow'
])

.directive( 'imageAccordion', [function ( ) {
        return {
            transclude: true,
            restrict: 'E',
            templateUrl: 'directives/imageAccordion/imageAccordion.tpl.html'
        };
}])

;
