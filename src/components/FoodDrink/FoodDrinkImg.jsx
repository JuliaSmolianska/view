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
    "Food & Drink in Stockholm",
    "Your guide to the city's thriving food and restaurant scene",
    "RECOMENDED FOR YOU",
    "The best brunch in Stockholm",
    "READ MORE",
  ],
  se: [
    "Äta och dricka i Stockholm",
    "Din guide till stans bästa ställen för mat och dryck",
    "REKOMMENDERAT FÖR DIG",
    "Din guide till Stockholms bästa brunch",
    "LÄS MER",
  ],
};
export default function FoodDrinkImg() {
  const languageContext = useContext(LanguageContext);

  return (
    <>
      <div className={styles.img}>
        <img
          src="images/food_drink.webp"
          width="100%"
          height="300"
          alt="Food&Drink_Stockholm"
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
            <img src="images/best_brunches.webp" class="d-block w-100" height="300" alt="Food&Drink" />
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
                  src="images/See&DoCarusel.webp"
                  class="d-block w-100"
                  height="300"
                  alt="Food&Drink"
                />
          </Col>
        </Row>
      </Container>
    </>
  );
}
