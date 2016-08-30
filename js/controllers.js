angular.module('patientApp')

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.showLogout=false;
  $scope.showLogoutbtn=function(){
	if($scope.showLogout)
	$scope.showLogout=false;
	else
	$scope.showLogout=true;
  }
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('loginCtrl', function($scope, $stateParams,$state) {
	$scope.inputType="password";
	$scope.login=function(){
		$state.go('changePassword');
	}
	$scope.showPass=function(){
		if($scope.inputType=="password"){
			$scope.inputType="text";
		}
		else{
			$scope.inputType="password";
		}
		
	}
	$scope.forgotPass=function(){
		$state.go('forgotPassword');
	}
	$scope.submitPass=function(){
		$state.go('app.newComplaint');
	}
	$scope.sendPass=function(){
		$state.go('login');
	}
	
})
.controller('changePasswordCtrl', function($scope, $stateParams) {
	
	$scope.showPass=function(){
		if($scope.inputType=="password"){
			$scope.inputType="text";
		}
		else{
			$scope.inputType="password";
		}
		
	}
});

