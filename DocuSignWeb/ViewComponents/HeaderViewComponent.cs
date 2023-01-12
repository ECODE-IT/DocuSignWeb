using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace DocuSignWeb.ViewComponents
{
    public class HeaderViewComponent : ViewComponent
    {
        // List of nav links
        private readonly List<NavLink> _navLinks = new List<NavLink>
        {
            new NavLink { Controller = "Home", Action = "Index", Text = "Home" },
            new NavLink { Controller = "#", Action = "#", Text = "Manage" },
            new NavLink { Controller = "#", Action = "#", Text = "Reports" },
        };
        
        public async Task<IViewComponentResult> InvokeAsync()
        {
            // Get the current controller and action
            var currentController = ViewContext.RouteData.Values["controller"].ToString();
            var currentAction = ViewContext.RouteData.Values["action"].ToString();

            // Set the active nav link
            _setActiveNavLink(currentController, currentAction);

            return View(_navLinks);
        }
        
        private void _setActiveNavLink(string currentController, string currentAction)
        {
            foreach (var navLink in _navLinks)
            {
                if (navLink.Controller == currentController && navLink.Action == currentAction)
                {
                    navLink.IsActive = true;
                }
            }
        }
    }

    public class NavLink
    {
        public string Action { get; set; }  
        public string Controller { get; set; }
        public string Text { get; set; }
        public bool IsActive { get; set; } = false;

    }
}
