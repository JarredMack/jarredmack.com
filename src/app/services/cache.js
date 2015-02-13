angular.module( 'services.cache', [])

.service( 'CacheService', [ '$q', '$timeout', function CacheService( $q, $timeout ) {
        var self = this;

        /** @var {Object} cached */
        this.cache = {};

        /** @var {Int} cache.expire Duration until the cache expires */
        this.cache.expires = 1000 * 60 * 10;

        /** @var {Object} cache.data Cached response data */
        this.cache.data = {};

        /**
         * Fetch cached data
         * @param {String} cacheString
         * @returns {Promise}
         */
        this.fetch = function(cacheString) {
            var deferred = $q.defer();

            if(self.cache.data[cacheString]) {
                deferred.resolve(self.cache.data[cacheString]);
            } else {
                deferred.reject();
            }

            return deferred.promise;
        };

        /**
         * Add data to the cache and set the timeout
         * @param {String} cacheString
         * @param {Object} data
         */
        this.add = function(cacheString, data) {
            self.cache.data[cacheString] = data;
            $timeout(function() {
                self.cache.data[cacheString] = null;
            }, self.cache.expires);
        };

        return self;
    }
]);
