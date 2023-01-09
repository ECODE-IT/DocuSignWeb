using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace DocuSignWeb.ViewComponents
{
    public class SideMenuViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View();
        }

        private static List<SideMenuCategory> GetCategories()
        {
            return new List<SideMenuCategory>{
                new SideMenuCategory(
                    SideMenuCategories.Envelope,
                    new List<SideMenuItem>
                    {
                        new SideMenuItem(SideMenuItems.Inbox, "fa-inbox"),
                        new SideMenuItem(SideMenuItems.Sent, "fa-paper-plane"),
                        new SideMenuItem(SideMenuItems.Drafts, "fa-pen"),
                        new SideMenuItem(SideMenuItems.Deleted, "fa-trash")
                        
                    })
            };
        }
    }

    public class SideMenuCategory
    {
        public SideMenuCategory(SideMenuCategories category, List<SideMenuItem> menuItems)
        {
            Name = category.ToString();
            MenuItems = menuItems;
        }

        public string Name { get; set; }
        public List<SideMenuItem> MenuItems { get; }
    }
    
    public class SideMenuItem
    {
        private readonly string _name;

        public SideMenuItem(SideMenuItems item, string icon)
        {
            _name = item.ToString();
            Icon = icon;
        }

        public override string ToString()
        {
            return _name;
        }

        public string Icon { get; set; }
    }

    public enum SideMenuCategories
    {
        Envelope
    }
    
    public enum SideMenuItems
    {
        Inbox,
        Sent,
        Drafts,
        Deleted
    }
}