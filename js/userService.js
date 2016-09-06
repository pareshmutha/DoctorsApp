
 angular.module('patientApp').factory("userService",
 ['Restangular', function(Restangular) {
 var service = Restangular.service("userService");  
                        // I can add custom methods to my Students service
                        // by adding functions here service
                        //service.validateData = function(student) {
                           //validate student data
                        //}
 return service;
 }]);
