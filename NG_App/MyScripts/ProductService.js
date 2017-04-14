
/// <reference path="C:\Users\kolor\Documents\Visual Studio 2015\Projects\NG_App\NG_App\Scripts/angular.min.js" />
/// <reference path="module.js" />


app.service('productserv', function ($http) {


    this.getProductByCategory = function () {
        
        var response = $http.get('http://localhost:21430/api/EmployeeInfoAPI');
        return response;
    };

    this.getAllcategories = function() {
        var response = $http.get('http://localhost:21430/GetAllCategories');
        return response;
    }

    this.getAllPrices = function () {
        var response = $http.get('http://localhost:21430/GetAllPrices');
        return response;
    }

    this.getAllProducts = function () {
        var response = $http.get('http://localhost:21430/GetAllProducts');
        return response;
    }

    this.getFilteredProducts = function (catName, operand, price) {
       var response = $http({
           url: "http://localhost:21430/FilteredProd/" + catName + "/" + operand.id + "/" + price ,
            method: "Get"
        });
        return response;
    };


});