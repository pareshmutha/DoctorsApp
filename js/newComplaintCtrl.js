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
  
})



