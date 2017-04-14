using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using API_Service.Models;
using System.Web.Http.Description;

namespace API_Service.Controllers
{
    public class CatProdAPIController : ApiController
    {
        CategoryDatabase categories;
        ProductDatabase products;

        public CatProdAPIController()
        {
            categories = new CategoryDatabase();
            products = new ProductDatabase(); 
        }

        [Route("Cat/Prod/{catName}")]
        [ResponseType(typeof(IEnumerable<Product>))]
        public IHttpActionResult GetProductsByCategory(string catName)
        {
            var catid = (from c in categories
                         where c.CategoryName == catName
                         select c).FirstOrDefault().CategoryId;

            var prods = (from p in products
                         where p.CategoryId == catid
                         select p).ToList();

            return Ok(prods);
                
        }

        [Route("GetAllProducts")]
        [ResponseType(typeof(IEnumerable<Product>))]
        public IHttpActionResult GetProducts()
        {
            
            var prods = (from p in products
                         select p).ToList();

            return Ok(prods);

        }


        [Route("Cat/Prod/{prdname}/{condition}/{catname}")]
        [ResponseType(typeof(IEnumerable<Product>))]
        public IHttpActionResult GetData(string prdname,string condition, string catname)
        {
            List<Product> Prds = new List<Product>(); 
            var catid = (from c in categories
                         where c.CategoryName == catname
                         select c).FirstOrDefault().CategoryId;

            switch (condition)
            {
                case "OR":
                    Prds = (from p in products
                            where p.ProductName.StartsWith(prdname) || p.CategoryId == catid
                            select p).ToList();
                    break;
                case "AND":
                    Prds = (from p in products
                            where p.ProductName.StartsWith(prdname) && p.CategoryId == catid
                            select p).ToList();
                    break ;
            }

            return Ok(Prds);

        }

        [Route("FilteredProd/{catName}/{operand}/{price}")]
        [ResponseType(typeof(IEnumerable<Product>))]
        public IHttpActionResult GetProductsFilteredByPriceAndCategory(string catName, string operand, string price)
        {
            List<Product> Prds = new List<Product>();

            var expr = (from c in categories
                where c.CategoryName == catName
                select c).FirstOrDefault();

            if (expr != null)
            {
                var catid = expr.CategoryId;

                switch (operand)
                {
                    case "1":
                        Prds = (from p in products
                            where p.Price == Convert.ToInt32(price) && p.CategoryId == catid
                            select p).ToList();
                        break;
                    case "2":
                        Prds = (from p in products
                            where p.Price > Convert.ToInt32(price) && p.CategoryId == catid
                            select p).ToList();
                        break;
                    case "3":
                        Prds = (from p in products
                                where p.Price < Convert.ToInt32(price) && p.CategoryId == catid
                                select p).ToList();
                        break;
                    case "4":
                        Prds = (from p in products
                                where p.Price >= Convert.ToInt32(price) && p.CategoryId == catid
                                select p).ToList();
                        break;
                    case "5":
                        Prds = (from p in products
                                where p.Price <= Convert.ToInt32(price) && p.CategoryId == catid
                                select p).ToList();
                        break;
                }
            }

            return Ok(Prds);

        }



        [Route("GetAllCategories")]
        [ResponseType(typeof(Dictionary<string,string>))]
        public IHttpActionResult GetAllCategories()
        {
            var validCategories = (from c in categories
                                   select c.CategoryName).ToList();

            return Ok(validCategories);
        }


        [Route("GetAllPrices")]
        [ResponseType(typeof(IEnumerable<int>))]
        public IHttpActionResult GetAllPrices()
        {
            var validProductPrices = (from p in products
                                   select p.Price).ToList();

            return Ok(validProductPrices);
        }

    }
}
