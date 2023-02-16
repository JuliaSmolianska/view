import styles from "./GidShop.module.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { LanguageContext } from "../../../languageContext";
import { useContext } from "react";

const titles = {
  en: [
    "Your guide to shopping in Stockholm",
    "If 'Shop till you drop' is the motto you live by then Stockholm is the city for you.",
    "The shopping street (or mecca, as we like to say) called Drottninggatan might be your first port of call when on the prowl for some great shopping. Stretching from Central Station all the way up to the Vasastan section of the city, you’ll find everything from the big department store Åhlens to more H&Ms than you can count to a plethora of smaller, privately-owned shops selling everything from clothing to housewares.",
    "Once you've exhausted Drottninggatan, we suggest heading over to Östermalm, where luxury shopping is the name of the game, with exclusive designer shops scattered throughout. If vintage and a bit more boho is your style, Södermalm is the place for you.",
    "New malls and gallerias are popping up all the time, and of course, no visit to Stockholm would be complete without a visit to our city’s legendary NK department store, where you can browse for hours upon hours.",
    "Whatever your style, we'll guide you through the best shopping Stockholm has to offer.",
  ],
  se: [
    "Din guide till shopping i Stockholm",
    "Om 'Shop till you drop' är mottot du lever efter så är Stockholm staden för dig.",
    "Shoppinggatan (eller meckat som vi brukar säga) Drottninggatan kanske blir den första anhalten i jakten på bra shopping. I ett område som sträcker sig från centralstationen ända till Vasastan hittar du såväl det stora varuhuset Åhléns och fler H&M-butiker än du kan räkna som en mängd mindre butiker som erbjuder alltifrån kläder till husgeråd.",
    "När du är färdig med Drottninggatan föreslår vi att du beger dig till Östermalm där det framför allt är lyxshopping i exklusiva designerbutiker som gäller. Om vintage och det bohemiska är mer din stil så är Södermalm stadsdelen för dig.",
    "Nya butiker och gallerior dyker upp hela tiden, och givetvis är ingen shoppingrunda i Stockholm komplett utan ett besök på det legendariska NK där utbudet utan problem kan hålla dig sysselsatt i timmar.",
    "Oavsett vad du har för preferenser så guidar vi dig till den bästa shoppingen Stockholm har att erbjuda.",
  ],
};

export default function GidShop() {
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
            <p>{titles[languageContext.language][5]}</p>
          </Col>
        </div>
    </>
  );
}
