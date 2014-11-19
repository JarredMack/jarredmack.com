/**
 * Tests sit right alongside the file they are testing, which is more intuitive
 * and portable than separating `src` and `test` directories. Additionally, the
 * build process will exclude all `.spec.js` files from the build
 * automatically.
 */
describe( 'experience section', function() {
    var $rootScope, $scope, controller;

    beforeEach( module( 'jarredmack' ) );
    beforeEach( module( 'jarredmack.experience' ) );

    beforeEach(inject(function(_$rootScope_, $controller, $q) {
        $rootScope = _$rootScope_;
        $scope = {};
        var deferred = $q.defer();
        var dummyAPI = {
            get: function() {
                deferred.resolve([{ data: "test" }]);
                return deferred.promise;
            }
        };
        controller = $controller('ExperienceCtrl', { $scope: $scope, JMApi: dummyAPI });
    }));

    it('should assign the results of JMApi.get to the scope', function() {
        expect($scope.experience).toBeUndefined();
        $rootScope.$apply();
        expect($scope.experience).toBeDefined();
        expect($scope.experience[0].data).toEqual("test");
    });

    it('should add a default visible property to all elements', function() {
        $rootScope.$apply();
        expect($scope.experience[0].visible).toBeDefined();
        expect($scope.experience[0].visible).toEqual(false);
    });
});

