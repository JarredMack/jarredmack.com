angular.module( 'filters.raw', [])

.filter( 'raw', ['$sce', function ( $sce ) {
    return function(content) {
        return $sce.trustAsHtml(content);
    };
}])

;
