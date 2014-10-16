'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('LandingPageController',[function(){


  }])
  .controller('ContactListController',['$scope','$firebase','$resource', function($scope, $firebase, $resource){

                $scope.names = [];
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
                       function( names ) {
                          console.log(names);  
                          $scope.names = names;
                         },
                        function( error ) {
                          alert( "Something went wrong!" );
                        }
                    );

      var taskRef = new Firebase('https://sendhub.firebaseio.com/contacts');
      $scope.contactList = $firebase(taskRef);
      
       $scope.newContact = {name:'', number:''};

        $scope.saveContact =  function(){
         $scope.contactList.$add($scope.newContact);
         $scope.newContact = {name:'', number:'' };
        };

      $scope.sendtextMessage = function(phoneNumber){
        var textMessagesRef = new Firebase('https://sendhub.firebaseio.com/textMessages');
        var textMessages = $firebase(textMessagesRef);
        textMessages.$add({phoneNumber: phoneNumber});
      }; 
      



       
  }]);
 