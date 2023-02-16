import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/esm/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../Shop/ShopRecommendPlaces/ShopRecommendPlaces.module.css";
import { LanguageContext } from "../../languageContext";
import { useContext } from "react";

const titles = {
  en: ["Recommended Places"],
  se: ["Rekommenderade platser"],
};

export default function FoodDrinkRecommendPlaces() {
  const languageContext = useContext(LanguageContext);
  return (
    <Container fluid className={styles.paper}>
      <h4 className={styles.title}>{titles[languageContext.language][0]}</h4>
      <img
        src="https://emvwr2994ad.exactdn.com/wp-content/uploads/2018/11/wave-line.png?strip=all&lossy=1&quality=77&resize=200%2C12&ssl=1"
        width="200"
        height="10"
        className={`d-inline-block align-top ${styles.margin}`}
        alt="value"
      />
      <Row xs={1} sm={2} md={4} className="g-2">
        {PlacesMap.map((place) => (
          <Places {...place} />
        ))}
      </Row>
    </Container>
  );
}

const Places = ({ srcImg, linkPlace, textPlace }) => (
  <div className={styles.box}>
    <Col>
      <Nav.Link href={linkPlace}>
        <div className={styles.img}>
          <img
            className="d-block w-100"
            src={srcImg}
            alt="Food&Drink"
            width="100%"
            height="100%"
          />
        </div>
        <div className={styles.bgtext}>
          <section className={styles.text}>{textPlace}</section>
        </div>
      </Nav.Link>
    </Col>
  </div>
);

const PlacesMap = [
  {
    srcImg: "images/food_drink1.webp",
    textPlace: "Chokladkoppen",
    linkPlace: "#",
  },
  {
    srcImg: "images/food_drink2.webp",
    textPlace: "Tre Valv",
    linkPlace: "#",
  },
  {
    srcImg: "images/food_drink3.webp",
    textPlace: "Prime Burger",
    linkPlace: "#",
  },
  {
    srcImg: "images/food_drink4.webp",
    textPlace: "Trattorian",
    linkPlace: "#",
  },
  {
    srcImg: "images/food_drink5.webp",
    textPlace: "Il Molo",
    linkPlace: "#",
  },
  {
    srcImg: "images/food_drink6.webp",
    textPlace: "Skeppsbron 10",
    linkPlace: "#",
  },
  {
    srcImg: "images/food_drink7.webp",
    textPlace: "Mister French",
    linkPlace: "#",
  },
  {
    srcImg: "images/food_drink8.webp",
    textPlace: "Pomme Crêperie",
    linkPlace: "#",
  },
  {
    srcImg: "images/food_drink9.webp",
    textPlace: "La Boca Doce",
    linkPlace: "#",
  },
  {
    srcImg: "images/food_drink10.webp",
    textPlace: "Villa Godthem",
    linkPlace: "#",
  },
  {
    srcImg: "images/food_drink11.webp",
    textPlace: "Deli Di Luca",
    linkPlace: "#",
  },
  {
    srcImg: "images/food_drink12.webp",
    textPlace: "The Bagel",
    linkPlace: "#",
  },
  {
    srcImg: "images/food_drink13.webp",
    textPlace: "Wilmer Kaffebar",
    linkPlace: "#",
  },
  {
    srcImg: "images/food_drink14.webp",
    textPlace: "Haga Bottega",
    linkPlace: "#",
  },
  {
    srcImg: "images/food_drink15.webp",
    textPlace: "Kasai",
    linkPlace: "#",
  },
  {
    srcImg: "images/food_drink16.webp",
    textPlace: "An Nam",
    linkPlace: "#",
  },
  {
    srcImg: "images/food_drink17.webp",
    textPlace: "The Pink Company",
    linkPlace: "#",
  },
  {
    srcImg: "images/food_drink18.webp",
    textPlace: "The Pink Company",
    linkPlace: "#",
  },
  {
    srcImg: "images/food_drink19.webp",
    textPlace: "Pitza",
    linkPlace: "#",
  },
  {
    srcImg: "images/food_drink20.webp",
    textPlace: "Tennstopet",
    linkPlace: "#",
  },
];
