angular.module('patientApp')

.controller('viewProfileCtrl', function($scope,$state,$http) {
	$scope.showEdit=false;
	$scope.upProfile={};
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
		   $scope.profile=res.data.Data;
		   
		}, function(res){
			alert("Some Error Occured="+res);
		});
	}
	$scope.loadProfile();
	$scope.editProfile=function(){
		$scope.showEdit=true;
	}
	$scope.updateProfile=function(){
		
		$scope.upProfile.patientid=localStorage.getItem("patientId");
        $scope.upProfile.image="123";
		$scope.upProfile.language=0;
		var req = {
			 method: 'POST',
			 url: 'http://clinicapp.waghmaredd.com/patients/updateprofile',
			 data:$scope.upProfile
			}
			$http(req).then(function(res){
			   alert(res.data.Message);
			   $scope.showEdit=false;
			   $scope.loadProfile();
			   
			}, function(res){
				alert("Some Error Occured="+res);
			});
	}
	
	
	
	
	
	
	
})



