angular.module('patientApp')

.controller('newComplaintCtrl', function($scope, $stateParams,$http,$state,$ionicHistory) {
	$scope.checkedSymtonList={};
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
	 $scope.showSympList = function(){
		  var listPopup = $ionicPopup.show({
			 template: '<ion-list>                                '+
					   '  <ion-checkbox ng-model="checkedSymtonList[item.Id]" ng-repeat="item in listdata"> '+
					   '    {{item}}                              '+
					   '  </ion-checkbox>                             '+
					   '</ion-list>                               ',
			 
			 title: 'List',
			 scope: $scope,
			 buttons: [
			   { text: 'Cancel' },
			   { text: 'Ok' }
			 ]
		   }); 
	 }
	$scope.openFileDialog=function() {
            ionic.trigger('click', { target: document.getElementById('file') });
    };
	
	
	$scope.launchComplaint=function(comp){
		
		comp.patientId=localStorage.getItem("patientId");
		comp.doctorId=$scope.docId;
		comp.attachments="hello";
		comp.symptomIdlist=generateCheckedSymtonlist();
		if(comp.symptomIdlist,length==0){
			alert("Select Symtoms..");
			return;
		}
		 var req = {
			 method: 'POST',
			 url: 'http://clinicapp.waghmaredd.com/patients/newcomplaint',
			 data:comp
			}
			$http(req).then(function(res){
			   alert(res.data.Message);
			}, function(res){
				alert("Some Error Occured="+res);
			});
	}
	$scope.loadComplaintList=function(){
		
		var profileId={
			"patientid":localStorage.getItem("patientId")
		}
		cer.patientId=localStorage.getItem("patientId");
		cer.doctorId=$scope.docId;
		 var req = {
			 method: 'POST',
			 url: 'http://clinicapp.waghmaredd.com/patients/getproblemlist',
			 data:profileId
			}
			$http(req).then(function(res){
			  $scope.listdata=res.data.Data;
			}, function(res){
				alert("Some Error Occured="+res);
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
					  $scope.loadComplaintList();
				}
			
			}, function(res){
				alert("Some Error Occured="+res);
			});
		
		
		
	}
	//load list of doctors
	$scope.loadDocList();
	function generateCheckedSymtonlist(){
		var array=[];
		for(i in $scope.checkItems) {
			console.log($scope.checkedSymtonList[i]);
			if($scope.checkedSymtonList[i] == true) {
				array.push(i);
			}
		}
		return array.join(",")
	}
	
  
})



