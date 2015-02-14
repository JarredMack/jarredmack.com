/**
 * Unit Test for About Controller
 */
describe( 'The about controller', function() {
    var $rootScope, $scope, controller, $state;

    beforeEach( module( 'jarredmack' ) );
    beforeEach( module( 'jarredmack.about' ) );

    beforeEach(inject(function(_$rootScope_, $controller, $q) {
        $rootScope = _$rootScope_;
        $scope = {};
        $state = {};
        var deferred = $q.defer();
        var dummyContentService = {
            fetchMany: function() {
                deferred.resolve([{title: 'page1'}, {title:'page2'}]);
                return deferred.promise;
            }
        };
        $state.params = {};
        controller = $controller('AboutCtrl', { $scope: $scope, $state: $state, ContentService: dummyContentService });
    }));

    it('should fetch content from the ContentService and assign to the scope', function() {
        expect($scope.pages).toEqual([]);
        $rootScope.$apply();
        expect($scope.pages[0].active).toBe(true);
        expect($scope.pages).toEqual([{title:'page1',active:true}, {title:'page2'}]);
    });

    it('should assign a specific page to be active if the route is valid', function() {
        $state.params.page = 'page2';
        $rootScope.$apply();
        expect($scope.pages[0].active).toBeUndefined();
        expect($scope.pages[1].active).toBe(true);
    });

    it('should default to the first page if the route is not valid', function() {
        $state.params.page = 'not found';
        $rootScope.$apply();
        expect($scope.pages[0].active).toBe(true);
        expect($scope.pages[1].active).toBeUndefined();
    });
});

