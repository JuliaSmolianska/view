import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import styles from './SocialMedia.module.css';

export default function SocialMedia() {
   return (
      <>
         <Button variant="outline-light" className={styles.icon}>
            <Nav.Link href="https://www.facebook.com/viewstockholm" target="_blank"><i className="bi bi-facebook icon"></i></Nav.Link>
         </Button>
         <Button variant="outline-light" className={styles.icon}>
            <Nav.Link href="https://twitter.com/viewstockholm" target="_blank"><i className="bi bi-twitter"></i></Nav.Link>
         </Button>
         <Button variant="outline-light" className={styles.icon}>
            <Nav.Link href="https://www.instagram.com/viewstockholm/" target="_blank"><i className="bi bi-instagram"></i></Nav.Link>
         </Button>
      </>
   )
}

