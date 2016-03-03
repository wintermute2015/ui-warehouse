(function () {
    'use strict';

    angular
        .module('app')
        .controller('UsersDialogCtrl', UsersDialogCtrl);

    UsersDialogCtrl.$inject = ['$state', '$rootScope', '$timeout', 'UsersService', 'UsersLocalStorage', '$stateParams'];

    function UsersDialogCtrl($state, $rootScope, $timeout, UsersService, UsersLocalStorage, $stateParams) {
        var vm = this;

        angular.extend(vm, {
            init: init,
            usersDelete: usersDelete,
            _deleteItem: deleteItem,
            usersEditBack: usersEditBack,
            _errorHandler: errorHandler
        });

        angular.extend(vm, $stateParams.item);

        init();

        function init() {
            if ($stateParams.item.id == undefined) {
                $state.go('main.users');
            }
            $rootScope.loading = false;
        }

        function usersDelete() {
            $rootScope.loading = true;
            $rootScope.myError = false;

            if ($rootScope.mode == 'ON-LINE (Heroku)') {
                UsersService.deleteItem(vm.id)
                    .then(function () {
                        deleteItem(vm.id);
                        $rootScope.myError = false;
                        $state.go('main.users');
                    })
                    .catch(errorHandler);
            } else {
                UsersLocalStorage.deleteItem(vm.id);
                $rootScope.loading = true;
                $timeout(function () {
                    $state.go('main.users');
                }, 100);
            }
        }

        function deleteItem(id) {
            var users = UsersService.users;
            for (var i = 0; i < users.length; i++) {
                if (users[i].id == id) {
                    users.splice(i, 1);
                    break;
                }
            }
        }

        function usersEditBack() {
            $rootScope.loading = true;
            $timeout(function () {
                $state.go('main.users');
            }, 100);
        }

        function errorHandler() {
            $rootScope.loading = false;
            $rootScope.myError = true;
        }
    }
})();