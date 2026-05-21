import RootScript from "../script/root.js";

export default class HeadElement {
    /**
     *
     * @param {RootScript} root
     */
    constructor(root) {
        this.Root = root;

        this.createHead();
    }

    createHead() {
        const title = document.createElement("title");
        title.innerHTML = "Ginger de Graaff";

        const icon = document.createElement("link");
        icon.rel = "icon";
        icon.href = "/images/favicon.ico";

        const css = document.createElement("link");
        css.rel = "stylesheet";
        css.href = "/style/stylesheet.css";

        this.Root.Head.appendChild(title);
        this.Root.Head.appendChild(icon);
        this.Root.Head.appendChild(css);
    }
}
