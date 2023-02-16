import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/esm/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './ShopRecommendPlaces.module.css'
import { LanguageContext } from "../../../languageContext";
import { useContext } from "react";

const titles = {
   en: ["Recommended Places"],
   se: ["Rekommenderade platser"]
}

function ShopRecommendPlaces() {
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
      srcImg: "images/shop1.webp", textPlace: "Ewa i Walla",
      linkPlace: "#",
   },
   {
      srcImg: "images/shop2.webp", textPlace: "Gamla Stans Polkagriskokeri",
      linkPlace: "#"
   },
   {
      srcImg: "images/shop3.webp", textPlace: "G.A.D",
      linkPlace: "#"
   },
   {
      srcImg: "images/shop4.webp", textPlace: "Atlantis Beds",
      linkPlace: "#"
   },
   {
      srcImg: "images/shop5.webp", textPlace: "Ballong­verkstan",
      linkPlace: "#"
   },
   {
      srcImg: "images/shop6.webp", textPlace: "Benckert Optik",
      linkPlace: "#"
   },
   {
      srcImg: "images/shop7.webp", textPlace: "Trångsund 8",
      linkPlace: "#"
   },
   {
      srcImg: "images/shop8.webp", textPlace: "Söderhallarna",
      linkPlace: "#"
   },
   {
      srcImg: "images/shop9.webp", textPlace: "LuxuryWatches",
      linkPlace: "#"
   },
   {
      srcImg: "images/shop10.webp", textPlace: "Blomverket",
      linkPlace: "#"
   },
   {
      srcImg: "images/shop11.webp", textPlace: "Charlotte Nicolin",
      linkPlace: "#"
   },
   {
   srcImg: "images/shop12.webp", textPlace: "Sibirien Stockholm",
     linkPlace: "#"
  },
  {
   srcImg: "images/shop13.webp", textPlace: "Nyström Stockholm",
   linkPlace: "#"
},
{
   srcImg: "images/shop14.webp", textPlace: "Blugiallo",
   linkPlace: "#"
},
{
   srcImg: "images/shop15.webp", textPlace: "Fruktaffären",
   linkPlace: "#"
},
{
srcImg: "images/shop16.webp", textPlace: "Juvelia",
  linkPlace: "#"
},
{
   srcImg: "images/shop17.webp", textPlace: "Melanders Blommor­",
   linkPlace: "#"
},
{
   srcImg: "images/shop18.webp", textPlace: "Eltra Store",
   linkPlace: "#"
},
{
   srcImg: "images/shop19.webp", textPlace: "Charlotte Nicolin",
   linkPlace: "#"
},
{
srcImg: "images/shop20.webp", textPlace: "Make Up Store",
  linkPlace: "#"
}
]

export default ShopRecommendPlaces;
