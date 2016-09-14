angular.module('patientApp')

.controller('complaintStatusCtrl', function($scope,$state,$http,$stateParams) {
	$scope.compStatus1=$stateParams.state;
	if($stateParams.state =="Pending"){
		$scope.showCompDetails=false;
	}else{
		$scope.showCompDetails=true;
	}
	$scope.complaints=[
		{compId:"ID01",date:"22/08/2016",doctor:"Dr. Mahtre",status:"Pending"},
		{compId:"ID02",date:"22/08/2016",doctor:"Dr. Despande",status:"Completed"},
		{compId:"ID03",date:"22/08/2016",doctor:"Dr. Kulkarni",status:"Pending"},
		{compId:"ID04",date:"22/08/2016",doctor:"Dr. Mahtre",status:"Pending"},
		{compId:"ID05",date:"22/08/2016",doctor:"Dr. Dharma",status:"Pending"},
		{compId:"ID06",date:"22/08/2016",doctor:"Dr. Pethe",status:"Completed"},
	];
	$scope.loadComplaints=function(){
			var profileId={
			"patientid":localStorage.getItem("patientId")
		}
		cer.patientId=localStorage.getItem("patientId");
		cer.doctorId=$scope.docId;
		 var req = {
			 method: 'POST',
			 url: 'http://clinicapp.waghmaredd.com/patients/requestcertificate',
			 data:cer
			}
			$http(req).then(function(res){
			   alert(res.data.Message);
			}, function(res){
				
			});
	}
	var completedArr=[];
	$scope.selectedTab="Pending";
	$scope.complaintStatus=function(){
		if($scope.selectedTab=="Pending"){
			$scope.selectedTab="Completed";
			console.log("in complted");
		}
		else{
			$scope.selectedTab="Pending";
			console.log("in pending");
		}
	}
	$scope.compStatus = function (compStatus) { 
		return compStatus.status === $scope.selectedTab; 
	};
})



