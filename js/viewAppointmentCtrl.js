angular.module('patientApp')

.controller('viewAppointmentCtrl', function($scope,$stateParams,$http,$state) {
	
	 $scope.loadAppointmentList=function(){
		try{
			var profileId={
				"patientId":localStorage.getItem("patientId")
			}
			
			 var req = {
				 method: 'POST',
				 url: 'http://clinicapp.waghmaredd.com/patients/viewappointment',
				 data:profileId
				}
				$http(req).then(function(res){ 
					try{
						  $scope.appointmentList=res.data;
						  
					
					}catch(e){alert("error="+e)}
				
				}, function(res){
					alert("Some Error Occured="+res);
					
				});
		
		}catch(e){alert("error="+e)}
		
	}
	$scope.loadAppointmentList();
	 
})



