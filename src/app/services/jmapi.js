angular.module( 'services.jmapi', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.service( 'JMApi', function JMApi( ) {
    var self = this;
//@TODO Pull in config file for API URL etc


        //GET Method - HTTP Get to endpoint or return cached copy
        //POST Method(?) - HTTP POST to endpoint

    return self;
})

;
