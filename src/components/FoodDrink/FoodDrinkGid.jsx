import styles from "../Shop/GidShop/GidShop.module.css";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { LanguageContext } from "../../languageContext";
import { useContext } from "react";

const titles = {
  en: [
    "Your guide to food and drink in Stockholm",
    "Twenty years ago the Stockholm dining scene might have best been described as ‘limited’. How things do change. These days Stockholm is positively crawling with both traditional Nordic dishes (often with a twist) and a bustling international foodie scene.",
    "Seasonal ingredients, organic and ecological, high quality, innovative, playful… these are just a few of the words used to describe the city’s burgeoning gastronomic scene.",
    "Variety is another word used, because walk down just about any street and you’ll find everything from reasonably priced cafés to Michelin-starred luxury. International cuisine from all around the globe is well represented.",
    "Vegan or carnivore, traditional or adventurous, big wallet or small – no matter your preferences Stockholm is sure to have something that suits your palette. Here at ViewStockholm we suggest taking advantage of all that the thriving food and restaurant scene has to offer. And we’re happy to help you find it.",
    "Bon appetite!" 
  ],
  se: [
    "Din guide till mat och dryck i Stockholm",
    "För 20 år sedan var utbudet av för den som var sugen på kulinariska upplevelser i Stockholm ganska begränsat. Men som tur är för oss som gillar att gå ut på restaurang för att njuta god mat och dryck har detta förändrats. Verkligen förändrats. Idag är stan full av både traditionell svensk och skandinavisk husmanskost (ofta med en twist) och ett spännande internationellt restaurangutbud som bara växer för varje år.",
    "Ingredienser efter säsong, ekologiskt, hög kvalitet, innovation, lekfullhet … detta är bara några av de ord som används för att beskriva Stockholms växande gastronomiska scen. Ett annat bra ord är variation – för du kan gå på i stort sett vilken gata som helst så hittar du alltifrån prisvärda caféer till lyxrestauranger med Michelin-stjärna. Och internationella kök från hela världen finns det som sagt gott om.",
    "Oavsett om du är vegan eller köttätare, traditionell eller äventyrlig, har stor eller liten plånbok erbjuder Stockholm garanterat en restaurang, bar, pub eller kafé som passar dig.",
    "Vi på View Stockholm tycker att du verkligen ska ta chansen att uppleva vad stans fantastiska restaurangscen har att bjuda på. Och vi hjälper gärna till att guida dig rätt.",
    "Smaklig måltid!"
   ],
};

export default function FoodDrinkGid() {
  const languageContext = useContext(LanguageContext);
  return (
    <>
        <h4 className={styles.title}>{titles[languageContext.language][0]}</h4>
        <img
          src="https://emvwr2994ad.exactdn.com/wp-content/uploads/2018/11/wave-line.png?strip=all&lossy=1&quality=77&resize=200%2C12&ssl=1"
          width="200"
          height="10"
          className={`d-inline-block align-top ${styles.margin}`}
          alt="value"
        />
        <div class="d-flex justify-content-center text-start pb-5">
          <Col xs={11} lg={8}>
            <p>{titles[languageContext.language][1]}</p>
            <p>{titles[languageContext.language][2]}</p>
            <p>{titles[languageContext.language][3]}</p>
            <p>{titles[languageContext.language][4]}</p>
            <p><b>{titles[languageContext.language][5]}</b></p>
          </Col>
        </div>
    </>
  );
}
