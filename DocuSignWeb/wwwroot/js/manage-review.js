import {createApp} from '../lib/vue/dist/vue.esm-browser.js';

const app = createApp({
    data() {
        return {
            docImages: ["docusign project_page-0001.jpg",
                "docusign project_page-0002.jpg",
                "docusign project_page-0003.jpg",
            ],
        }
    },
});

app.mount("#main");

