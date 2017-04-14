/// <reference path="E:\Mahesh_New\EZest\NG_App\NG_App\Scripts/angular.min.js" />
/// <reference path="module.js" />
/// <reference path="ProductService.js" />



app.controller('ProductController', function($scope, productserv) {

    $scope.Product = {
        ProductId: 0,
        ProductName: '',
        Price: 0,
        CategoryId: 0,
        //Designation:''
    };

    $scope.Operand = {
        OperandId: 0,
        Value: '',
      };

  
    $scope.Products = [];
    $scope.Categories = [];
    $scope.Prices = [];

    $scope.Operators = [
    {
        id: 1,
        value: "="
    },
    {
    id: 2,
    value: ">"
    },
    {
         id: 3,
         value: "<"
    },
    {
        id: 4,
        value: ">="
    },
    {
        id: 5,
        value: "<="
    }
    
    ];



        

    $scope.GetFilteredProducts = function() {
        var selectedCategory = $scope.selectedCategory;
        var selectedOperator = $scope.selectedOperator;
        var selectedPrice = $scope.selectedPrice;
        var promise = productserv.getFilteredProducts(selectedCategory, selectedOperator, selectedPrice);
        promise.then(function(resp) {
            $scope.Products = resp.data;
        }, function(err) {
            $scope.Message = "Error Occured " + err.status;
        });
    };

    $scope.ClearFilters = function() {
        loadAllProducts();
        loadcategories();
        loadPrices();
    }
   
   
    loadcategories();
    loadPrices();
    loadAllProducts();

    function loadcategories() {
        
        var promise = productserv.getAllcategories();
        promise.then(function (resp) {
            $scope.Categories = resp.data;
        }, function (err) {
            $scope.Message = "Error Occured " + err.status;
        });
    };

    function loadPrices() {
        var promise = productserv.getAllPrices();
        promise.then(function (resp) {
            $scope.Prices = resp.data;
        }, function (err) {
            $scope.Message = "Error Occured " + err.status;
        });
    };

    function loadAllProducts() {
        var promise = productserv.getAllProducts();
        promise.then(function (resp) {
            $scope.Products = resp.data;
        }, function (err) {
            $scope.Message = "Error Occured " + err.status;
        });
    };
});