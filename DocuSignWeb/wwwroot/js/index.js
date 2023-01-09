import {createApp} from '../lib/vue/dist/vue.esm-browser.js';

//menuItem constructor
const MenuItem = (name, icon, active = false) => {
    return {name: name, icon: icon, isActive: active}
};

const app = createApp({
    data() {
        return {
            _activeMenuItem: {categoryName: "Envelope", itemName: "Inbox"},
            _sideMenuCategories: {
                Envelope: {
                    name: "Envelope",
                    menuItems: [MenuItem("Inbox", "fa-inbox", true), MenuItem("Sent", "fa-paper-plane"), MenuItem("Drafts", "fa-pen"), MenuItem("Deleted", "fa-trash")]
                }
            }
        }
    },
    computed: {
        sideMenuCategories() {
            return this._sideMenuCategories;
        }
    },
    methods: {
        selectMenuItem(category, menuItem) {
            if (category.name === this._activeMenuItem.categoryName 
                && menuItem.name === this._activeMenuItem.itemName) {
                return;
            }
            // deactivate the current active menu item
            this._sideMenuCategories[this._activeMenuItem.categoryName].menuItems
                .find(item => item.name === this._activeMenuItem.itemName).isActive = false;

            // activate the new menu item
            this._activeMenuItem = {categoryName: category.name, itemName: menuItem.name};
            this._sideMenuCategories[category.name].menuItems
                .find(item => item.name === menuItem.name).isActive = true;

        },
    }
});

app.mount("#main");