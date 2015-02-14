/**
 * Unit Test for Content Service
 */
/*jshint es5: true */
describe( 'The content handling service', function() {
    var ContentService, $rootScope, theResponse;

    beforeEach( module( 'services.content' ) );

    beforeEach( function() {
        module(function($provide) {
            var dummyJMApi = {
                    get: function(endpoint, identifier) {
                        var _ = this;
                        _.then = function(callback) {
                            callback('data' + identifier);
                            return _;
                        };
                        _.catch = function(callback) {
                            callback();
                            return _;
                        };
                        return _;
                    }
                };
            $provide.value('JMApi', dummyJMApi);
        });

        inject(function(_ContentService_, _$rootScope_) {
            ContentService = _ContentService_;
            $rootScope = _$rootScope_;
            theResponse = undefined;
        });
    } );

    it('should fetch a single feed from the API', function() {
        ContentService.fetch('', '1')
            .then(function(response) {
                theResponse = response;
            });
        $rootScope.$apply();
        expect(theResponse).toEqual('data1');
    });

    it('should fetch multiple feeds from the API', function() {
        ContentService.fetchMany('', ['1', '2'])
            .then(function(response) {
                theResponse = response;
            });
        $rootScope.$apply();
        expect(theResponse).toEqual(['data1', 'data2']);
    });
});

