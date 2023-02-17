import styles from "./Generalimg.module.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { LanguageContext } from "../../../languageContext";
import { useContext } from "react";

const titles = {
  en: [
    "Your city guide to Stockholm",
    "Bringing you the best of the city",
    "Hi! Looking for something?",
    "RECOMENDED FOR YOU",
    "Stockholm's Best Museums for Kids",
    "READ MORE",
  ],
  se: [
    "Din cityguide till Stockholm",
    "Ger dig det bästa som stan har att bjuda på",
    "Hej! Vad letar du efter?",
    "REKOMMENDERAT FÖR DIG",
    "Stockholms bästa museer för barn",
    "LÄS MER",
  ],
};
export default function Generalimg() {
  const languageContext = useContext(LanguageContext);

  return (
    <>
      <div className={styles.img}>
        <img
          src="images/view_stockholm.webp"
          width="100%"
          height="400"
          alt="view-stockholm"
        />
      </div>
      <Col xs="11" className={styles.text}>
        <h1 className={styles.title}>{titles[languageContext.language][0]}</h1>
        <h3>{titles[languageContext.language][1]}</h3>
        <br />
        <Col
          xs={{ span: 10, offset: 1 }}
          lg={{ span: 6, offset: 3 }}
          className={styles.search}
        >
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder={titles[languageContext.language][2]}
              className={`me-2 ${styles.search1}`}
              aria-label="Search"
            />
            <Button variant="secondary" className={styles.searchButton}>
              <i className="bi bi-search" style={{ fontWeight: "700" }}></i>
            </Button>
          </Form>
        </Col>
      </Col>
      <Container>
        <br />
        <h6 class="text-start">{titles[languageContext.language][3]}</h6>
        <Row>
          <Col xs="11" lg={{ span: 6, offset: 1 }} className={styles.img2}>
            <img
              src="images/general_img1.webp"
              class="d-block w-100"
              height="300"
              alt="wp-content"
            />
            <div className={styles.text2}>
              <h3>{titles[languageContext.language][4]}</h3>
              <Button variant="outline-light" className={styles.button}>
                {titles[languageContext.language][5]}
                <Nav.Link href="#S"></Nav.Link>
              </Button>
            </div>
          </Col>
          <Col xs="11" lg={{ span: 3, offset: 1 }}>
            <Nav.Link href="#" target="_blank">
              <img
                src="images/general_Img2.webp"
                class="d-block w-100"
                height="300"
                alt="wp-content"
              />
            </Nav.Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}
