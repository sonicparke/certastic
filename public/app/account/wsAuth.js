angular.module('app').factory('wsAuth', function($http, wsIdentity, $q, wsUser) {
    return {
        authenticateUser: function(username, password) {
            var deferred = $q.defer();
            $http.post('/login', {username:username, password:password})
            .then(function(response){
                if(response.data.success){
                    var user = new wsUser();
                    angular.extend(user, response.data.user);
                    wsIdentity.currentUser = user;
                    deferred.resolve(true);
                } else {
                    deferred.resolve(false);
                }
            });
            return deferred.promise;
        },
        createUser: function(newUserData) {
            var newUser = new wsUser(newUserData);
            var deferred = $q.defer();
            newUser.$save().then(function() {
                wsIdentity.currentUser = newUser;
                deferred.resolve();
            }, function(response){
                deferred.reject(response.data.reason);
            })
            return deferred.promise;
        },
        updateCurrentUser: function(newUserData){
            var deferred = $q.defer();
            var clone = angular.copy(wsIdentity.currentUser);
            angular.extend(clone, newUserData);
            clone.$update().then(function() {
                wsIdentity.currentUser = clone;
                deferred.resolve();
            }, function(response){
                deferred.reject(response.data.reason);
            });
            return deferred.promise;
        },
        logoutUser: function() {
            var deferred = $q.defer();
            $http.post('/logout', {logout:true})
            .then(function(){
                    wsIdentity.currentUser = undefined;
                    deferred.resolve();
            });
            return deferred.promise;
        },
        authorizeCurrentUserForRoute: function(role) {
            if(wsIdentity.isAuthorized(role) ){
                return true;
            } else {
                return $q.reject('not authorized');
            }
        },
        authorizeAuthenticatedUserForRoute: function() {
            if(wsIdentity.isAuthenticated() ){
                return true;
            } else {
                return $q.reject('not authenticated');
            }
        }
    }
})