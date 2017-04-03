angular.module('onelistguruapp',[
	'ui.router',
	'onelistguruapp.home'
])
	.config(appConfig);

function appConfig($urlRouterProvider){
	$urlRouterProvider.otherwise('/home');
}