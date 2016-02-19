(function () {
    'use strict';
    
    angular
        .module('app', ['ui.router','ui.bootstrap']);
	
    angular
        .module('app')
        .run(runHandler);
		
	runHandler.$inject = ['$rootScope','$state'];
	
    function runHandler($rootScope, $state) {
        $rootScope.$on('$stateChangeStart1', function (event, toState, toParams) {
            var requireLogin = toState.data.requireLogin;
            if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
                event.preventDefault();
                $state.go('login');
            }
        });
    }

    angular
        .module('app')
        .run(init);

    init.$inject = ['$rootScope'];
	
    function init($rootScope) {
		var mode;
		if ($rootScope.mode === undefined) {
			mode = localStorage.getItem('ui-warehouse.mode');
			mode = JSON.parse(mode);
			$rootScope.mode = mode;
		}
		
		if ($rootScope.mode === null) {
			mode = 'OFF-LINE (LocalStorage)';
			localStorage.setItem('ui-warehouse.mode', JSON.stringify(mode));
			$rootScope.mode = mode;
		}
		
        $rootScope.myConfig = {
            webUrl: 'http://ui-warehouse.herokuapp.com/' //TODO Heroku MongoDB
            //webUrl: 'http://localhost:3000/' //TODO Local MongoDB
        };
    }

})();