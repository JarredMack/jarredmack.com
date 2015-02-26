/*jshint es5: true*/
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
        if($scope.formContact.$valid) {
            $scope.processing = true;
            $scope.error = false;
            $scope.submitted = false;
            JMApi.post('contact', $scope.query)
                .then(function() {
                    $scope.processing = false;
                    $scope.submitted = true;
                })
                .catch(function(e) {
                    $scope.processing = false;
                    $scope.error = true;
                });
        }
    };
}])

;
