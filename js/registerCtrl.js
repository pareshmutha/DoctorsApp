angular.module('patientApp')

.controller('registerCtrl', function($scope, $ionicModal, $timeout,$ionicPopup,$http,$state) {
	$scope.registerUser=function(register,repass){
		if(typeof register == "undefined"){
			alert("Please Enter All values!");
			return;
		}
		if(typeof register.mobilenumber == "undefined" || typeof register.firstname == "undefined" || typeof register.lastname == "undefined" || typeof register.email == "undefined" || typeof register.password == "undefined" || typeof repass =="undefined"){
			alert("1Please Enter All values!");
			return;
		}
		if(isNaN(register.mobilenumber)){
			alert("Username must be an Mobile Number.")
			return;
		}
		if(register.mobilenumber.length<10){
			alert("Invalid Mobile Number!")
			return;
		}
		if(!(/[^\s@]+@[^\s@]+\.[^\s@]+/.test(register.email))){
			alert("Invalid Email!");
			return;
		}
		if(register.password.length < 8){
			alert("Password is less than 8 Characters!")
			return;
		}
		if(register.password != repass){
			alert("Password and Retype password Does't match!")
			return;
		}
		
		console.log(register);
		
		 var req = {
			 method: 'POST',
			 url: 'http://clinicapp.waghmaredd.com/patients/register',
			 data: register
		}
	    $http(req).then(function(res){
			if(res.data.IsSaved == true){
				$state.go('OTP', { 'mobilenumber':register.mobilenumber});
			}
			else{
				alert(res.data.Message);
				register={};
				return;
			}
		}, function(res){
			
		});
	}
	
	  
	 

	
  
	 
})



