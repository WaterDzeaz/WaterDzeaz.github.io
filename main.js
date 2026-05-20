import FooterElement from "./components/elements/footer.js";
import HeadElement from "./components/elements/head.js";
import HeaderElement from "./components/elements/header.js";
import RootScript from "./components/script/root.js";
import EditedContent from "./content/edit-content.js";

//build root
const root = new RootScript();

//create default elements
new HeadElement(root);
new HeaderElement(root);
new FooterElement(root);

//After is all set
EditedContent.InsertData();
