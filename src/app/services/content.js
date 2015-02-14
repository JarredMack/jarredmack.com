/*jshint es5: true */
angular.module( 'services.content', [
    'services.jmapi',
    'services.cache'
])

.service( 'ContentService', [ '$q', 'JMApi', 'CacheService', function ContentService($q, JMApi, CacheService) {
        var self = this;

        /** @param {String} endpoint API Content endpoint */
        this.endpoint = 'content';

        /**
         * Fetch data from a single feed and resolve an object
         *
         * @param {String} identifier
         * @returns {Promise}
         */
        this.fetch = function(identifier) {
            var deferred = $q.defer();

            var cacheString = 'ContentService:fetch:' + identifier;

            CacheService.fetch(cacheString)
                .then(function(cached) {
                    deferred.resolve(cached);
                }, function() {
                    //Otherwise
                    JMApi.get(self.endpoint, identifier)
                        .then(function(response) {
                            CacheService.add(cacheString, response);
                            deferred.resolve(response);
                        })
                        .catch(function(e) {
                            deferred.reject(e);
                        });
                });

            return deferred.promise;
        };

        /**
         * Fetch multiple feeds and resolve an array
         *
         * @param {Array} feeds
         * @returns {Promise}
         */
        this.fetchMany = function(feeds) {
            var deferred = $q.defer();

            var promises = [];
            _.forEach(feeds, function(feed) {
                promises.push(self.fetch(feed));
            });

            $q.all(promises)
                .then(function(responses) {
                    deferred.resolve(responses);
                })
                .catch(function(e) {
                    deferred.reject(e);
                });

            return deferred.promise;
        };

        return self;
    }
]);
