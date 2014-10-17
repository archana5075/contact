'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('LandingPageController',[function(){
  }])
  .controller('ContactListController',['$scope','$http','$firebase','$resource', function($scope, $http, $firebase, $resource){
                 
                 var resource = $resource(
                    "https://api.sendhub.com/v1/contacts/?username=6159738279&api_key=a0f2149735eee4c3abb4b9a6eb8097e4d3f096ac",
                    {
                        callback: "JSON_CALLBACK"
                    },
                    {
                        getNames: {
                                    method: "JSONP"
                                  }
                    }
                );

                 resource.getNames().$promise.then(
                       function( response ) {
                          $scope.contactList = response.objects;
                          //console.log($scope.contactList);  
                         },
                        function( error ) {
                          alert( "Something went wrong!" );
                        }
                    );

    $scope.newContact  = {name:'', number:''};  
    $scope.addContact = function()
    { 
      $scope.contactList.push($scope.newContact);
    }

    $scope.sendtextMessage = function(phoneNumber){
        var textMessagesRef = new Firebase('https://sendhub.firebaseio.com/textMessages');
        var textMessages = $firebase(textMessagesRef);
        textMessages.$add({phoneNumber: phoneNumber});
    };
                            
    

      
  }]);
 