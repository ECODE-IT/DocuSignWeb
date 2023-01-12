import {createApp} from '../lib/vue/dist/vue.esm-browser.js';

//SideMenu related classes
const SideMenuCategory = (name, menuItems) => {
    return {name: name, menuItems: menuItems}
};
const MenuItem = (name, icon, active = false) => {
    return {name: name, icon: icon, isActive: active}
};

//Document related classes
const DocStatus = (completed, total, info) => {
    return {completed: completed, total: total, percentageCompleted: completed / total * 100, info: info}
}
const LastChange = (date, time) => {
    return {date: date, time: time}
}
const Document = (subject, to, docStatus, lastChange, checked=false, alert= false) => {
    return {
        checked: checked,
        alert: alert,
        subject: subject, 
        to: to, 
        status: docStatus, 
        lastChange: lastChange
    }
}

const app = createApp({
    data() {
        return {
            _activeMenuItem: {categoryName: "Envelope", itemName: "Inbox"},
            _sideMenuCategories: {
                Envelope: SideMenuCategory("Envelope",
                    [MenuItem("Inbox", "fa-inbox", true),
                        MenuItem("Sent", "fa-paper-plane"),
                        MenuItem("Drafts", "fa-pen"),
                        MenuItem("Deleted", "fa-trash")])
            },
            _documents: {
                inbox: [
                    Document("Complete with Docusign: Stekam Tables(in bar).pdf",
                        "Govindage Dewthilina", 
                        DocStatus(1, 2, "Need to sign"),
                        LastChange("2021-01-01", "12:00:34 am"),
                        true, true
                    ),
                ]
            }
        }
    },
    computed: {
        sideMenuCategories() {
            return this._sideMenuCategories;
        },
        activeMenuItem() {
            return this._activeMenuItem;
        },
        documents() {
            //TODO: return documents based on activeMenuItem
            return this._documents.inbox;
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