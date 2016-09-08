angular.module('patientApp')
.controller('changePasswordCtrl', function($scope, $stateParams,$http,$state) {
	var username=$stateParams.username;
	$scope.submitPass=function(changepass,rePass){
		if(typeof changepass == "undefined" || typeof rePass == "undefined"  ){
			alert("Please Enter All values!");
			return;
		}
		if(typeof changepass.oldpassword == "undefined" || typeof changepass.newpassword == "undefined"  ){
			alert("Please Enter All values!");
			return;
		}
		if(changepass.newpassword != rePass){
			alert("Password and Retype password Does't match!")
			return;
		}
		
		changepass.username=username;
		var req = {
			 method: 'POST',
			 url: 'http://clinicapp.waghmaredd.com/patients/changepassword',
			 data: changepass
			}
			$http(req).then(function(res){
				if(res.data.IsSaved ==false){
					alert(res.data.Message);
					return;
				}
				else{
					$state.go('app.dashboard');	
				}
			}, function(res){
				
			});
		
	}
});



