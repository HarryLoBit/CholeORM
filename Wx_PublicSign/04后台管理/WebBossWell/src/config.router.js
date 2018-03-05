'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .run(
    ['$rootScope', '$state', '$stateParams',
      function ($rootScope, $state, $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;
      }
    ]
  )
  .config(
    ['$stateProvider', '$urlRouterProvider', '$routeProvider',
      function ($stateProvider, $urlRouterProvider, $routeProvider) {
          //$urlRouterProvider
          //    .otherwise('/app/profile');
          //$stateProvider
          //    .state('app', {
          //        abstract: true,
          //        url: '/app',
          //        templateUrl: 'tpl/app.html',
          //    })
          //    .state('app.profile', {
          //        url: '/profile',
          //        templateUrl: 'tpl/page_profile.html',
          //    })

          //��ҳ
          $routeProvider.when('/app', {
              templateUrl: "tpl/app.html",
              controller: 'AppCtrl'
          });
          //��ҳ��
          $routeProvider.when('/profile', {
              templateUrl: "tpl/page_profile.html",
              controller: 'ProfileCtrl'
          });

          //�˵�ģ��
          $routeProvider.when('/menumodule', {
              templateUrl: "tpl/System/sys_menumodule.html",
              controller: 'MenuModuleCtrl'
          });

          $routeProvider.otherwise({
              redirectTo: '/app'
          });

      }
    ]
  );