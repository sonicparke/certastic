angular.module('app').factory('wsIdentity', ['$window', 'wsUser', function ($window, wsUser) {
    var currentUser;
    if(!!$window.bootstrappedUserObject){
        currentUser = new wsUser();
        angular.extend(currentUser, $window.bootstrappedUserObject);
    };
    return {
        currentUser: currentUser,
        isAuthenticated: function(){
            return !!this.currentUser;
        },
        isAuthorized: function(role){
            return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
        }
    };
}])