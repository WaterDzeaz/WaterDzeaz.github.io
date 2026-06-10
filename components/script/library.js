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
     * @param {string} html
     */
    constructor(title, html) {
        this.Title = title;
        this.HTML = html;
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

export class NetworkItem {
    /**
     *
     * @param {string} name
     * @param {string} image
     */
    constructor(name, image) {
        this.Name = name;
        this.Image = image;
    }
}
