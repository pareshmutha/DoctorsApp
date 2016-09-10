angular.module('patientApp')

.controller('searchDoctorCtrl', function($scope,$stateParams,$http,$state,$ionicHistory) {
	var vm =this;
	$scope.showSelectOptions=false;
	/*vm.docList={"HasNext":false,"HasPrevious":false,"Count":1,"Entities":[{"RegistrationNo":"7857895","Name":"santosh","ClinicName":"hestq","Qualification":"gfjfj","DoctorSpecialityId":1,"Experience":"fgjf","Address":"jgkjgh","Area":null,"City":null,"Pincode":6758,"ContactNumber":null,"MobileNumber":"810824111","Email":"santoshtk2003@gmail.com","Website":null,"Subscription":null,"Id":2,"Active":true},{"RegistrationNo":"7857898","Name":"Suresh","ClinicName":"hestq","Qualification":"gfjfj","DoctorSpecialityId":1,"Experience":"fgjf","Address":"jgkjgh","Area":null,"City":null,"Pincode":411044,"ContactNumber":null,"MobileNumber":"810824111","Email":"santoshtk2003@gmail.com","Website":null,"Subscription":null,"Id":2,"Active":true}],"FinalAmount":0.0,"Message":"Records found!"};*/
	
	 vm.SelectedDocId = 'none';
	$scope.loadDocList=function(){
		 var req = {
		 method: 'GET',
		 url: 'http://clinicapp.waghmaredd.com/doctors',
		}
	    $http(req).then(function(res){
		   vm.docList=res.data;
		}, function(res){
			
		});
		
	} 
	$scope.loadDocList();
	$scope.goBack=function(){
		$ionicHistory.goBack();
	}
	$scope.cancel=function(){
	  $scope.showSelectOptions=false;
	}
	$scope.showSelect=function(){
		$scope.showSelectOptions=true;
	}
	$scope.sendOtp=function(optdet){
		if(typeof optdet == "undefined"){
			alert("Please Enter OTP");
			return;
		}
		var optDetails={
			'mobilenumber':mobielnumber,
			'OTP':optdet
			}

		 var req = {
		 method: 'POST',
		 url: 'http://clinicapp.waghmaredd.com/patients/VerifyOTP',
		 data: optDetails
		}
	    $http(req).then(function(res){
			if(res.data.IsSaved == true){
				$state.go('app.newComplaint');
			}
			else{
				alert(res.data.Message);
				optDetails={};
				return;
			}
		}, function(res){
			
		});
	}
})



