import styles from "./ExploreAreas.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { LanguageContext } from "../../../languageContext";
import { useContext } from "react";

const titles = {
  en: ["Explore the areas of"],
  se: ["Utforska mer av Stockholm"],
};

function ExploreAreas() {
  const languageContext = useContext(LanguageContext);

  return (
    <Container fluid className={styles.paper}>
      <div className={styles.box}>
        <h5 className={styles.text}>{titles[languageContext.language][0]}</h5>
        <img
          src="https://emvwr2994ad.exactdn.com/wp-content/uploads/2018/11/wave-line.png?strip=all&lossy=1&quality=77&resize=200%2C12&ssl=1"
          width="200"
          height="10"
          className="d-inline-block align-top"
          alt="value"
          color="white"
        />
        <h1>Stockholm</h1>
        <Nav.Link href="#" className={styles.link}>
          <Button variant="dark" className={styles.button}>
            Norrmalm/city
          </Button>
        </Nav.Link>
        <Nav.Link href="#" className={styles.link}>
          <Button variant="dark" className={styles.button}>
            Södermalm
          </Button>
        </Nav.Link>
        <Nav.Link href="#" className={styles.link}>
          <Button variant="dark" className={styles.button}>
            Östermalm
          </Button>
        </Nav.Link>
        <Nav.Link href="#" className={styles.link}>
          <Button variant="dark" className={styles.button}>
            Vasastan
          </Button>
        </Nav.Link>
        <Nav.Link href="#" className={styles.link}>
          <Button variant="dark" className={styles.button}>
            Kungsholmen
          </Button>
        </Nav.Link>
        <Nav.Link href="#" className={styles.link}>
          <Button variant="dark" className={styles.button}>
            Old town
          </Button>
        </Nav.Link>
        <Nav.Link href="#" className={styles.link}>
          <Button variant="dark" className={styles.button}>
            Djurgården
          </Button>
        </Nav.Link>
      </div>
    </Container>
  );
}
export default ExploreAreas;
