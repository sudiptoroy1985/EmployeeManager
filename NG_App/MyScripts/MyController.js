/// <reference path="module.js" />
/// <reference path="c:\users\kolor\documents\visual studio 2015\Projects\NG_App\NG_App\Scripts/angular.min.js" />
/// <reference path="~/Scripts/angular.js" />
/// <reference path="C:\Users\kolor\Documents\Visual Studio 2015\Projects\NG_App\NG_App\Scripts/angular.min.js" />

app.controller("MyController", function($scope) {
    $scope.Employee = {
        checked: true,
        EmpNo: 0,
        EmpName: "",
        Salary: 0,
        DeptName: "",
        Designation: ""
    };

    $scope.Employees = [
       
    ];

    $scope.filter = 'query.EmpName';

    $scope.FilterChanged = function () {
            $scope.filter = 'query.EmpName';
    };

    $scope.clear = function () {
        
        $scope.Employee.EmpNo = 0;
        $scope.Employee.EmpName = "";
        $scope.Employee.Salary = 0;
        $scope.Employee.DeptName = "";
        $scope.Employee.Designation = "";
    };

    $scope.save = function() {
        $scope.Employees.push({
            EmpNo: $scope.Employee.EmpNo,
            EmpName: $scope.Employee.EmpName,
            Salary: $scope.Employee.Salary,
            DeptName: $scope.Employee.DeptName,
            Designation: $scope.Employee.Designation
        });
    };

    $scope.getSelectedRecord = function(emp) {
        $scope.Employee.EmpNo = emp.EmpNo;
        $scope.Employee.EmpName = emp.EmpName;
        $scope.Employee.Salary = emp.Salary;
        $scope.Employee.DeptName = emp.DeptName;
        $scope.Employee.Designation = emp.Designation;
    };


    $scope.Delete = function (empNo) {

        var index = -1;

        var comArr = eval($scope.Employees);

        for (var i = 0; i < comArr.length; i++) {
            if (comArr[i].EmpNo === empNo) {
                index = i;
                break;
            }
        }
       
        $scope.Employees.splice(index, 1);

    };


});

