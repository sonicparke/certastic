angular.module('app').factory('wsCachedBelts', function (wsBelt) {
    var beltList;

    return {
        query: function() {
            if(!beltList) {
                beltList = wsBelt.query();
            }

            return beltList;
        }

    };
});