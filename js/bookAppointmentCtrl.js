angular.module('patientApp')

.controller('bookAppointmentCtrl', function($scope,$stateParams,$http,$state,$ionicHistory) {
	
	 $scope.showDocList = function(){
		 var listPopup = $ionicPopup.show({
			 template: '<ion-list>                                '+
					   '  <ion-radio ng-model="docId" ng-value="item.Id" ng-repeat="item in docList"> '+
					   '    {{item}}                              '+
					   '  </ion-radio>                             '+
					   '</ion-list>                               ',
			 
			 title: 'List',
			 scope: $scope,
			 buttons: [
			   { text: 'Cancel' },
			   { text: 'Ok' },
			 ]
		   }); 
	 }
	 $scope.loadDocList=function(){
		
		var profileId={
			"patientId":localStorage.getItem("patientId")
		}
		var req = {
			 method: 'POST',
			 url: 'http://clinicapp.waghmaredd.com/patients/getmydoctors',
			 data:profileId
			}
			$http(req).then(function(res){
				if(res.data.Data.length==0 || typeof res.data.Data.length == 'undefined'){
					alert("No Doctors..");
					$ionicHistory.nextViewOptions({
					  disableBack: true
					});
					$state.go('app.viewDoctor');	
					return;
				}
				else{
					  $scope.docList=res.data.Data;
					  
				}
			
			}, function(res){
				alert("Some Error Occured="+res);
			});
		
		
		
	}
	 $scope.loadDocList();
	 
	
	$scope.bookAppointment=function(appointment){
		if(typeof appointment == 'undefined'){
			alert("Please fill all the details");
			return;
		}
		if(typeof appointment.Date == 'undefined' || typeof appointment.Time == 'undefined' || typeof appointment.description == 'undefined'){
			alert("Please fill all the details");
			return;
		}
		appointment.patientId=localStorage.getItem("patientId");
		appointment.doctorId=$scope.docId;
		 var req = {
			 method: 'POST',
			 url: 'http://clinicapp.waghmaredd.com/patients/bookappointment',
			 data:appointment
			}
			$http(req).then(function(res){
			   alert(res.data.Message);
			   $state.go('app.dashboard');
			}, function(res){
				alert("Some Error Occured="+res);
			});
	}
	 
	 
})



