angular.module('app').value('wsToastr', toastr);

angular.module('app').factory('wsNotifier', function(wsToastr){
    return {
        notify: function(msg) {
            wsToastr.success(msg);
            console.log('msg :', msg);
        },
        error: function(msg) {
            wsToastr.error(msg);
            console.log('msg :', msg);
        }
    }
})