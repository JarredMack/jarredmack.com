angular.module( 'factories.availability', [
    'services.content'
])

.factory( 'availability', [ '$q', '$filter', 'ContentService', function availabilityFactory( $q, $filter, ContentService ) {
        var statuses = [
            { type: 'unavailable', title: 'Unavailable' },
            { type: 'available', title: 'Available' },
            { type: 'soon', title: 'Soon' }
        ];

        return {
            process: function () {
                var deferred = $q.defer();
                ContentService.fetch('experience')
                    .then(function (experience) {
                        var current = experience[0];

                        var status, title;
                        if (!!current.finished) {
                            if (new Date(current.finished) > new Date()) {
                                status = 2; // Available soon
                                title = 'Available ' + $filter('date')(current.finished, 'MMMM yyyy');
                            } else {
                                status = 1; // Available now
                            }
                        } else {
                            status = 0; // Unavailable
                        }

                        deferred.resolve({
                            type: statuses[status].type,
                            status: title || statuses[status].title
                        });
                    });
                return deferred.promise;
            }
        };
    }
]);
