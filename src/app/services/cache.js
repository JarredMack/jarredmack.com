angular.module( 'services.cache', [])

.service( 'CacheService', [ '$q', '$timeout', function CacheService( $q, $timeout ) {
        var self = this;

        /** @var {Object} cached */
        this.cached = {};

        /** @var {Int} cached.expire Duration until the cache expires */
        this.cached.expires = 1000 * 60 * 10;

        /** @var {Object} cached.response Cached response data */
        this.cached.response = {};

        /**
         * Fetch cached data
         * @param identifier
         * @returns {Promise}
         */
        this.fetch = function(identifier) {
            var deferred = $q.defer();

            if(self.cached[identifier]) {
                deferred.resolve(self.cached.identifier);
            } else {
                deferred.reject();
            }
//@TODO Sort this out
            this.otherwise = function(callback) {

            };

            return deferred.promise;
        };

        /**
         * Add data to the cache and set the timeout
         * @param {String} cacheString
         * @param {Object} data
         */
        this.add = function(cacheString, data) {
            self.cached.response[cacheString] = data;
            $timeout(function() {
                self.cached.response[cacheString] = null;
            }, self.cached.expires);
        };

        return self;
    }
]);
