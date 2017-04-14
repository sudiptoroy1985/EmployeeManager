using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace API_Service.Models
{
    public class Category
    {
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
    }

    public class CategoryDatabase : List<Category>
    {
        public CategoryDatabase()
        {
            Add(new Category() { CategoryId=1,CategoryName="C1"});
            Add(new Category() { CategoryId = 2, CategoryName = "C2" });
            Add(new Category() { CategoryId = 3, CategoryName = "C3" });
        }
    }

    public class Product
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public int Price { get; set; }
        public int CategoryId { get; set; }

    }

    public class ProductDatabase : List<Product>
    {
        public ProductDatabase()
        {
            Add(new Product() {ProductId=101,ProductName="P001",Price=1001,CategoryId=1 });
            Add(new Product() { ProductId = 102, ProductName = "CX01", Price = 2000, CategoryId = 2 });
            Add(new Product() { ProductId = 103, ProductName = "XY01", Price = 3000, CategoryId = 3 });
            Add(new Product() { ProductId = 104, ProductName = "PS01", Price = 4000, CategoryId = 1 });
            Add(new Product() { ProductId = 105, ProductName = "CS01", Price = 5000, CategoryId = 2 });
            Add(new Product() { ProductId = 106, ProductName = "MN01", Price = 6000, CategoryId = 3 });
        }
    }

}