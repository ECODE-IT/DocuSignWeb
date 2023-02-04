import {createApp, defineComponent} from '../lib/vue/dist/vue.esm-browser.js';
import {MenuItem} from "./manage.js";

const Field = (name,icon, options, active=false) => {
    return { name: name, icon:icon, options: options, active: active }
}

const FieldOption = (name, icon, onClick) => {
    return { ...MenuItem(name, icon), onClick: onClick }
}

const app = createApp({
    data() {
        return {
            _fields: {
                "Standard Fields": Field("Standard Fields", "far fa-square",
                    [FieldOption("Signature", "fa-pen", this.addSignComponent),
                        FieldOption("Initial", "fa-font"),
                        FieldOption("Stamp", "fa-stamp"),
                        FieldOption("Date Signed", "fa-calendar-alt")],
                    true),
                "Field 2": Field("Field 2", "fas fa-pen",
                    []),
                "Field 3": Field("Field 3", "fas fa-pen-ruler",
                    []),
            },
            docImages: ["docusign project_page-0001.jpg",
                "docusign project_page-0002.jpg",
                "docusign project_page-0003.jpg",
            ],
            _components:{
                signatures:[]
            }
        }
    },
    computed: {
        fields() {
            return Object.values(this._fields);
        },
        activeField() {
            return this.fields.find(f => f.active);
        },
        components() {
            return this._components;
        }
    },
    methods: {
        addSignatureModal(){
            console.log("addSignatureModal");
        },
        addSignComponent() {
            this._components.signatures.push({onclick: this.addSignatureModal})
        },
        setActiveField(field) {
            this.fields.forEach(f => f.active = false);
            field.active = true;

            //update active field
            this._fields[field.name] = field;            
        },
        closeModal(){
            $("#adoptSignModal").modal('hide');
        }
    }
});

app.mount("#main");

