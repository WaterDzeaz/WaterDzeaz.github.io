class ArticleItem {
  /**
   *
   * @param {string} title
   * @param {string} context
   */
  constructor(title = "Lorum ipsum", context = "Lorum ipsum") {
    this.Title = title;
    this.Context = context;
  }
}

export default class ContentClass {
  Home = {
    OverMijnWerk: new ArticleItem("Over mijn werk"),
  };

  InsertData() {
    this.findAndPlaceData("werk", this.Home.OverMijnWerk);
  }

  /**
   *
   * @param {string} id
   * @param {ArticleItem} article
   * @private
   */
  findAndPlaceData(id, article) {
    //check for element
    const element = document.body.querySelector(`#${id}`);

    if (element != null) {
      //check for header
      const header = element.querySelector(".header");

      if (header != null) {
        header.innerHTML = article.Title;
      }

      //check for context
      const content = element.querySelector(".content");

      if (content != null) {
        content.innerHTML = article.Context;
      }
    }
  }
}
