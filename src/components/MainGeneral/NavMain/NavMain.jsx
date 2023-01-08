import styles from './NavMain.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LanguageContext } from "../../../languageContext";
import { useContext } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import DelayComponent from "./NavMainDelayComponent"


const titles = {
   en: ["Explore more of Stockholm", "SEE&DO", "FOOD&DRINK", "SHOPPING", "STAY"],
   se: ["Utforska mer av Stockholm", "SE&GÖRA", "MAT&DRYNK", "SHOPPING", "BO"]
}

function NavMain(props) {
   const languageContext = useContext(LanguageContext);

   return (
      <Container fluid className={styles.paper}>
         <p className={styles.text}>{titles[languageContext.language][0]}</p>
         <img
            src="https://emvwr2994ad.exactdn.com/wp-content/uploads/2018/11/wave-line.png?strip=all&lossy=1&quality=77&resize=200%2C12&ssl=1"
            width="200"
            height="10"
            className={`d-inline-block align-top ${styles.margin}`}
            alt="value"
            color='white'
         />
         <Row xs={2} lg={4}>
            <DelayComponent delay={3000}>
               <Nav.Link href={props.categories.categories[0].link} >
                  <div className={styles.bgIcon}>
                     <i className={`bi bi-bank ${styles.icon}`}></i>
                  </div>
                  <p className={styles.text2}>{titles[languageContext.language][1]}</p>
               </Nav.Link>
            </DelayComponent>
            <DelayComponent delay={4000}>
               <Nav.Link href={props.categories.categories[6].link} >
                  <div className={styles.bgIcon}>
                     <i className={`bi bi-cup-hot ${styles.icon}`}></i>
                  </div>
                  <p className={styles.text2}>{titles[languageContext.language][2]}</p>
               </Nav.Link>
            </DelayComponent>
            <DelayComponent delay={5000}>
               <Nav.Link href={props.categories.categories[12].link} >
                  <div className={styles.bgIcon}>
                     <i className={`bi bi-handbag ${styles.icon}`}></i>
                  </div>
                  <p className={styles.text2}>{titles[languageContext.language][3]}</p>
               </Nav.Link>
            </DelayComponent>
            <DelayComponent delay={6000}>
               <Nav.Link href={props.categories.categories[11].link} >
                  <div className={styles.bgIcon}>
                     <i className={`bi bi-house-check ${styles.icon}`}></i>
                  </div>
                  <p className={styles.text2}>{titles[languageContext.language][4]}</p>
               </Nav.Link>
            </DelayComponent>
         </Row>
      </Container>
   )
}
export default NavMain;