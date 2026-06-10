import BronnenElement from "./components/elements/bronnen.js";
import FooterElement from "./components/elements/footer.js";
import GaleryElement from "./components/elements/galery.js";
import HeadElement from "./components/elements/head.js";
import HeaderElement from "./components/elements/header.js";
import NetworkElement from "./components/elements/network.js";
import { BronItem, GaleryItem, NetworkItem } from "./components/script/library.js";
import RootScript from "./components/script/root.js";

//build root
const root = new RootScript();

//create default elements
new HeadElement(root);
new HeaderElement(root);
new FooterElement(root);

//Create Network
new NetworkElement(root, [
    new NetworkItem("Opa en oma (vader)", "/images/people/Grandparents.jpeg"),
    new NetworkItem("Schoonnichtje", "/images/people/Devi.jpeg"),
    new NetworkItem("Zusje", "/images/people/Dinandy.jpeg"),
    new NetworkItem("Nichtje", "/images/people/Elise.jpeg"),
    new NetworkItem("Zus", "/images/people/Faygun.jpeg"),
    new NetworkItem("Schoonvader", "/images/people/Humphrey.jpeg"),
    new NetworkItem("Schoonmoeder", "/images/people/Jennie.jpeg"),
    new NetworkItem("Schoonzus", "/images/people/Mariska.jpeg"),
    new NetworkItem("Mama", "/images/people/Mayke.jpeg"),
    new NetworkItem("Papa", "/images/people/Vader.jpeg"),
    new NetworkItem("Vriendin", "/images/people/Nancy.jpeg"),
    new NetworkItem("Schoonbroer", "/images/people/Niek.jpeg"),
    new NetworkItem("Schoonbroer", "/images/people/Niels.jpeg"),
    new NetworkItem("Schoonbroer", "/images/people/Twan.jpeg")
]);

//Some galeries
new GaleryElement(root, "casus-galery", [
    new GaleryItem("situatie 1", "/pages/casus/casus_situatie_1.html"),
    new GaleryItem("situatie 2", "/pages/casus/casus_situatie_2.html"),
    new GaleryItem("situatie 3", "/pages/casus/casus_situatie_3.html"),
    new GaleryItem("situatie 4", "/pages/casus/casus_situatie_4.html")
]);
new GaleryElement(root, "bijlage-galery", [
    new GaleryItem("Bijlage 1", "/pages/bijlages/bijlage_1.html"),
    new GaleryItem("Bijlage 2", "/pages/bijlages/bijlage_2.html"),
    new GaleryItem("Bijlage 3", "/pages/bijlages/bijlage_3.html"),
    new GaleryItem("Bijlage 4", "/pages/bijlages/bijlage_4.html"),
    new GaleryItem("Bijlage 5", "/pages/bijlages/bijlage_5.html"),
    new GaleryItem("Bijlage 6", "/pages/bijlages/bijlage_6.html"),
    new GaleryItem("Bijlage 7", "/pages/bijlages/bijlage_7.html"),
    new GaleryItem("Bijlage 8", "/pages/bijlages/bijlage_8.html"),
    new GaleryItem("Bijlage 9", "/pages/bijlages/bijlage_9.html"),
    new GaleryItem("Bijlage 10", "/pages/bijlages/bijlage_10.html")
]);

//Bronnen
new BronnenElement(root, [
    new BronItem("Blanken, C., Clijsen, M., Garenfeld, W., Te Paske, I., & Van Piere, M. (2016). Psychiatrie voor de sociaal werker. In Bohn Stafleu van Loghum eBooks."),
    new BronItem("Bouwkamp, R., & Bouwkamp, S. (2012). Handboek psychosociale hulpverlening: kortdurend, systeemgericht, ervaringsgericht, oplossingsgericht."),
    new BronItem("De Weerd, D., Slaa, S., & Muste, E. (2023). Handboek Sociotherapie. Theorie en praktijk voor hulpverleners in het sociaal-agogisch werkveld. https://doi.org/10.36254/978-90-8850-273-6"),
    new BronItem("Hendriksen-Favier, A., Nijnens, K., & Van Rooijen, S. (2012). Handreiking voor de implementatie van herstelondersteunende zorg in de ggz. Trimbos Instituut."),
    new BronItem("Herman, J. L. (1994). Trauma en herstel: De gevolgen van geweld – van mishandeling thuis tot politiek geweld. Wereldbibliotheek."),
    new BronItem("Kavelaar, S., & Claeijs Mario. (2017). Ontwikkelingspsychologie. Pearson Benelux BV."),
    new BronItem("Nabuurs, M. (2021). Basisboek Systeemgericht werken. ThiemeMeulenhoff."),
    new BronItem("Ofman, D. (2001). Bezieling en kwaliteit in organisaties. Scriptum."),
    new BronItem(
        "Oppenoorth, W. H. (2008). Effecten van psychiatrische stoornissen van ouders op ontwikkeling van kinderen. Tijdschrift Voor Psychiatrie. https://www.tijdschriftvoorpsychiatrie.nl/nl/artikelen/article/50-6524_Effecten-van-psychiatrische-stoornissen-van-ouders-op-ontwikkeling-van-kinderen"
    ),
    new BronItem("Richtlijnen Jeugdhulp en Jeugdbescherming. (2025, 20 juni). Ingrijpende gevolgen | Richtlijn Kinderen van ouders met psychische en/of verslavingsproblemen. Geraadpleegd op 19 april 2026, van https://www.richtlijnenjeugdhulp.nl/koppkov/3-oorzaken-en-factoren/ingrijpende-gevolgen"),
    new BronItem(
        "Van Andel, H. W. H., Van Balkom, A. J. L. M., Bloks, J. A., Van den Brink, C., Canton, W. J., Griffioen, J. G., De Gruijl, I. P. I., Jacobs, C. G. A. M., De Jong, C. A. J., Kat, M. G., Kisjes, H., Kooij, J. J. S., Kortmann, F. A. M., Van der Leest-Tijmense, Y. G., Leidelmeijer, P., Maassen, N., Maduro, S. L., Oortwijn, A. J., Peeters, S., . . . Wieland, J. (2016). Psychiatrie voor de sociaal werker. In Bohn Stafleu van Loghum eBooks. Bohn Stafleu van Loghum. https://doi.org/10.1007/978-90-368-1247-4"
    ),
    new BronItem("Visie & missie van Buro3o | Buro3o. (z.d.). Buro3o. Geraadpleegd op 19 mei 2026, van https://www.buro3o.nl/buro3o/visie/"),
    new BronItem(" Watzlawick, P., Beavin, J. H., & Jackson, D. D. (1975). De pragmatische aspecten van de menselijke communicatie. http://lib.ugent.be/en/catalog/rug01:000025500")
]);
