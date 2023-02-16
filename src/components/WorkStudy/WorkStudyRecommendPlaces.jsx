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

export default function WorkStudyRecommendPlaces() {
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
    srcImg: "images/work_study1.webp",
    textPlace: "Selected Office",
    linkPlace: "#",
  },
  {
    srcImg: "images/work_study2.webp",
    textPlace: "Kontoret",
    linkPlace: "#",
  },
  {
    srcImg: "images/work_study_3.jpg",
    textPlace: "Stockholm University",
    linkPlace: "#",
  },
  {
    srcImg: "images/work_study4.webp",
    textPlace: "Karolinska Institutet",
    linkPlace: "#",
  }
];
