(function () {
    'use strict';

    angular
        .module('app')
        .controller('OutputsInvoiceCtrl', OutputsInvoiceCtrl);

    OutputsInvoiceCtrl.$inject = ['$state', '$rootScope', '$filter', '$timeout', 'OutputsInvoiceService', 'OutputsInvoiceLocalStorage', '$stateParams'];

    function OutputsInvoiceCtrl($state, $rootScope, $filter, $timeout, OutputsInvoiceService, OutputsInvoiceLocalStorage, $stateParams) {
        var vm = this;

        angular.extend(vm, {
            init: init,
			_getOutputInvoicesOn: getOutputInvoicesOn,
            addInvoice: addInvoice,
            editInvoice: editInvoice,
            outputEditExitInvoice: outputEditExitInvoice,
            goOutputs: goOutputs,
            _errorHandler: errorHandler					
        });

        angular.extend(vm, $stateParams.item);

        init();

        function init() {
            $rootScope.myError = false;
            $rootScope.loading = false;
		
			if ($rootScope.mode == 'ON-LINE (Heroku)') {
                getOutputInvoicesOn();
            } else {
				vm.outputInvoices = [].concat(OutputsInvoiceLocalStorage.getOutputInvoice());
				$rootScope.myError = false;
				$rootScope.loading = false;
            }
			
            vm.total = $filter('number')(vm.total, 2);
            vm.sortInvoice = 'invoiceID';
            vm.invoiceFilter = {invoiceID: $stateParams.item.id};
        }
		
        function getOutputInvoicesOn() {
			OutputsInvoiceService.getInvoices()
				.then(function(data){
					vm.outputInvoices = data.data;
					$rootScope.myError = false;
					$rootScope.loading = false;
				})
				.catch(errorHandler);
		}
		
        function editInvoice(invoice) {
            $rootScope.loading = true;
            $timeout(function () {
                $state.go('main.outputs-invoice-edit', {item: $stateParams.item, invoice: invoice});
            }, 100);
        }

        function addInvoice() {
            $rootScope.myError = false;
            $rootScope.loading = true;
            $timeout(function () {
                $state.go('main.outputs-invoice-add', {item: $stateParams.item});
            }, 100);
        }

        function outputEditExitInvoice() {
            $rootScope.loading = true;
            $timeout(function () {
                $state.go('main.outputs-edit', {item: $stateParams.item});
            }, 100);
        }

        function goOutputs() {
            $rootScope.myError = false;
            $rootScope.loading = true;
            $timeout(function () {
                $state.go('main.outputs');
            }, 100);
        }
		
        function errorHandler() {
            $rootScope.loading = false;
            $rootScope.myError = true;
        }			
    }
})();