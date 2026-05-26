import BronnenElement from "./components/elements/bronnen.js";
import FooterElement from "./components/elements/footer.js";
import GaleryElement from "./components/elements/galery.js";
import HeadElement from "./components/elements/head.js";
import HeaderElement from "./components/elements/header.js";
import { BronItem, GaleryItem } from "./components/script/library.js";
import RootScript from "./components/script/root.js";

//build root
const root = new RootScript();

//create default elements
new HeadElement(root);
new HeaderElement(root);
new FooterElement(root);

//Some galeries
new GaleryElement(root, "casus-galery", [new GaleryItem("01-01-2026", "test content"), new GaleryItem("01-01-2026", "test content"), new GaleryItem("01-01-2026", "test content"), new GaleryItem("01-01-2026", "test content")]);
new GaleryElement(root, "bijlage-galery", [new GaleryItem("01-01-2026", "test content")]);

//Bronnen
new BronnenElement(root, [
  new BronItem("Sloesen", "M.", "2026", "Hoi die hoi", "Google", "http://google.com"),
  new BronItem("Sloesen", "M.", "2026", "Hoi die hoi", "Google", "http://google.com"),
  new BronItem("Sloesen", "M.", "2026", "Hoi die hoi", "Google", "http://google.com"),
  new BronItem("Sloesen", "M.", "2026", "Hoi die hoi", "Google", "http://google.com"),
  new BronItem("Sloesen", "M.", "2026", "Hoi die hoi", "Google", "http://google.com"),
  new BronItem("Sloesen", "M.", "2026", "Hoi die hoi", "Google", "http://google.com"),
]);
