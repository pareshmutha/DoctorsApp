angular.module('patientApp')

.controller('viewProfileCtrl', function($scope,$state,$http) {
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
		   $scope.profile=res.data.Data;
		   
		}, function(res){
			alert("Some Error Occured="+res);
		});
	}
	$scope.loadProfile();
	$scope.editProfile=function(){
		$scope.showEdit=true;
	}
	$scope.updateProfile=function(upPro){
		alert(upPro.lastname);
		upPro.patientid=localStorage.getItem("patientId");
		 var req = {
			 method: 'POST',
			 url: 'http://clinicapp.waghmaredd.com/patients/updateprofile',
			 data:upPro
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



