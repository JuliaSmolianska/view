import styles from "./ShopImg.module.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { LanguageContext } from "../../../languageContext";
import { useContext } from "react";

const titles = {
  en: [
    "Shopping in Stockholm",
    "Your guide to the city's amazing shopping",
    "RECOMENDED FOR YOU",
    "Best Vintage Clothing Shops in Stockholm",
    "READ MORE",
  ],
  se: [
    "Shopping i Stockholm",
    "Din guide till stans bästa shopping",
    "REKOMMENDERAT FÖR DIG",
    "Stockholms bästa vintagebutiker för kläder",
    "LÄS MER",
  ],
};
export default function ShopImg() {
  const languageContext = useContext(LanguageContext);

  return (
    <>
      <div className={styles.img}>
        <img
          src="images/stockholm_shopping.jpg"
          width="100%"
          height="300"
          alt="Shopping-stockholm"
        />
      </div>
      <Col xs="11" className={styles.text}>
        <h1 className={styles.title}>{titles[languageContext.language][0]}</h1>
        <h3>{titles[languageContext.language][1]}</h3>
        <br />
      </Col>
      <Container>
        <br />
        <h6 class="text-start">{titles[languageContext.language][2]}</h6>
        <Row>
          <Col xs="11" lg={{ span: 6, offset: 1 }} className={styles.img2}>
            <img src="images/vintage_shops.jpg" class="d-block w-100" height="300" alt="Shopping" />
            <div className={styles.text2}>
              <h3>{titles[languageContext.language][3]}</h3>
              <Button variant="outline-light" className={styles.button}>
                {titles[languageContext.language][4]}
                <Nav.Link href="#"></Nav.Link>
              </Button>
            </div>
          </Col>
          <Col xs="11" lg={{ span: 3, offset: 1 }}>
            <Nav.Link href="#" target="_blank">
              <img
                src="images/mobile_view_stockholm.jpg"
                class="d-block w-100"
                height="300"
                alt="Shopping"
              />
            </Nav.Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}
