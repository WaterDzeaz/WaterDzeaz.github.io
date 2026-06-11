import { BronItem } from "../script/library.js";
import RootScript from "../script/root.js";

export default class BronnenElement {
  /**
   *
   * @param {RootScript} root
   * @param {Array<BronItem>} list
   */
  constructor(root, list) {
    this.Root = root;
    this.List = list;

    this.createSourceList();
  }

  createSourceList() {
    const elem = this.Root.Body.querySelector(`#bronnenlijst`);

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
      wrapper.className = "article";
      
      const content = document.createElement("div");
      content.className = "content";
      content.innerHTML = `${item.Text}`;

      wrapper.appendChild(content);

      elem.appendChild(wrapper);
    }
  }
}
