angular.module('snailbox', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: './app/features/login/loginTmpl.html',
      controller: 'loginCtrl as loginCtrl'
    })

  .state('signup', {
    url: '/signup',
    templateUrl: './app/features/signup/signupTmpl.html',
    controller: 'signupCtrl as signupCtrl'
  });

  $urlRouterProvider
    .otherwise('/login');
});