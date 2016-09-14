angular.module('patientApp')

.controller('requestCertificateCtrl', function($scope, $ionicModal, $timeout,$ionicPopup,$stateParams,$http,$state,$ionicHistory) {
	
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
			"patientid":localStorage.getItem("patientId")
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
	
	
	$scope.sendCertificateReq=function(cer){
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
	 
	 
})



