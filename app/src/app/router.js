(function () {
    'use strict';

    angular
        .module('app')
        .config(routeConfig);

	routeConfig.$inject = ['$stateProvider','$urlRouterProvider'];

    function routeConfig($stateProvider, $urlRouterProvider) {
        //$urlRouterProvider.otherwise('/login');  //TODO
        $urlRouterProvider.otherwise('/main');
		
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'login/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'loginCtrl',
                data: {
                    requireLogin: false
                }
            })

            .state('main', {
                url: '/main',
                data: {
                    requireLogin: true
                },
                views: {
                    '': {
                        template: //'<div ui-view="menu"></div>' +
								  '<div ui-view="display"></div>'
                    },
                    'menu@main': {
						templateUrl: 'common/menu.html',
                        controller: 'MenuCtrl',
                        controllerAs: 'menuCtrl'
					},
                    'display@main': {
						templateUrl: 'app/main.html',
                        controller: 'MainCtrl',
                        controllerAs: 'mainCtrl'
                    }
                }
            })

            .state('main.config', {
                url: '/config',
                views: {
                    'display': {
                        templateUrl: 'config/config.html',
                        controller: 'ConfigCtrl',
                        controllerAs: 'configCtrl'
                    }
                },
                data: {
                    requireLogin: true
                }
            })

            .state('main.store', {
                url: '/store',
                views: {
                    'display': {
                        templateUrl: 'store/store.html',
                        controller: 'StoreCtrl',
                        controllerAs: 'storeCtrl'
						}
                },
                data: {
                    requireLogin: true
                }
            })

            .state('main.goods', {
                url: '/goods',
                views: {
                    'display': {
                        templateUrl: 'goods/goods.html',
                        controller: 'GoodsCtrl',
                        controllerAs: 'goodsCtrl'
                    }
                },
                data: {
                    requireLogin: true
                }
            })

            .state('main.goods-add', {
                url: '/goods-add',
                params: {item:{}},
                views: {
                    'display': {
                        templateUrl: 'goods/goods-add.html',
                        controller: 'GoodsAddCtrl',
                        controllerAs: 'goodsAddCtrl'
                    }
                },
                data: {
                    requireLogin: true
                }
            })

            .state('main.goods-edit', {
                url: '/goods-edit',
                params: {item:{}},
                views: {
                    'display': {
                        templateUrl: 'goods/goods-edit.html',
                        controller: 'GoodsEditCtrl',
                        controllerAs: 'goodsEditCtrl'
                    }
                },
                data: {
                    requireLogin: true
                }
            })

            .state('main.goods-dialog', {
                url: '/goods-dialog',
                params: {item:{}},
                views: {
                    'display': {
                        templateUrl: 'goods/goods-dialog.html',
                        controller: 'GoodsDialogCtrl',
                        controllerAs: 'goodsDialogCtrl'
                    }
                },
                data: {
                    requireLogin: true
                }
            })

            .state('main.clients', {
                url: '/clients',
                views: {
                    'display': {
                        templateUrl: 'clients/clients.html',
                        controller: 'ClientsCtrl',
                        controllerAs: 'clientsCtrl'
                    }
                },
                data: {
                    requireLogin: true
                }
            })

            .state('main.clients-add', {
                url: '/clients-add',
                views: {
                    'display': {
                        templateUrl: 'clients/clients-add.html',
                        controller: 'ClientsAddCtrl',
                        controllerAs: 'clientsAddCtrl'
                    }
                },
                data: {
                    requireLogin: true
                }
            })

            .state('main.clients-edit', {
                url: '/clients-edit',
                params: {item:{}},
                views: {
                    'display': {
                        templateUrl: 'clients/clients-edit.html',
                        controller: 'ClientsEditCtrl',
                        controllerAs: 'clientsEditCtrl'
                    }
                },
                data: {
                    requireLogin: true
                }
            })

            .state('main.clients-dialog', {
                url: '/clients-dialog',
                params: {item:{}},
                views: {
                    'display': {
                        templateUrl: 'clients/clients-dialog.html',
                        controller: 'ClientsDialogCtrl',
                        controllerAs: 'clientsDialogCtrl'
                    }
                },
                data: {
                    requireLogin: true
                }
            })

            .state('main.inputs', {
                url: '/inputs',
                views: {
                    'display': {
                        templateUrl: 'inputs/inputs.html',
                        controller: 'InputsCtrl',
                        controllerAs: 'inputsCtrl'
                    }
                },
                data: {
                    requireLogin: true
                }
            })

            .state('main.inputs-add', {
                url: '/inputs-add',
                params: {item:{}},
                views: {
                    'display': {
                        templateUrl: 'inputs/inputs-add.html',
                        controller: 'InputsAddCtrl',
                        controllerAs: 'inputsAddCtrl'
                    }
                },
                data: {
                    requireLogin: true
                }
            })

            .state('main.inputs-edit', {
                url: '/inputs-edit',
                params: {item:{}},
                views: {
                    'display': {
                        templateUrl: 'inputs/inputs-edit.html',
                        controller: 'InputsEditCtrl',
                        controllerAs: 'inputsEditCtrl'
                    }
                },
                data: {
                    requireLogin: true
                }
            })

            .state('main.inputs-dialog', {
                url: '/inputs-dialog',
                params: {item:{}},
                views: {
                    'display': {
                        templateUrl: 'inputs/inputs-dialog.html',
                        controller: 'InputsDialogCtrl',
                        controllerAs: 'inputsDialogCtrl'
                    }
                },
                data: {
                    requireLogin: true
                }
            })

            .state('main.inputs-invoice', {
                url: '/inputs-invoice',
                params: {item:{}},
                views: {
                    'display': {
                        templateUrl: 'inputs/inputs-invoice.html',
                        controller: 'InputsInvoiceCtrl',
                        controllerAs: 'inputsInvoiceCtrl'
                    }
                },
                data: {
                    requireLogin: true
                }
            })

            .state('main.inputs-invoice-add', {
                url: '/inputs-invoice-add',
                params: {item:{}},
                views: {
                    'display': {
                        templateUrl: 'inputs/inputs-invoice-add.html',
                        controller: 'InputsInvoiceAddCtrl',
                        controllerAs: 'inputsInvoiceAddCtrl'
                    }
                },
                data: {
                    requireLogin: true
                }
            })

            .state('main.inputs-invoice-edit', {
                url: '/inputs-invoice-edit',
                params: {item:{},invoice:{}},
                views: {
                    'display': {
                        templateUrl: 'inputs/inputs-invoice-edit.html',
                        controller: 'InputsInvoiceEditCtrl',
                        controllerAs: 'inputsInvoiceEditCtrl'
                    }
                }
            })

            .state('main.inputs-invoice-dialog', {
                url: '/inputs-invoice-dialog',
                params: {item:{},invoice:{}},
                views: {
                    'display': {
                        templateUrl: 'inputs/inputs-invoice-dialog.html',
                        controller: 'InputsInvoiceDialogCtrl',
                        controllerAs: 'inputsInvoiceDialogCtrl'
                    }
                }
            })

            .state('main.outputs', {
                url: '/outputs',
                views: {
                    'display': {
                        templateUrl: 'outputs/outputs.html',
                        controller: 'OutputsCtrl',
                        controllerAs: 'outputsCtrl'
                    }
                },
                data: {
                    requireLogin: true
                }
            })

            .state('main.outputs-add', {
                url: '/outputs-add',
                params: {item:{}},
                views: {
                    'display': {
                        templateUrl: 'outputs/outputs-add.html',
                        controller: 'OutputsAddCtrl',
                        controllerAs: 'outputsAddCtrl'
                    }
                },
                data: {
                    requireLogin: true
                }
            })

            .state('main.outputs-edit', {
                url: '/outputs-edit',
                params: {item:{}},
                views: {
                    'display': {
                        templateUrl: 'outputs/outputs-edit.html',
                        controller: 'OutputsEditCtrl',
                        controllerAs: 'outputsEditCtrl'
                    }
                }
            })

            .state('main.outputs-dialog', {
                url: '/outputs-dialog',
                params: {item:{}},
                views: {
                    'display': {
                        templateUrl: 'outputs/outputs-dialog.html',
                        controller: 'OutputsDialogCtrl',
                        controllerAs: 'outputsDialogCtrl'
                    }
                },
                data: {
                    requireLogin: true
                }
            })

            .state('main.outputs-invoice', {
                url: '/outputs-invoice',
                params: {item:{}},
                views: {
                    'display': {
                        templateUrl: 'outputs/outputs-invoice.html',
                        controller: 'OutputsInvoiceCtrl',
                        controllerAs: 'outputsInvoiceCtrl'
                    }
                },
                data: {
                    requireLogin: true
                }
            })

            .state('main.outputs-invoice-add', {
                url: '/outputs-invoice-add',
                params: {item:{}},
                views: {
                    'display': {
                        templateUrl: 'outputs/outputs-invoice-add.html',
                        controller: 'OutputsInvoiceAddCtrl',
                        controllerAs: 'outputsInvoiceAddCtrl'
                    }
                },
                data: {
                    requireLogin: true
                }
            })

            .state('main.outputs-invoice-edit', {
                url: '/outputs-invoice-edit',
                params: {item:{},invoice:{}},
                views: {
                    'display': {
                        templateUrl: 'outputs/outputs-invoice-edit.html',
                        controller: 'OutputsInvoiceEditCtrl',
                        controllerAs: 'outputsInvoiceEditCtrl'
                    }
                },
                data: {
                    requireLogin: true
                }
            })

            .state('main.outputs-invoice-dialog', {
                url: '/outputs-invoice-dialog',
                params: {item:{},invoice:{}},
                views: {
                    'display': {
                        templateUrl: 'outputs/outputs-invoice-dialog.html',
                        controller: 'OutputsInvoiceDialogCtrl',
                        controllerAs: 'outputsInvoiceDialogCtrl'
                    }
                },
                data: {
                    requireLogin: true
                }
            })

            .state('main.users', {
                url: '/users',
                views: {
                    'display': {
                        templateUrl: 'users/users.html',
                        controller: 'UsersCtrl',
                        controllerAs: 'usersCtrl'
                    }
                },
                data: {
                    requireLogin: true
                }
            })

            .state('main.users-add', {
                url: '/users-add',
                params: {item:{}},
                views: {
                    'display': {
                        templateUrl: 'users/users-add.html',
                        controller: 'UsersAddCtrl',
                        controllerAs: 'usersAddCtrl'
                    }
                },
                data: {
                    requireLogin: true
                }
            })
			
			.state('main.users-edit', {
                url: '/users-edit',
                params: {item:{}},
                views: {
                    'display': {
                        templateUrl: 'users/users-edit.html',
                        controller: 'UsersEditCtrl',
                        controllerAs: 'usersEditCtrl'
                    }
                },
                data: {
                    requireLogin: true
                }
            })

            .state('main.users-dialog', {
                url: '/users-dialog',
                params: {item:{}},
                views: {
                    'display': {
                        templateUrl: 'users/users-dialog.html',
                        controller: 'UsersDialogCtrl',
                        controllerAs: 'usersDialogCtrl'
                    }
                },
                data: {
                    requireLogin: true
                }
            })
    }
})();