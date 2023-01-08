import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/esm/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './RecommendPlaces.module.css'
import { LanguageContext } from "../../../languageContext";
import { useContext } from "react";

const titles = {
   en: ["Recommended Places"],
   se: ["Rekommenderade platser"]
}

function RecommendPlaces() {
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
            {PlacesMap.map((place) => (<Places {...place} />))}
         </Row >
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
      id: 0, srcImg: "images/RecomendPlace1.jpg", textPlace: "Stockholms Glass & Pastahus",
      linkPlace: "https://viewstockholm.com/place/stockholms-glass-pastahus/",
   },
   {
      id: 1, srcImg: "images/RecomendPlaces2.jpg", textPlace: "Bobbys Hårstudio",
      linkPlace: "https://viewstockholm.com/place/bobbys-harstudio/"
   },
   {
      id: 2, srcImg: "images/RecomendPlaces3.jpg", textPlace: "StikkiNikki",
      linkPlace: "https://viewstockholm.com/place/stikkinikki/"
   },
   {
      id: 3, srcImg: "images/RecomendPlaces4.jpg", textPlace: "Basta",
      linkPlace: "https://viewstockholm.com/place/basta//"
   },
   {
      id: 4, srcImg: "images/RecomendPlaces5.jpg", textPlace: "NyKo Kitchen",
      linkPlace: "https://viewstockholm.com/place/nyko-kitchen/"
   },
   {
      id: 5, srcImg: "images/RecomendPlaces6.jpg", textPlace: "Mister French",
      linkPlace: "https://viewstockholm.com/place/mister-french/"
   },
   {
      id: 6, srcImg: "images/RecomendPlaces7.jpg", textPlace: "Stigbergets Fot",
      linkPlace: "https://viewstockholm.com/place/stigbergets-fot/"
   },
   {
      id: 7, srcImg: "images/RecomendPlaces8.jpg", textPlace: "Reventon Tapas & Bar",
      linkPlace: "https://viewstockholm.com/place/reventon-tapas-bar/"
   }
]

export default RecommendPlaces;
