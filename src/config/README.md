# The `src/config/` Directory

The `src/config/` directory houses environment specific configuration variables.
These variables are referenced by including the `Config` service, and injecting
it where required:

```js
angular.module('myapp', [ 'Config' ])

.controller('myCtrl', [ 'Config', function myCtrl( Config ) {
    var url = Config.apiUrl;
    // .. application logic that relies on an environment specific url ..
  }]
);
```

For instructions in building to a specific environment, see the root README.