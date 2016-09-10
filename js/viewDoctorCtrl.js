angular.module('patientApp')

.controller('viewDoctorCtrl', function($scope,$stateParams,$http,$state) {
	$scope.searchDoctor=function(){
		$state.go('app.searchDoctor');
	}
	$scope.sendOtp=function(optdet){
		if(typeof optdet == "undefined"){
			alert("Please Enter OTP");
			return;
		}
		var optDetails={
			'mobilenumber':mobielnumber,
			'OTP':optdet
			}

		 var req = {
		 method: 'POST',
		 url: 'http://clinicapp.waghmaredd.com/patients/VerifyOTP',
		 data: optDetails
		}
	    $http(req).then(function(res){
			if(res.data.IsSaved == true){
				$state.go('app.newComplaint');
			}
			else{
				alert(res.data.Message);
				optDetails={};
				return;
			}
		}, function(res){
			
		});
	}
})



