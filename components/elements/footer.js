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
    
    const img = document.createElement("img");
    img.src = "/images/footer.png";

    const copy = document.createElement("div");
    copy.innerHTML = "&copy;Ginger De Graaff 2026";

    footer.appendChild(img);
    footer.appendChild(copy)

    this.Root.Body.appendChild(footer);
  }
}
