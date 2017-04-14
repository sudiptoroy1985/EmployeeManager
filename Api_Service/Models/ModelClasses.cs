using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Api_Service.Models
{
    public class EmployeeInfo
    {
        [Key]
        public int employeeId { get; set; }
        public string employeeName { get; set; }
        public int Salary { get; set; }
        public string DepartmentName { get; set; }
    }
}