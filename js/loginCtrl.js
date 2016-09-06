angular.module('patientApp')

.controller('loginCtrl', function($scope, $ionicModal, $timeout,$ionicPopup,$stateParams,$http,$state) {
		$scope.inputType="password";
		$scope.login=function(user){
			if(typeof user == "undefined"){
				alert("Please Enter All values!");
				return;
			}	
			if(typeof user.username == "undefined" || typeof user.password == "undefined"){
				alert("Please Enter All values!");
				return;
			}	
			var req = {
			 method: 'POST',
			 url: 'http://clinicapp.waghmaredd.com/patients/login',
			 data: user
			}
			$http(req).then(function(res){
				if(res.data.Message !="Login successfully"){
					alert("Wrong Credentials");
					return;
				}
				if(res.data.IsSaved == true && res.data.Data.IsMobileVerified==false){
					$state.go('OTP', { 'mobilenumber':res.data.Data.UserName });
				}
				else if(res.data.IsSaved == true && res.data.Data.ChangePassword==false){
					$state.go('changePassword',{'username':res.data.Data.UserName});
				}
				else{
					$state.go('app.newComplaint');	
				}
			}, function(res){
				
			});
			
			
		}
		$scope.newUser=function(){
			$state.go('register');
		}
		$scope.showPass=function(){
			if($scope.inputType=="password"){
				$scope.inputType="text";
			}
			else{
				$scope.inputType="password";
			}
			
		}
		$scope.forgotPass=function(){
			$state.go('forgotPassword');
		}
		$scope.submitPass=function(){
			$state.go('app.newComplaint');
		}
		$scope.sendPass=function(){
			$state.go('login');
		}
		
})



