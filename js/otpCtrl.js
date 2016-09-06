angular.module('patientApp')

.controller('otpCtrl', function($scope, $ionicModal, $timeout,$ionicPopup,$stateParams) {
	var mobielnumber=$stateParams.mobilenumber;
	$scope.sendOtp=function(optdet){
		if(typeof optdet == "undefined"){
			alert("Please Enter OTP");
			return;
		}
		var optDetails={
			mobilenumber:mobielnumber,
			OTP:optdet
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
				alert("Wrong OTP Entered");
				optDetails={};
				return;
			}
		}, function(res){
			
		});
	}
})



