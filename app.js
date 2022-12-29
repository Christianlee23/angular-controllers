(function () {
    'use strict';

var myApp angular.module("myApp", []);

myApp.controller('studentController', function($scope){
    $scope.student = {
        firstName: "Christian",
        lastName: "Lee",

        fullName: function () {
            var studentObject;
            studentObject = $scope.student;
            return studentObject.firstName + " " + studentObject.lastName;
        }
    };
  });

})();
