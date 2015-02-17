angular.module( 'services.jmapi', [
    'site.config',

    'services.cache'
])

.service( 'JMApi', ['$http', '$q', 'CacheService', 'Config', function JMApi($http, $q, CacheService, Config) {
        var self = this;

        /** @param {String} apiUrl */
        this.apiUrl = Config.apiUrl;

        /**
         * Get Method
         *
         * HTTP Get from the API endpoint
         *
         * @param {String} endpoint
         * @param {String} [identifier]
         * @returns {Promise}
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

        /**
         * Post method
         *
         * HTTP POST to an API endpoint
         *
         * @param {String} endpoint
         * @param {Object} data
         * @returns {Promise}
         */
        this.post = function(endpoint, data) {
            var deferred = $q.defer();

            $http.post(self.apiUrl + endpoint + '.json', data)
                .success(function(response) {
                    deferred.resolve(response);
                })
                .error(function(response) {
                    deferred.reject(response);
                });

            return deferred.promise;
        };

        return self;
    }
]);
