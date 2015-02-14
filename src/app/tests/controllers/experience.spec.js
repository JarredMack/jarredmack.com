/**
 * Unit Test for Experience Controller
 */
describe( 'The experience controller', function() {
    var $rootScope, $scope, controller;

    beforeEach( module( 'jarredmack' ) );
    beforeEach( module( 'jarredmack.experience' ) );

    beforeEach(inject(function(_$rootScope_, $controller, $q) {
        $rootScope = _$rootScope_;
        $scope = {};
        var deferred = $q.defer();
        var dummyContentService = {
            fetch: function() {
                deferred.resolve([{ data: "test" }]);
                return deferred.promise;
            }
        };
        controller = $controller('ExperienceCtrl', { $scope: $scope, ContentService: dummyContentService });
    }));

    it('should fetch content and apply to the scope', function() {
        expect($scope.experience).toBeUndefined();
        $rootScope.$apply();
        expect($scope.experience).toBeDefined();
        expect($scope.experience[0].data).toEqual("test");
    });

    it('should add a default visible property to all elements', function() {
        $rootScope.$apply();
        expect($scope.experience[0].visible).toBeDefined();
    });
});

