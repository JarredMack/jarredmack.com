/**
 * Unit Test for JMApi Service
 */
describe( 'The API request handling service', function() {
    var $mockHttp, $rootScope, JMApi, theResponse;

    beforeEach( module( 'services.jmapi' ) );

    beforeEach(inject(function(_JMApi_, _$rootScope_, $httpBackend) {
        JMApi = _JMApi_;
        $mockHttp = $httpBackend;
        $rootScope = _$rootScope_;

        $mockHttp.expect('GET')
            .respond({
                data: "test"
            });

        theResponse = undefined;
    }));

    it('should return the correct API response', function() {
        JMApi.get()
            .then(function(response) {
                theResponse = response;
            });
        expect(theResponse).toBeUndefined();
        $mockHttp.flush();
        expect(theResponse).toEqual({data:"test"});
    });

    it('should return cached results', function() {
        //Send fresh request
        JMApi.get();
        $mockHttp.flush();

        //Update response - should not be returned
        $mockHttp.expect('GET')
            .respond({
                data: "different"
            });
        JMApi.get()
            .then(function(response) {
                theResponse = response;
            });
        expect(theResponse).toBeUndefined();
        expect(function() { $mockHttp.flush(); }).toThrow('No pending request to flush !');
        $rootScope.$apply();
        expect(theResponse).toEqual({data:"test"});
    });
});

