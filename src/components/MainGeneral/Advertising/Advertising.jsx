import styles from "./Advertising.module.css";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { LanguageContext } from "../../../languageContext";
import { useContext } from "react";

const titles = {
  en: ["ADVERTISING"],
  se: ["ANNONS"],
};

function Advertising() {
  const languageContext = useContext(LanguageContext);
  return (
    <Col>
      <div className={styles.box}>
        <h6>{titles[languageContext.language][0]}:</h6>
        <Nav.Link href="#">
          <div>
            <img
              className="d-block w-100"
              src="https://track.adtraction.com/t/t?a=1034999459&as=1746007617&t=1&tk=1&i=1"
              alt="First slide"
              height="100px"
            />
          </div>
        </Nav.Link>
      </div>
    </Col>
  );
}
export default Advertising;
