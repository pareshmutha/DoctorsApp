angular.module('patientApp')

.controller('viewProfileCtrl', function($scope,$state) {
	$scope.showEdit=false;
	$scope.loadProfile=function(){
	var profileId={
		"patientid":localStorage.getItem("patientId")
	}
	 var req = {
		 method: 'POST',
		 url: 'http://clinicapp.waghmaredd.com/patients/getprofile',
		 data:profileId
		}
	    $http(req).then(function(res){
		   $scope.profile=res.data;
		}, function(res){
			
		});
	}
	$scope.loadProfile();
	$scope.editProfile=function(){
		$scope.showEdit=true;
	}
	$scope.updateProfile=function(upProfile){
		
		  $scope.showEdit=false;
		  return;
		 
		upProfile.patientid=localStorage.getItem("patientId");
		 var req = {
			 method: 'POST',
			 url: 'http://clinicapp.waghmaredd.com/patients/getprofile',
			 data:upProfile
			}
			$http(req).then(function(res){
			   alert(res.data.Message);
			   $scope.showEdit=false;
			   $scope.loadProfile();
			   
			}, function(res){
				
			});
	}
	
	
	
	
	
	
	
})



