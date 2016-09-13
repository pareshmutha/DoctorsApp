angular.module('patientApp')

.controller('requestCertificateCtrl', function($scope, $ionicModal, $timeout,$ionicPopup,$stateParams) {
	
	 $scope.showList = function(){
		 $scope.listdata=["Dr. Mhatre","Dr. Shah","Dr. Abc","Dr. Xyz"];
			 var listPopup = $ionicPopup.show({
			 template: '<ion-list>                                '+
					   '  <ion-checkbox ng-repeat="item in listdata"> '+
					   '    {{item}}                              '+
					   '  </ion-checkbox>                             '+
					   '</ion-list>                               ',
			 
			 title: 'List',
			 scope: $scope,
			 buttons: [
			   { text: 'Cancel' },
			 ]
		   }); 
	 }
	 $scope.openDateDialog=function(){
		 
		 //ionic.trigger('click', { target: document.getElementById('date') });
		 document.getElementById('date').focus();
		 
		 
	 }
	 
	
	$scope.sendCertificateReq=function(cer){
		return;
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



