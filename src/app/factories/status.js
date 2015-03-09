angular.module( 'factories.status', [

])

.factory( 'status', [ '$q', '$filter', function statusFactory( $q, $filter ) {
        var currentStatus = '';

        return {
            set: function(status) {
                currentStatus = status;
            },
            get: function() {
                return currentStatus;
            },
            clear: function() {
                currentStatus = '';
            }
        };
    }
]);
