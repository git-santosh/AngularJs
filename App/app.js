
var app = angular.module("app",['ui.router','ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider){
	 $urlRouterProvider.otherwise('/home');
	 $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'partial/partial-home.html'
     })
     .state('about', {
            url: '/about',
            templateUrl: 'partial/partial-about.html'
        })
     .state('home.list', {
        url: '/list',
        templateUrl: 'partial/list.html'
        //template: '<ul><li ng-repeat="dog in dogs">{{ dog }}</li></ul>',


     })
     .state('home.paragraph', {
        url: '/paragraph',
        template: 'I could sure use a drink right now.'
    })
})
// .run(function(){
// 	angular.element(document).ready(function() {
// 	    angular.bootstrap(document,['app']);
// 	});
// })
