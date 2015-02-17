angular.module( 'form.contact', [])

.controller( 'FormContactCtrl', ['$scope', 'CacheService', function FormContactCtrl( $scope, CacheService ) {

    var cacheString = 'form:contact:query';
    CacheService.fetch(cacheString)
        .then(function(query) {
            $scope.query = query;
        }, function() {
            $scope.query = {};
            CacheService.add(cacheString, $scope.query);
        });

    $scope.submit = function() {
        console.log($scope.query, $scope.formContact);
    };
}])

;
