using Microsoft.AspNetCore.Mvc;

namespace DocuSignWeb.Controllers
{
    public class Account : Controller
    {
        // GET
        public IActionResult Login()
        {
            return View();
        }

        public IActionResult Register()
        {
            return View();
        }
    }
}