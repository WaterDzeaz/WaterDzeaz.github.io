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
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "/style/stylesheet.css";

    const title = document.createElement("title");
    title.innerHTML = "Ginger de Graaff";

    this.Root.Head.appendChild(css);
    this.Root.Head.appendChild(title);
  }
}
