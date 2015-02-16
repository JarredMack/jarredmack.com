angular.module( 'form.contact', [])

.controller( 'FormContactCtrl', ['$scope', function FormContactCtrl( $scope ) {

    $scope.query = {};

    $scope.submit = function() {
        console.log($scope.query, $scope.formContact);
    };
}])

;
