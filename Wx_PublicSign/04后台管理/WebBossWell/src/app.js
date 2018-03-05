'use strict';
var app = angular.module('app', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngStorage',
    'ui.router',
    'ui.bootstrap',
    'ui.load',
    'ui.jq',
    'ui.validate',
    'oc.lazyLoad',
    'pascalprecht.translate'
]);


app.run(function ($rootScope, $state, $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;
      }
  )


//����������401
app.factory('AuthInterceptor', function ($rootScope, $q, $location) {
    return {
        responseError: function (response) {
            if (response.status == 401) {
                $location.url('/login');
            }
            return $q.reject(response);
        }
    };
})


//·������
app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    //Ĭ��·��
    $urlRouterProvider
             .otherwise('/home/profile');
    $stateProvider

        //<!--Ȩ������·��-->
        .state('sys', {
            abstract: true,
            url: '/sys',
            templateUrl: 'statichtm/app.html',
        })
        //�˵�ģ��
        .state('sys.menumodule', {
            url: '/menumodule',
            templateUrl: 'statichtm/Sys_Module/MenuModule.html',
        })

         //�˵�ģ��(�༭)
        .state('sys.menumoduleadit', {
            url: '/menumoduleadit/:sid',
            templateUrl: 'statichtm/Sys_Module/MenuModuleAdit.html',
        })

        //��̨����Ա
        .state('sys.adminuser', {
            url: '/adminuser',
            templateUrl: 'statichtm/Sys_Admin/AdminUser.html',
        })
        //ϵͳ��ɫ
        .state('sys.role', {
            url: '/role',
            templateUrl: 'statichtm/Sys_Role/Role.html',
        })
        //ά����ɫȨ��
        .state('sys.roleauthor', {
            url: '/roleauthor',
            templateUrl: 'statichtm/Sys_RoleAuthor/RoleAuthor.html',
        })

        //<!--ϵͳ��Ϣ·��-->
         .state('msg', {
             abstract: true,
             url: '/msg',
             templateUrl: 'statichtm/app.html',
         })
        //ϵͳ��־
        .state('msg.logs', {
            url: '/logs',
            templateUrl: 'statichtm/Pub_Log/Logs.html',
        })

        //<!--ȫ�ּ�·��-->
        .state('home', {
            abstract: true,
            url: '/home',
            templateUrl: 'statichtm/app.html',
        })
        //��ҳ��
        .state('home.profile', {
            url: '/profile',
            templateUrl: 'statichtm/Home/Profile.html',
        })
        //��¼ҳ
        .state('login', {
            url: '/login',
            templateUrl: 'statichtm/temp/page_signin.html',
        })
}]);