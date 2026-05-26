import { GaleryItem } from "../script/library.js";
import RootScript from "../script/root.js";

export default class GaleryElement {
  /**
   *
   * @param {RootScript} root
   * @param {string} id
   * @param {Array<GaleryItem>} list
   */
  constructor(root, id, list) {
    this.Root = root;
    this.ID = id;
    this.List = list;

    this.createGalery();
  }

  createGalery() {
    const elem = this.Root.Body.querySelector(`#${this.ID}`);

    if (elem != null) {
      this.buildGalery(elem);
    }
  }

  /**
   *
   * @param {Element} elem
   */
  buildGalery(elem) {
    for (const item of this.List) {
      const wrapper = document.createElement("div");
      wrapper.className = "galery-item";
      wrapper.onclick = () => {
        this.openWindow(item.Content);
      };

      const icon = document.createElement("div");
      icon.className = "folder-icon";

      const title = document.createElement("div");
      title.innerHTML = item.Title;

      wrapper.appendChild(icon);
      wrapper.appendChild(title);

      elem.appendChild(wrapper);
    }
  }

  /**
   *
   * @param {string} content
   */
  openWindow(content) {
    const width = 400;
    const height = 200;

    // Get position of the current browser window
    const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;

    // Get width/height of the current browser window
    const currentWidth = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    const currentHeight = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    // Calculate centered coordinates relative to the current window
    const left = currentWidth / 2 - width / 2 + dualScreenLeft;
    const top = currentHeight / 2 - height / 2 + dualScreenTop;

    const popup = window.open("", undefined, `width=${width},height=${height},top=${top},left=${left},status=yes,toolbar=no,menubar=no,location=no`);

    if (popup != null) {
      popup.document.body.innerHTML = content;
    }
  }
}
