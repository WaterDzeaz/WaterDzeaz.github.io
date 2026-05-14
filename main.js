import FooterElement from "./components/elements/footer.js";
import HeaderElement from "./components/elements/header.js";
import RootScript from "./components/script/root.js";

//build root
const root = new RootScript();

//create default elements
new HeaderElement(root);
new FooterElement(root);
