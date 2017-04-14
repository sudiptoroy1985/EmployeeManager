/// <reference path="E:\Mahesh_New\EZest\NG_App\NG_App\Scripts/angular.min.js" />
/// <reference path="module.js" />
/// <reference path="empservice.js" />


app.controller('empcontroller', function($scope, empserv) {
    $scope.Employee = {
        employeeId: 0,
        employeeName: '',
        Salary: 0,
        DepartmentName: '',
        //Designation:''
    };
    $scope.Employees = [];
    $scope.Message = '';

    loadData();

    function loadData() {
        var promise = empserv.getData();
        promise.then(function(resp) {
            $scope.Employees = resp.data;
        }, function(err) {
            $scope.Message = "Error Occured " + err.status;
        });
    };

    function clearData() {
        $scope.Employee.employeeId = 0;
        $scope.Employee.employeeName = '';
        $scope.Employee.Salary = 0;
        $scope.Employee.DepartmentName = '';
    }

    $scope.clear = function() {
        clearData();
        //$scope.Employee.Designation = '';
    };

    $scope.save = function() {
        var promise = empserv.postData($scope.Employee);
        promise.then(function(resp) {
            $scope.Employee.EmpNo = resp.data.EmpNo;
            loadData();
        }, function(err) {
            $scope.Message = "Error Occured " + err.status;
        });
    };

    for (var i = 0, length = $scope.Employees.length; i < length; i++) {
        $scope.UpdatingEmployee[$scope.Employees[i].id] = false;
    }

    $scope.UpdatingEmployee = [];

    $scope.modify = function(employee) {
        $scope.UpdatingEmployee[employee.employeeId] = true;
    };


    $scope.Save = function(employee) {
        $scope.UpdatingEmployee[employee.employeeId] = false;
    };


    $scope.getSelectedRecord = function(emp) {
        $scope.Employee.employeeId = emp.employeeId;
        $scope.Employee.employeeName = emp.employeeName;
        $scope.Employee.Salary = emp.Salary;
        $scope.Employee.DepartmentName = emp.DepartmentName;

    };

    $scope.SaveChanges = function(emp) {
        $scope.Employee.employeeId = emp.employeeId;
        $scope.Employee.employeeName = emp.employeeName;
        $scope.Employee.Salary = emp.Salary;
        $scope.Employee.DepartmentName = emp.DepartmentName;
        var promise = empserv.putData($scope.Employee.employeeId, $scope.Employee);
        promise.then(function (resp) {
            $scope.Employee.EmpNo = resp.data.EmpNo;
            loadData();
        }, function (err) {
            $scope.Message = "Error Occured " + err.status;
        });
        $scope.UpdatingEmployee[emp.employeeId] = false;
    }

             




    $scope.Delete = function (empNo) {
        $scope.Employee.employeeId = empNo;
        var promise = empserv.deleteData($scope.Employee.employeeId);
        promise.then(function (resp) {
            loadData();
            clearData();
        }, function (err) {
            $scope.Message = "Error Occured " + err.status;
        });
    };

});