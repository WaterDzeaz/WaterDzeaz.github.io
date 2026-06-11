import { NavigationItem } from "../script/library.js";
import RootScript from "../script/root.js";

export default class HeaderElement {
    /**
     *
     * @param {RootScript} root
     */
    constructor(root) {
        this.Root = root;

        /** @type {HTMLDivElement} */
        this.HeaderElement = document.createElement("div");

        this.NavigationList = [
            new NavigationItem("Home", "/index.html"),
            new NavigationItem("Over mij", "/pages/overmij.html"),
            new NavigationItem("Casus", "/pages/casus.html"),
            new NavigationItem("Feedback", "/pages/feedback.html"),
            new NavigationItem("Reflectie", "/pages/reflectie.html"),
            new NavigationItem("Bijlages", "/pages/bijlage.html"),

            new NavigationItem("Bronnen", "/pages/bronnen.html")
        ];

        this.createContent();
    }

    createContent() {
        this.createBanner();
        this.createNavigation();

        this.placeHeaderElement();
    }

    placeHeaderElement() {
        this.HeaderElement.id = "top";
        this.HeaderElement.className = "article";

        this.Root.Body.prepend(this.HeaderElement);
    }

    createBanner() {
        const banner = document.createElement("div");
        banner.id = "banner";

        const img = document.createElement("img");
        img.src = "/images/banner.png";
        img.onclick = ()=>{
            // @ts-ignore
            window.location = "/index.html";
        }

        banner.appendChild(img)

        const searchWrapper = document.createElement("div");
        const searchSpan = document.createElement("span");
        const searchInput = document.createElement("input");
        const searchBtn = document.createElement("button");

        searchWrapper.appendChild(searchSpan);
        searchWrapper.appendChild(searchInput);
        searchWrapper.appendChild(searchBtn);

        searchSpan.innerHTML = "Zoek persoon:";
        searchInput.placeholder = "Zoeken...";
        searchBtn.innerHTML = "Zoek";

        banner.appendChild(searchWrapper);

        const credWrapper = document.createElement("div");
        const helpA = document.createElement("a");
        const divide = document.createElement("span");
        const loginA = document.createElement("a");

        helpA.innerHTML = "Help";
        divide.innerHTML = "|";
        loginA.innerHTML = "Login";

        // @ts-ignore
        helpA.href = loginA.href = window.location;

        credWrapper.appendChild(helpA);
        credWrapper.appendChild(divide);
        credWrapper.appendChild(loginA);

        banner.appendChild(credWrapper);

        this.HeaderElement.appendChild(banner);
    }

    createNavigation() {
        const navigation = document.createElement("div");
        navigation.id = "nav";

        for (const item of this.NavigationList) {
            const navItem = document.createElement("div");

            if (item.Link == window.location.pathname) {
                navItem.className = "navItem selected";
            } else {
                navItem.className = "navItem";
            }
            navItem.innerHTML = item.Name;

            navItem.onclick = () => {
                window.location.href = item.Link;
            };

            navigation.appendChild(navItem);
        }

        this.HeaderElement.appendChild(navigation);
    }
}
