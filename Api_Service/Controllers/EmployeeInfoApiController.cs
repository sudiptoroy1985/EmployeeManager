using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using Api_Service.Models;

namespace Api_Service.Controllers
{
    [EnableCors("*","*","*")]
    public class EmployeeInfoApiController : ApiController
    {
        ApplicationEntities _ctx;

        public EmployeeInfoApiController()
        {
            _ctx = new ApplicationEntities();
        }

        [ResponseType(typeof(IEnumerable<EmployeeInfo>))]
        public IHttpActionResult Get()
        {
            var emps = _ctx.Employee.ToList();
            return Ok(emps);
        }

        [ResponseType(typeof (EmployeeInfo))]
        public IHttpActionResult Get(int id)
        {
            var emp = _ctx.Employee.Find(id);
            if (emp != null)
            {
                return Ok(emp);
            }
            return NotFound();
        }

        [ResponseType(typeof(EmployeeInfo))]
        public IHttpActionResult Post(EmployeeInfo emp)
        {
            _ctx.Employee.Add(emp);

            _ctx.SaveChanges();

            return Ok(emp);
           
        }

        [ResponseType(typeof(EmployeeInfo))]
        public IHttpActionResult Put(int Id , EmployeeInfo emp)
        {
            var empOrg = _ctx.Employee.Find(Id);

            if (empOrg != null)
            {
                empOrg.DepartmentName = emp.DepartmentName;

                empOrg.employeeName = emp.employeeName;

                empOrg.Salary = emp.Salary;

                _ctx.Entry<EmployeeInfo>(empOrg).State = EntityState.Modified;

                _ctx.SaveChanges();

                return Ok(emp);
            }

            return NotFound();
        }


        [ResponseType(typeof(bool))]
        public IHttpActionResult Delete(int Id)
        {
            var empOrg = _ctx.Employee.Find(Id);

            if (empOrg != null)
            {
                _ctx.Employee.Remove(empOrg);

                _ctx.SaveChanges();

                return Ok(true);
            }

            return NotFound();
        }
    }
}
