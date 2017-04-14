/// <reference path="E:\Mahesh_New\EZest\NG_App\NG_App\Scripts/angular.min.js" />
/// <reference path="module.js" />
app.service('empserv', function ($http) {
    this.getData = function () {
        
        var response = $http.get('http://localhost:21430/api/EmployeeInfoAPI');
        return response;
    };
     
    this.postData = function (emp) {
        var response = $http({
            url: 'http://localhost:21430/api/EmployeeInfoAPI',
            method:'post',
            data: emp,
            datatype: 'json',
            contenttype: 'application/json;utf-8'
        });
        return response;
    };

    this.putData = function (id, emp) {
        debugger;
        var response = $http({
            url: 'http://localhost:21430/api/EmployeeInfoAPI/' + id,
            method:'put',
            data: emp,
            datatype: 'json',
            contenttype: 'application/json;utf-8'
        });
        return response;
    };
    this.deleteData = function (id) {
        var response = $http({
            url: 'http://localhost:21430/api/EmployeeInfoAPI/' + id,
            method: 'delete'
        });
        return response;
    };

});