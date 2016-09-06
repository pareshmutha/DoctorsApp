angular.module('patientApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

/*
	Set the Base url using Restangular
*/
//RestangularProvider.setBaseUrl("http://clinicapp.waghmaredd.com/patients");

$ionicConfigProvider.navBar.alignTitle('center');
  $stateProvider
   .state('login', {  
		url: '/login',
		templateUrl: 'templates/login.html',
		controller: 'loginCtrl'
    })
	.state('changePassword', {  
		url: '/changePassword:username',
		templateUrl: 'templates/changePassword.html',
		controller: 'changePasswordCtrl'
    })
	.state('forgotPassword', {  
		url: '/forgotPassword',
		templateUrl: 'templates/forgotPassword.html',
		controller: 'forgotPasswordCtrl'
    })
	.state('OTP', {  
		url: '/otp:mobilenumber',
		templateUrl: 'templates/otp.html',
		controller: 'otpCtrl'
    })
	.state('register', {  
		url: '/register',
		templateUrl: 'templates/register.html',
		controller: 'registerCtrl'
    })
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html'
    
  })

  .state('app.newComplaint', {
    url: '/newComplaint',
    views: {
      'menuContent': {
        templateUrl: 'templates/newComplaint.html',
		controller: 'newComplaintCtrl'
      }
    }
  })
  .state('app.complaintStatus', {
    url: '/complaintStatus',
    views: {
      'menuContent': {
        templateUrl: 'templates/complaintStatus.html',
		controller: 'complaintStatusCtrl'
      }
    }
  })
  .state('app.complaintDetails', {
    url: '/complaintDetails:compId,:state',
    views: {
      'menuContent': {
        templateUrl: 'templates/complaintDetails.html',
		controller: 'complaintStatusCtrl'
      }
    }
  })

.state('app.myOutstandings', {
    url: '/myOutstandings',
    views: {
      'menuContent': {
        templateUrl: 'templates/myOutstandings.html',
		controller: 'myOutstandingCtrl'
      }
    }
  })
.state('app.requestCertificate', {
    url: '/requestCertificate',
    views: {
      'menuContent': {
        templateUrl: 'templates/requestCertificate.html',
		controller: 'requestCertificateCtrl'
      }
    }
  })
.state('app.downloadCertificate', {
    url: '/downloadCertificate',
    views: {
      'menuContent': {
        templateUrl: 'templates/downloadCertificate.html',
		controller: 'downloadCertificateCtrl'
      }
    }
  })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
