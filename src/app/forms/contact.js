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
            JMApi.post('contact', $scope.query);
        }
    };
}])

;
