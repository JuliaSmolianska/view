import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState, useEffect, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './Header.module.css';
import SocialMedia from '../SocialMedia/SocialMedia';
import { LanguageContext } from "../../languageContext";

const titles = {
   en: ["SEE&DO", "MUSEUM &ATTRACTIONS", "ACTIVITIES", "OUTDOORS", "CULTURE&ENTERTAINMENT", "HEALTH&BEAUTY",
      "FOOD&DRINK", "RESTAURANT", "CAFES", "BARS&PABS", "NIGHTlIFE", "STAY", "SHOP", "WORK&STUDY", "SEARCH..."],
   se: ["SE&GÖRA", "MUSEER&ATTRACTIONER", "AKTIVITETER", "UTOMHUS", "KULTUR&UNDERHÅLLNING", "HÄLSA&SKÖNHET",
      "MAT&DRYNK", "RESTAURANGER", "KAFEER", "BARER&PUBAR", "NATTLIV", "BO", "SHOPPING", "JOBBA&STUDERA", "SÖK..."]
}

export default function NavHeader(props) {
   const [buttonClick, setButtonClick] = useState(0);
   const [init, setInit] = useState(true);
   const expand = "lg";
   const languageContext = useContext(LanguageContext);

   useEffect(() => {
      if (init) {
         return;
      }
   }, [buttonClick])

   function handleLanguage(language) {
      languageContext.setLanguage(language);
   }

   function startSearch() {
      setInit(false);
      setButtonClick(buttonClick + 1);
   }

   function finishSearch() {
      setInit(true);
      setButtonClick(buttonClick + 1);
   }

   if (init) {
      return (
         <>
            <Navbar key={expand} bg="dark" variant="dark" fixed="top" expand={expand} className="mb-3">
               <Container fluid className={styles.menu}>
                  <Navbar.Brand href="https://viewstockholm.com/">
                     <img
                        src="https://emvwr2994ad.exactdn.com/wp-content/uploads/2022/04/view-stockholm-logo.png?strip=all&lossy=1&quality=77&ssl=1"
                        width="200"
                        height="50"
                        className="d-inline-block align-top"
                        alt="view-stockholm-logo"
                     />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className={styles.linkMenu} />
                  <Navbar.Offcanvas
                     id={`offcanvasNavbar-expand-${expand}`}
                     aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                     placement="end"
                     className={styles.linkMenu1}
                  >
                     <Offcanvas.Header closeButton>
                     </Offcanvas.Header>
                     <Offcanvas.Body>
                        <Nav className={`justify-content-end flex-grow-1 pe-3 ${styles.menuBody}`}>
                           <NavDropdown title={titles[languageContext.language][0]} id="collasible-nav-dropdown" className={styles.nopadding}>
                              <Container className={styles.link2}>
                                 <NavDropdown.Item href={props.categories.categories[0].link} className={styles.link_title}>{titles[languageContext.language][0]}</NavDropdown.Item>
                                 <NavDropdown.Item href={props.categories.categories[1].link} className={styles.link1}>{titles[languageContext.language][1]}</NavDropdown.Item>
                                 <NavDropdown.Item href={props.categories.categories[2].link} className={styles.link1}>{titles[languageContext.language][2]}</NavDropdown.Item>
                                 <NavDropdown.Item href={props.categories.categories[3].link} className={styles.link1}>{titles[languageContext.language][3]}</NavDropdown.Item>
                                 <NavDropdown.Item href={props.categories.categories[4].link} className={styles.link1}>{titles[languageContext.language][4]}</NavDropdown.Item>
                                 <NavDropdown.Item href={props.categories.categories[5].link} className={styles.link1}>{titles[languageContext.language][5]}</NavDropdown.Item>
                              </Container>
                           </NavDropdown>

                           <NavDropdown title={titles[languageContext.language][6]} id="collasible-nav-dropdown">
                              <Container className={styles.link2}>
                                 <NavDropdown.Item href={props.categories.categories[6].link} className={styles.link_title}>{titles[languageContext.language][6]}</NavDropdown.Item>
                                 <NavDropdown.Item href={props.categories.categories[7].link} className={styles.link1}>{titles[languageContext.language][7]}</NavDropdown.Item>
                                 <NavDropdown.Item href={props.categories.categories[8].link} className={styles.link1}>{titles[languageContext.language][8]}</NavDropdown.Item>
                                 <NavDropdown.Item href={props.categories.categories[9].link} className={styles.link1}>{titles[languageContext.language][9]}</NavDropdown.Item>
                                 <NavDropdown.Item href={props.categories.categories[10].link} className={styles.link1}>{titles[languageContext.language][10]}</NavDropdown.Item>
                              </Container>
                           </NavDropdown>

                           <Nav.Link href={props.categories.categories[11].link} className={styles.link}>{titles[languageContext.language][11]}</Nav.Link>
                           <Nav.Link href={props.categories.categories[12].link} className={styles.link}>{titles[languageContext.language][12]}</Nav.Link>
                           <Nav.Link href={props.categories.categories[13].link} className={styles.link}>{titles[languageContext.language][13]}</Nav.Link>
                           <button className={styles.language} onClick={() => handleLanguage("en")}>
                              <img
                                 src="https://emvwr2994ad.exactdn.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png?strip=all&lossy=1&quality=77&ssl=1"
                                 width="25"
                                 height="12"
                                 alt="plugins"
                              />
                           </button>
                           <button className={styles.language} onClick={() => handleLanguage("se")}>
                              <img
                                 src="https://emvwr2994ad.exactdn.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/sv.png?strip=all&lossy=1&quality=77&ssl=1"
                                 width="25"
                                 height="12"
                                 alt="plugins"
                              />
                           </button>
                        </Nav>
                     </Offcanvas.Body>
                  </Navbar.Offcanvas>
                  <Button variant="outline-light" onClick={startSearch} className={styles.iconSearch}><i className="bi bi-search"></i></Button>
                  <Container className={styles.iconSocial}>
                     <SocialMedia />
                  </Container>
               </Container>
            </Navbar>
         </>
      );
   } else {
      return (
         <>
            <Navbar key={expand} bg="dark" variant="dark" fixed="top" expand={expand} className="mb-3">
               <Container fluid className={styles.menu}>
                  <Navbar.Brand href="https://viewstockholm.com/">
                     <img
                        src="https://emvwr2994ad.exactdn.com/wp-content/uploads/2022/04/view-stockholm-logo.png?strip=all&lossy=1&quality=77&ssl=1"
                        width="200"
                        height="50"
                        className="d-inline-block align-top"
                        alt="view-stockholm-logo"
                     />
                  </Navbar.Brand>
                  <Form className="d-flex">
                     <Form.Control
                        type="search"
                        placeholder={titles[languageContext.language][14]}
                        className={`me-2 ${styles.inputSearch}`}
                        aria-label="Search"
                     />
                     <Button onClick={finishSearch} className={styles.closeSearchBut}>X</Button>
                  </Form>
                  <Container className={styles.iconSocial}>
                     <SocialMedia />
                  </Container>
               </Container>
            </Navbar>
         </>
      )
   }
} 