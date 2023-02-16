import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/esm/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../Shop/ShopRecommendPlaces/ShopRecommendPlaces.module.css";
import { LanguageContext } from "../../../languageContext";
import { useContext } from "react";

const titles = {
  en: ["Recommended Places"],
  se: ["Rekommenderade platser"],
};

export default function SeeDoRecommendPlaces() {
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
            alt="First slide"
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
    srcImg: "images/see_do1.webp",
    textPlace: "Fågelbrohus",
    linkPlace: "#",
  },
  {
    srcImg: "images/see_do2.webp",
    textPlace: "Smådalarö Gård",
    linkPlace: "#",
  },
  {
    srcImg: "images/see_do3.webp",
    textPlace: "VerdeVerde Travel",
    linkPlace: "#",
  },
  {
    srcImg: "images/see_do4.webp",
    textPlace: "FMJ Shooting Range",
    linkPlace: "#",
  },
  {
    srcImg: "images/see_do5.webp",
    textPlace: "Väddö Gårdsmejeri",
    linkPlace: "#",
  },
  {
    srcImg: "images/see_do6.webp",
    textPlace: "Gröna Lund",
    linkPlace: "#",
  },
  {
    srcImg: "images/see_do7.webp",
    textPlace: "KAYAKOMAT",
    linkPlace: "#",
  },
  {
    srcImg: "images/see_do8.webp",
    textPlace: "Trampoolin",
    linkPlace: "#",
  },
  {
    srcImg: "images/see_do9.webp",
    textPlace: "Södra Teatern",
    linkPlace: "#",
  },
  {
    srcImg: "images/see_do10.webp",
    textPlace: "ABBA The Museum",
    linkPlace: "#",
  },
  {
    srcImg: "images/see_do11.webp",
    textPlace: "Naturhistoriska riksmuseet",
    linkPlace: "#",
  },
  {
    srcImg: "images/see_do12.webp",
    textPlace: "Nobelprismuseet",
    linkPlace: "#",
  },
  {
    srcImg: "images/see_do13.webp",
    textPlace: "M/S Vindhem",
    linkPlace: "#",
  },
  {
    srcImg: "images/see_do14.webp",
    textPlace: "Ballongflyg i Stockholm",
    linkPlace: "#",
  },
  {
    srcImg: "images/see_do15.webp",
    textPlace: "Room Escape Fox in a Box",
    linkPlace: "#",
  },
  {
    srcImg: "images/see_do16.webp",
    textPlace: "Stockholm Toy Museum",
    linkPlace: "#",
  },
  {
    srcImg: "images/see_do17.webp",
    textPlace: "Junibacken",
    linkPlace: "#",
  },
  {
    srcImg: "images/see_do18.webp",
    textPlace: "Prins Eugens Waldemarsudde",
    linkPlace: "#",
  },
  {
    srcImg: "images/see_do19.webp",
    textPlace: "Vasamuseet",
    linkPlace: "#",
  },
  {
    srcImg: "images/see_do20.webp",
    textPlace: "Vasamuseet",
    linkPlace: "#",
  },
];
