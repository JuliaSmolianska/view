import styles from './Generalimg.module.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LanguageContext } from "../../../languageContext";
import { useContext } from "react";


const titles = {
   en: ["Your city guide to Stockholm", "Bringing you the best of the city", "Hi! Looking for something?", "RECOMENDED FOR YOU", "Celebrate New Year’s Eve in Stockholm", "READ MORE"],
   se: ["Din cityguide till Stockholm", "Ger dig det bästa som stan har att bjuda på", "Hej! Vad letar du efter?", "REKOMMENDERAT FÖR DIG", "Fira nyår i Stockholm", "LÄS MER"]
}
export default function Generalimg() {
   const languageContext = useContext(LanguageContext);

   return (
      <>
         <div className={styles.img}>
            <img
               src="https://emvwr2994ad.exactdn.com/wp-content/uploads/2018/11/view-stockholm-background.jpg?strip=all&lossy=1&quality=77&ssl=1"
               width="100%"
               height="400"
               alt="view-stockholm"
            />
         </div>
         <Col xs="11" className={styles.text}>
            <h1>{titles[languageContext.language][0]}</h1>
            <h3>{titles[languageContext.language][1]}</h3>
            <br />
            <Col xs={{ span: 10, offset: 1 }} lg={{ span: 6, offset: 3 }} className={styles.search}>
               <Form className="d-flex">
                  <Form.Control
                     type="search"
                     placeholder={titles[languageContext.language][2]}
                     className={`me-2 ${styles.search1}`}
                     aria-label="Search"
                  />
                  <Button variant="secondary" className={styles.searchButton}><i className="bi bi-search" style={{ fontWeight: "700" }}></i></Button>
               </Form>
            </Col>
         </Col>
         <Container>
            <br />
            <h6 text="start">{titles[languageContext.language][3]}</h6>
            <Row>
               <Col xs="11" lg={{ span: 6, offset: 1 }} className={styles.img2}>
                  <img
                     src="https://emvwr2994ad.exactdn.com/wp-content/uploads/2016/12/new_year_featured-795x400.jpg?strip=all&lossy=1&quality=77&ssl=1"
                     height="300"
                     alt="wp-content"
                  />
                  <div className={styles.text2}>
                     <h3>{titles[languageContext.language][4]} 2022</h3>
                     <Button variant="outline-light" className={styles.button}>{titles[languageContext.language][5]}
                        <Nav.Link href="https://viewstockholm.com/sv/stockholm-fira-nyar/"></Nav.Link>
                     </Button>
                  </div>
               </Col>
               <Col xs="10" lg={{ span: 3, offset: 1 }}>
                  <Nav.Link href="https://aimoshare.se/" target="_blank">
                     <img
                        src="https://emvwr2994ad.exactdn.com/wp-content/uploads/2019/09/stockholms-glasshus-ad-320x350.jpg?strip=all&lossy=1&quality=77&ssl=1"
                        height="300"
                        alt="wp-content"
                     />
                  </Nav.Link>
               </Col>
            </Row>
         </Container>
      </>
   )
}