angular.module('snailbox', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('example', {
      url: '/example',
      templateUrl: './app/features/example/exampleTmpl.html',
      controller: 'exampleCtrl as example'
    });

  $urlRouterProvider
    .otherwise('/example');
});