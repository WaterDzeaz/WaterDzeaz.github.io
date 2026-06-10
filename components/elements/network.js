import { NetworkItem } from "../script/library.js";
import RootScript from "../script/root.js";

export default class NetworkElement {
    /**
     *
     * @param {RootScript} root
     * @param {Array<NetworkItem>} list
     */
    constructor(root, list) {
        this.Root = root;
        this.List = list;

        this.createSourceList();
    }

    createSourceList() {
        const elem = this.Root.Body.querySelector(`#networklijst`);

        if (elem != null) {
            this.buildSourceList(elem);
        }
    }

    /**
     *
     * @param {Element} elem
     */
    buildSourceList(elem) {
        for (const item of this.List) {
            const wrapper = document.createElement("div");
            wrapper.className = "network_item";

            const image = document.createElement("img");
            image.src = item.Image;

            const name = document.createElement("div");
            name.innerHTML = `${item.Name}`;

            wrapper.appendChild(image);
            wrapper.appendChild(name);

            elem.appendChild(wrapper);
        }
    }
}
