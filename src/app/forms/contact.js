/*jshint es5: true*/
angular.module( 'form.contact', [])

.controller( 'FormContactCtrl', ['$scope', 'CacheService', 'JMApi',
        function FormContactCtrl( $scope, CacheService, JMApi ) {

    var cacheString = 'form:contact:query';
    CacheService.fetch(cacheString)
        .then(function(data) {
            $scope.data = data;
        }, function() {
            $scope.data = {};
            CacheService.add(cacheString, $scope.data);
        });

    $scope.submit = function() {
        if($scope.formContact.$valid) {
            $scope.data.processing = true;
            $scope.data.error = false;
            $scope.data.submitted = false;
            JMApi.post('contact', $scope.data.query)
                .then(function() {
                    $scope.data.processing = false;
                    $scope.data.submitted = true;
                })
                .catch(function(e) {
                    $scope.data.processing = false;
                    $scope.data.error = true;
                });
        }
    };
}])

;
