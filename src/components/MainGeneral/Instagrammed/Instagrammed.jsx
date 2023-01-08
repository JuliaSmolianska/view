import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import styles from './Instagrammed.module.css';
import { LanguageContext } from "../../../languageContext";
import { useContext } from "react";

const titles = {
   en: ["Follow us on instagram"],
   se: ["Följ oss på instagram "]
}

function Instagrammed() {
   const languageContext = useContext(LanguageContext);

   return (
      <Container fluid>
         <h5>STOCKHOLM INSTAGRAMMED  • <i>@viewstockholm</i></h5>
         <img
            src="https://emvwr2994ad.exactdn.com/wp-content/uploads/2018/11/wave-line.png?strip=all&lossy=1&quality=77&resize=200%2C12&ssl=1"
            width="200"
            height="10"
            className="d-inline-block align-top"
            alt="value"
         />
         <Carousel variant="dark" className={styles.box}>
            <Carousel.Item>
               <Row xs={4} >
                  <Col xs={3}>
                     <img
                        className="d-block w-100"
                        src="images/caruisel1_1.jpg"
                        alt="First slide"
                        height="200"
                     />
                  </Col>
                  <Col xs={3}>
                     <img
                        className="d-block w-100"
                        src="images/caruisel1_2.jpg"
                        alt="First slide"
                        height="200"
                     />
                  </Col>
                  <Col xs={3}>
                     <img
                        className="d-block w-100"
                        src="images/caruisel1_3.jpg"
                        alt="First slide"
                        height="200"
                     />
                  </Col>
                  <Col xs={3}>
                     <img
                        className="d-block w-100"
                        src="images/caruisel1_4.jpg"
                        alt="First slide"
                        height="200"
                     />
                  </Col>
               </Row>
            </Carousel.Item>
            <Carousel.Item>
               <Row xs={4}>
                  <Col xs={3}>
                     <img
                        className="d-block w-100"
                        src="images/caruisel2_1.jpg"
                        alt="Second slide"
                        height="200"
                     />
                  </Col>
                  <Col xs={3}>
                     <img
                        className="d-block w-100"
                        src="images/caruisel2_2.jpg"
                        alt="Second slide"
                        height="200"
                     />
                  </Col>
                  <Col xs={3}>
                     <img
                        className="d-block w-100"
                        src="images/caruisel2_3.jpg"
                        alt="Second slide"
                        height="200"
                     />
                  </Col>
                  <Col xs={3}>
                     <img
                        className="d-block w-100"
                        src="images/caruisel2_4.jpg"
                        alt="Second slide"
                        height="200"
                     />
                  </Col>
               </Row>
            </Carousel.Item>
            <Carousel.Item>
               <Row xs={4}>
                  <Col xs={3}>
                     <img
                        className="d-block w-100"
                        src="images/caruisel3_1.jpg"
                        alt="Third slide"
                        height="200"
                     />
                  </Col>
                  <Col xs={3}>
                     <img
                        className="d-block w-100"
                        src="images/caruisel3_2.jpg"
                        alt="Third slide"
                        height="200"
                     />
                  </Col>
                  <Col xs={3}>
                     <img
                        className="d-block w-100"
                        src="images/caruisel3_3.jpg"
                        alt="Third slide"
                        height="200"
                     />
                  </Col>
                  <Col xs={3}>
                     <img
                        className="d-block w-100"
                        src="images/caruisel3_4.jpg"
                        alt="Third slide"
                        height="200"
                     />
                  </Col>
               </Row>
            </Carousel.Item>
         </Carousel >
         <Nav.Link href="https://www.instagram.com/viewstockholm/" target="_blank">
            <Button variant="outline-dark" className={styles.button}>{titles[languageContext.language][0]}</Button>
         </Nav.Link>
      </Container>
   );
}

export default Instagrammed;