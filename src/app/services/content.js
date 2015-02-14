/*jshint es5: true */
angular.module( 'services.content', [
    'services.jmapi'
])

.service( 'ContentService', [ '$q', 'JMApi', function ContentService($q, JMApi) {
        var self = this;

        /**
         * Fetch data from a single feed and resolve an object
         *
         * @param {String} endpoint
         * @param {String} [identifier]
         * @returns {Promise}
         */
        this.fetch = function(endpoint, identifier) {
            var deferred = $q.defer();

            JMApi.get(endpoint, identifier)
                .then(function(response) {
                    deferred.resolve(response);
                })
                .catch(function(e) {
                    deferred.reject(e);
                });

            return deferred.promise;
        };

        /**
         * Fetch multiple feeds and resolve an array
         *
         * @param {String} endpoint
         * @param {Array} feeds
         * @returns {Promise}
         */
        this.fetchMany = function(endpoint, feeds) {
            var deferred = $q.defer();

            var promises = [];
            _.forEach(feeds, function(feed) {
                promises.push(self.fetch(endpoint, feed));
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
