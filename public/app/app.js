angular.module('app', ['ngResource','ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider){

    var routeRoleChecks = {
        admin: {
            auth: function(wsAuth){
                console.log('auth admin works');
                return wsAuth.authorizeCurrentUserForRoute('admin');
            }
        },
        user: {
            auth: function(wsAuth){
                return wsAuth.authorizeAuthenticatedUserForRoute();
            }
        }
    };

    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/',{
            templateUrl: '/partials/main/main',
            controller: 'wsMainCtrl'
        })
        .when('/admin/users',{
            templateUrl: '/partials/admin/user-list',
            controller: 'wsUserListCtrl',
            resolve: routeRoleChecks.admin
            }
        )
        .when('/signup',{
            templateUrl: '/partials/account/signup',
            controller: 'wsSignupCtrl'
            }
        )
        .when('/profile',{
            templateUrl: '/partials/account/profile',
            controller: 'wsProfileCtrl',
            resolve: routeRoleChecks.user
            }
        )
        .when('/belts',{
            templateUrl: '/partials/belts/belt-list',
            controller: 'wsBeltListCtrl'
            }
        )
        .when('/belts/:id',{
            templateUrl: '/partials/belts/belt-details',
            controller: 'wsBeltDetailsCtrl'
            }
        );
});

angular.module('app').run(function($rootScope, $location){
    $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection){
        if(rejection === 'not authorized') {
            $location.path('/');
        }
    });
});