import RootScript from "../script/root.js";

export default class FooterElement {
  /**
   *
   * @param {RootScript} root
   */
  constructor(root) {
    this.Root = root;

    this.createFooter();
  }

  createFooter() {
    const footer = document.createElement("div");
    footer.id = "footer";
    footer.className = "article";
    footer.innerHTML = "&copy;Ginger De Graaff 2026";

    this.Root.Body.appendChild(footer);
  }
}
