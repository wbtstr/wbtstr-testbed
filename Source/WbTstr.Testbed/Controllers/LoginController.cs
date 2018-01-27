using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WbTstr.Testbed.Models;

namespace WbTstr.Testbed.Controllers
{
    public class LoginController : Controller
    {
        [Authorize]
        public IActionResult Index()
        {
            return View();
        }
    }
}
