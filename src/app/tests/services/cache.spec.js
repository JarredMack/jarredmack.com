/**
 * Tests sit right alongside the file they are testing, which is more intuitive
 * and portable than separating `src` and `test` directories. Additionally, the
 * build process will exclude all `.spec.js` files from the build
 * automatically.
 */
describe( 'The cache handling service', function() {
    var CacheService, $rootScope;

    beforeEach( module( 'services.cache' ) );

    beforeEach(inject(function(_CacheService_, _$rootScope_) {
        CacheService = _CacheService_;
        $rootScope = _$rootScope_;
    }));

    it('should reject the promise if there is no cached data', function() {
        var theResponse;
        CacheService.fetch('CacheKey')
            .then(function() {
                theResponse = 'Found';
            }, function() {
                theResponse = 'Not Found';
            });
        $rootScope.$apply();
        expect(theResponse).toEqual('Not Found');
    });

    it('should add data to an internal cache', function() {
        CacheService.add('CacheKey', 'Cached Data');
        var cachedData = CacheService.cache.data['CacheKey'];
        expect(cachedData).toEqual('Cached Data');
    });

    it('should return cached data if it is available', function() {
        var theResponse;
        CacheService.add('CacheKey', 'Cached Data');
        CacheService.fetch('CacheKey')
            .then(function(response) {
                theResponse = response;
            }, function() {
                theResponse = 'Not Found';
            });
        $rootScope.$apply();
        expect(theResponse).toEqual('Cached Data');
    });
});

