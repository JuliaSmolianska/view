import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Footer.module.css';
import SocialMedia from '../SocialMedia/SocialMedia';

export default function Footer(props) {
   return (
      <div className={styles.paper}>
         <div className={styles.info}>
            <Row xs={1} md={2} lg={4}>
               <Col xs={12} sm={6} lg={3}>
                  <div className={styles.center}>
                     <img
                        src="https://emvwr2994ad.exactdn.com/wp-content/uploads/2022/05/footer-logo-symbol.svg"
                        width="80"
                        height="80"
                        className="d-inline-block align-center"
                        alt="logo"
                     />
                  </div>
                  <p>View Stockholm is a digital city guide that brings you the best of the city.</p>
                  <Container className={styles.icon}>
                     <SocialMedia />
                  </Container>
               </Col>
               <Col xs={12} sm={6} lg={3}>
                  <h3>Categories</h3>
                  <Nav.Link href={props.categories.categories[0].link}>
                     {props.categories.categories[0].name}
                  </Nav.Link>
                  <Nav.Link href={props.categories.categories[6].link}>
                     {props.categories.categories[6].name}
                  </Nav.Link>
                  <Nav.Link href={props.categories.categories[11].link}>
                     {props.categories.categories[11].name}
                  </Nav.Link>
                  <Nav.Link href={props.categories.categories[14].link}>
                     {props.categories.categories[14].name}
                  </Nav.Link>
                  <Nav.Link href={props.categories.categories[13].link}>
                     {props.categories.categories[13].name}
                  </Nav.Link>
               </Col>
               <Col xs={12} sm={6} lg={3}>
                  <h3 >This website</h3>
                  <Nav.Link href="https://viewstockholm.com/about/" target="_blank" >About</Nav.Link>
                  <Nav.Link href="https://viewstockholm.com/contact/">Contact</Nav.Link>
                  <Nav.Link href="https://viewstockholm.com/top-lists-contact/">Miss a place on our top </Nav.Link>
                  <Nav.Link href="https://viewstockholm.com/top-lists-contact/">lists?</Nav.Link>
                  <Nav.Link href="https://viewstockholm.com/advertising/">Advertising</Nav.Link>
                  <Nav.Link href="https://viewstockholm.com/career/">Work with us</Nav.Link>
                  <Nav.Link href="https://viewstockholm.com/privacy-cookie-policy/">Policies</Nav.Link>
               </Col>
               <Col xs={12} sm={6} lg={3}>
                  <h3>More</h3>
                  <Nav.Link href="https://viewstockholmcard.com/" target="_blank">View Stockholm Card</Nav.Link>
                  <Nav.Link href="https://viewstockholm.com/magazine/">Magazine</Nav.Link>
                  <Nav.Link href="https://viewstockholm.com/getting-to-stockholm/">Travel information</Nav.Link>
                  <Nav.Link href="https://viewstockholm.com/native/">Native</Nav.Link>
               </Col>
            </Row>
            <hr className={styles.hr} />
            <p className={styles.center}>
               © 2023 View Stockholm • All rights reserved • Made with <span className={styles.red}> ♥ </span> for Stockholm
            </p>
         </div>
      </div >
   )
};
