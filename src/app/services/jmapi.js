angular.module( 'services.jmapi', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.service( 'JMApi', ['$http', '$q', '$timeout', function JMApi($http, $q, $timeout) {
        var self = this;
//@TODO Pull in config file for API URL etc
        this.apiUrl = 'http://api.jarredmack.local/';

        /** @var {Object} cached */
        this.cached = {};

        /** @var {Int} cached.expire Duration until the cache expires */
        this.cached.expires = 1000 * 60 * 10;

        /** @var {Object} cached.response Cached response data */
        this.cached.response = {};

        /**
         * Get Method
         *
         * HTTP Get from the API endpoint
         *
         * @param {String} endpoint
         */
        this.get = function(endpoint) {
            var deferred = $q.defer();

            if(!!self.cached.response[endpoint]) {
                deferred.resolve(self.cached.response[endpoint]);
            } else {
                $http.get(self.apiUrl + endpoint + '.json')
                    .success(function(response) {
                        addCache(endpoint, response);
                        deferred.resolve(response);
                    })
                    .error(function(response) {
                        deferred.reject(response);
                    })
                ;
            }

            return deferred.promise;
        };

        /**
         * Private methods
         */

        /**
         * Add data to the cache and set the timeout
         * @param {String} endpoint
         * @param {Object} response
         */
        function addCache(endpoint, response) {
            self.cached.response[endpoint] = response;
            $timeout(function() {
                self.cached.response[endpoint] = null;
            }, self.cached.expires);
        }

        //POST Method(?) - HTTP POST to endpoint

        return self;
    }
]);
