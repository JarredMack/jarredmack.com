angular.module( 'services.content', [])

.service( 'ContentService', [ 'JMApi', function ContentService(JMApi) {
        var self = this;

        this.cached = {};

        this.fetchFeeds = function(feeds) {

        };

        return self;
    }
]);
