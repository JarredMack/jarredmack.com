angular.module( 'services.jmapi', [
    'services.cache'
])

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

            var cacheString = 'JMApi:get:' + endpoint;

            CacheService.fetch(cacheString)
                .then(function(response) {
                    deferred.resolve(response);
                }, function() {
                    //Otherwise
                    $http.get(self.apiUrl + endpoint + '.json')
                        .success(function(response) {
                            CacheService.add(cacheString, response);
                            deferred.resolve(response);
                        })
                        .error(function(response) {
                            deferred.reject(response);
                        })
                    ;
                });

            return deferred.promise;
        };

        //POST Method(?) - HTTP POST to endpoint

        return self;
    }
]);
