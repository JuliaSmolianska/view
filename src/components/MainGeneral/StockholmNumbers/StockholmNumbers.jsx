import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LanguageContext } from "../../../languageContext";
import { useContext } from "react";
import styles from './StockholmNumbers.module.css';

const titles = {
   en: ["Stockholm is a beautiful urban city surrounded by water and nature. So many fantastic experiences are waiting for you.",
      "Stockholm Numbers", "Year Founded", "Inhabitants", "Green areas", "Museums"],
   se: ["Stockholm är en vacker urban stad omgiven av vatten och natur. En lång rad fantastiska upplevelser väntar på dig.",
      "Stockholm i siffror", "År grundat", "Invänare", "Gröna ytor", "Muséer"]
}
function StockholmNumbers() {
   const languageContext = useContext(LanguageContext);
   return (
      <Container fluid>
         <Row xs={1} lg={2}>
            <Col xs={12} lg={6} className={styles.textPaper}>
               <img
                  src="https://emvwr2994ad.exactdn.com/wp-content/uploads/2018/11/wave-line.png?strip=all&lossy=1&quality=77&resize=200%2C12&ssl=1"
                  width="150"
                  height="10"
                  className="d-inline-block align-top"
                  alt="value"
               />
               <h5 className={styles.text}>
                  {titles[languageContext.language][0]}
               </h5>
            </Col>
            <Col xs={12} lg={6} className={styles.block}>
               <div className={styles.info}>
                  <p className={styles.text1}>
                     {titles[languageContext.language][1]}
                  </p>
                  <img
                     src="https://emvwr2994ad.exactdn.com/wp-content/uploads/2018/11/wave-line.png?strip=all&lossy=1&quality=77&resize=200%2C12&ssl=1"
                     width="200"
                     height="10"
                     className="d-inline-block align-top"
                     alt="value"
                  />
                  <Row xs={2}>
                     <Col xs={6} className={styles.nopadding}>
                        <p className={styles.number}>1252</p>
                        <p className={styles.text3}>{titles[languageContext.language][2]}</p>
                     </Col>
                     <Col xs={6} className={styles.nopadding}>
                        <p className={styles.number}>935619</p>
                        <p className={styles.text3}>{titles[languageContext.language][3]}</p>
                     </Col>
                  </Row>
                  <Row xs={2}>
                     <Col xs={6} className={styles.nopadding}>
                        <p className={styles.number}>40%</p>
                        <p className={styles.text3}>{titles[languageContext.language][4]}</p>
                     </Col>
                     <Col xs={6} className={styles.nopadding}>
                        <p className={styles.number}>70</p>
                        <p className={styles.text3}>{titles[languageContext.language][5]}</p>
                     </Col>
                  </Row>
               </div>
            </Col>
         </Row>
      </Container>
   )
}

export default StockholmNumbers;