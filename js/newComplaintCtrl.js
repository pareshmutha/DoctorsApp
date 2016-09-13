angular.module('patientApp')

.controller('newComplaintCtrl', function($scope, $ionicModal, $timeout,$ionicPopup) {
	 $scope.showList = function(){
		 $scope.listdata=["hand","leg","stomach","toe"];
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
	$scope.openFileDialog=function() {
            ionic.trigger('click', { target: document.getElementById('file') });
    };
	
	
	$scope.launchComplaint=function(cer){
		return;
		var profileId={
			"patientid":localStorage.getItem("patientId")
		}
		cer.patientId=localStorage.getItem("patientId");
		cer.doctorId=$scope.docId;
		 var req = {
			 method: 'POST',
			 url: 'http://clinicapp.waghmaredd.com/patients/newcomplaint',
			 data:cer
			}
			$http(req).then(function(res){
			   alert(res.data.Message);
			}, function(res){
				
			});
	}
	
	
	
	
  
})



