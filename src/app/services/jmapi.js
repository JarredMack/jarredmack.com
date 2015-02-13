angular.module( 'services.jmapi', [])

.service( 'JMApi', ['$http', '$q', 'CacheService', function JMApi($http, $q, CacheService) {
        var self = this;
//@TODO Pull in config file for API URL etc
        this.apiUrl = 'http://api.jarredmack.local/';

        /**
         * Get Method
         *
         * HTTP Get from the API endpoint
         *
         * @param {String} endpoint
         * @param {String} [identifier]
         */
        this.get = function(endpoint, identifier) {
            var deferred = $q.defer();

            if(!!identifier) {
                endpoint += '/' + identifier;
            }
//@TODO use cache service
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

        //POST Method(?) - HTTP POST to endpoint

        return self;
    }
]);
