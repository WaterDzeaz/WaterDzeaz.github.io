export class NavigationItem {
  /**
   *
   * @param {string} name
   * @param {string} link
   */
  constructor(name, link) {
    this.Name = name;
    this.Link = link;
  }
}

export class GaleryItem {
  /**
   *
   * @param {string} title
   * @param {string} content
   */
  constructor(title, content) {
    this.Title = title;
    this.Content = content;
  }
}

export class BronItem {
  /**
   *
   * @param {string} text
   * @param {string | undefined} [url]
   */
  constructor(text, url) {
    this.Text = text;
    this.URL = url;
  }
}
