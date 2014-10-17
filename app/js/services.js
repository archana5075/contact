'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
.value('version', '0.1')
.factory("ContactFactory", function($resource) {
  return $resource("https://api.sendhub.com/v1/contacts/?username=6159738279\&api_key=a0f2149735eee4c3abb4b9a6eb8097e4d3f096ac");
});

  