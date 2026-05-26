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
   * @param {string} achternaam
   * @param {string} voorletters
   * @param {string} publicatiedatum
   * @param {string} titel
   * @param {string} uitgever
   * @param {string | undefined} url
   */
  constructor(achternaam, voorletters, publicatiedatum, titel, uitgever, url) {
    this.Achternaam = achternaam;
    this.Voorletters = voorletters;
    this.Datum = publicatiedatum;
    this.Title = titel;
    this.Uitgever = uitgever;
    this.URL = url;
  }
}
