import styles from "./Stay.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Hotels from "./Hotels";
import { useContext } from "react";
import { LanguageContext } from "../../languageContext";

const titles = {
  en: [
    "The best hotels in Stockholm",
    "Your guide to the city's top places to stay",
  ],
  se: [
    "Your guide to the city's top places to stay",
    "Din guide till stadens främsta boenden",
  ],
};
export default function Stay() {
  const languageContext = useContext(LanguageContext);
  return (
    <>
      <img
        src="images/card7.jpg"
        width="100%"
        height="450"
        alt="hotel-stockholm"
        className={styles.margin}
      />
      <Col xs="11" className={styles.text}>
        <h1 className={styles.title}>{titles[languageContext.language][0]}</h1>
        <br />
        <h3>{titles[languageContext.language][1]}</h3>
      </Col>
      <h6 className={styles.way}>
        <i class="bi bi-house-door-fill"> </i> // stay // Stay at the best
        hotels in Stockholm
      </h6>
      <Row xs={1} lg={2}>
        <Col xs={11} lg={7}>
          <div class={styles.discription}>
            <b>
              Are you planning to visit the Swedish capital and looking for
              hotels in Stockholm? Then you have many great accommodations to
              choose from – the city is full of everything from five-star luxury
              hotels to more wallet-friendly budget options. And everything in
              between. Whether you're coming for a relaxing weekend or a
              business meeting, a family holiday, or a cozy staycation, there's
              guaranteed to be a place to stay that suits you. Book the right
              hotel experience with our guide to Stockholm's best hotels.
            </b>
            <br />
            <br />
            <p>
              Stockholm is a fantastic city in many ways, and there are many
              reasons to visit us. Those going here for business might want to
              be close to the business district in the city center. If you're
              visiting as a tourist, you probably want to stay within walking
              distance of the city hall, Old Town, Djurgården, museums, and
              other attractions. Those traveling with children usually prefer
              family-friendly accommodation. And some want to be close to
              Arlanda Airport and therefore want a hotel outside Stockholm.
            </p>
            <p>The city has good hotels for all tastes and needs.</p>
          </div>
        </Col>
        <Col xs={11} lg={4} class="p-2">
          <div className={styles.mapouter}>
            <div className={styles.gmap_canvas}>
              <iframe
                width="100%"
                height="600"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=hotels%20of%20stockholm&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
              ></iframe>
              <a href="https://123movies-i.net">123movies hd</a>
              <br />
              <a href="https://www.embedgooglemap.net">
                responsive google maps
              </a>
            </div>
          </div>
        </Col>
      </Row>
      <Hotels />
    </>
  );
}
