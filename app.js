angular.module('RDM', ['ui.router','angularBootstrapNavTree'])
    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url:'/home',
                templateUrl:'templates/home.html',
                controller:'homeCtrl',
                onEnter: function(){
                    console.log('HOME');
                }
            })
    });

