'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('LandingPageController',[function(){


  }])
  .controller('ContactListController',['$scope','$firebase', function($scope, $firebase){
  	 
      
      var taskRef = new Firebase('https://sendhub.firebaseio.com/');
      $scope.contactList = $firebase(taskRef);
      
        $scope.newContact = {name:'', phone:''};
        $scope.saveContact =  function(){
         $scope.contactList.$add($scope.newContact);
         $scope.newContact = {name:'', phone:'' };
        };

  }]);
 