import styles from "../Shop/ShopImg/ShopImg.module.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { LanguageContext } from "../../languageContext";
import { useContext } from "react";

const titles = {
  en: [
    "Work & Study in Stockholm",
    "Your guide to work and education in the city",
    "RECOMENDED FOR YOU",
    "Stockholm's best coworking spaces",
    "READ MORE",
  ],
  se: [
    "Jobba & studera i Stockholm",
    "Din guide till att arbeta och utbilda dig i Stockholm",
    "REKOMMENDERAT FÖR DIG",
    "Stockholm's bästa kontorshotell",
    "LÄS MER",
  ],
};
export default function WorkStudyImg() {
  const languageContext = useContext(LanguageContext);

  return (
    <>
      <div className={styles.img}>
        <img
          src="images/workStudy.webp"
          width="100%"
          height="300"
          alt="Work&Study_Stockholm"
        />
      </div>
      <Col xs="11" className={styles.text}>
        <h1  className={styles.title}>{titles[languageContext.language][0]}</h1>
        <h3>{titles[languageContext.language][1]}</h3>
        <br />
      </Col>
      <Container>
        <br />
        <h6 class="text-start">{titles[languageContext.language][2]}</h6>
        <Row>
          <Col xs="11" lg={{ span: 6, offset: 1 }} className={styles.img2}>
            <img src="images/workStudy1.webp" class="d-block w-100" height="300" alt="Work&Study" />
            <div className={styles.text2}>
              <h3>{titles[languageContext.language][3]}</h3>
              <Button variant="outline-light" className={styles.button}>
                {titles[languageContext.language][4]}
                <Nav.Link href="#"></Nav.Link>
              </Button>
            </div>
          </Col>
          <Col xs="11" lg={{ span: 3, offset: 1 }}>
          <img
                  src="images/workStudy2.webp"
                  class="d-block w-100"
                  height="300"
                  alt="Work&Study"
                />
          </Col>
        </Row>
      </Container>
    </>
  );
}
