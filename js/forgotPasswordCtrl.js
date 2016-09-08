angular.module('patientApp')

.controller('forgotPasswordCtrl', function($scope,$http,$state) {
	$scope.sendPass=function(mobilenumber){
		if(typeof mobilenumber == "undefined"){
			alert("Please Enter Mobile Number");
			return;
		}
		var forgotDetails={
			'contactnumber':mobilenumber
			}
			
		 var req = {
		 method: 'POST',
		 url: 'http://clinicapp.waghmaredd.com/patients/forgotpassword',
		 data: forgotDetails
		}
	    $http(req).then(function(res){
			if(res.data.IsSaved == true){
				alert(res.data.Message);
				$state.go('login');
			}
			else{
				alert(res.data.Message);
				return;
			}
		}, function(res){
			
		});
	}
})



