import {createApp} from '../lib/vue/dist/vue.esm-browser.js';
import {DocStatus, LastChange, Document, MenuItem, SideMenuCategory, sideMenuMixin} from "./manage.js";

const app = createApp({
    mixins: [sideMenuMixin],
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
        documents() {
            //TODO: return documents based on activeMenuItem
            return this._documents.inbox;
        }
    },
    methods: {
    }
});

app.mount("#main");