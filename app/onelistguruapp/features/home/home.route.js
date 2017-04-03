angular
	.module('onelistguruapp.home')
	.config(homeConfig);

	function homeConfig($stateProvider) {
		$stateProvider.state({
			name: 'home',
			url: '/home',
			templateUrl: 'onelistguruapp/features/home/home.html',
			controller:'HomeCtrl',
			controllerAs: 'HomeVM'

		})

	}   //end of homeConfig function