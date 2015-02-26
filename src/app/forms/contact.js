angular.module( 'form.contact', [])

.controller( 'FormContactCtrl', ['$scope', 'CacheService', 'JMApi',
        function FormContactCtrl( $scope, CacheService, JMApi ) {

    var cacheString = 'form:contact:query';
    CacheService.fetch(cacheString)
        .then(function(query) {
            $scope.query = query;
        }, function() {
            $scope.query = {};
            CacheService.add(cacheString, $scope.query);
        });

    $scope.submit = function() {
        //@TODO Clear the form, show a spinner while submitting, then show thanks message
        if($scope.formContact.$valid) {
            JMApi.post('contact', $scope.query)
                .then(function() {
                    //Show success message
                });
        }
    };
}])

;
