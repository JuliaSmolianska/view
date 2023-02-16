import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './ShopCard.module.css'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from "react";
import { LanguageContext } from "../../../languageContext";
import { useContext } from "react";

const titles = {
   en: ["The latest about shopping in Stockholm"],
   se: ["Det senaste om shopping i Stockholm"]
}

export default function ShopCard() {
   const languageContext = useContext(LanguageContext);
   const [cardLimit, setCardLimit] = useState(6);
   const [counter, setCounter] = useState(0);

   useEffect(() => { }, [cards]);

   const Cards = ({ textCard, linkCard, srcImg }) => (
    <Col>
       <div>
          <Card>
             <Nav.Link href={linkCard}>
                <Card.Img variant="top" src={srcImg} className={styles.image} />
                <div className={styles.category}>shopping</div>
                <Card.Body className={styles.text}>
                   <Card.Text>
                      {textCard[languageContext.language]}
                   </Card.Text>
                </Card.Body>
             </Nav.Link>
          </Card>
       </div>
    </Col >
 );

   function returnCards() {
      const cardsToRender = [];
      for (let index = 0; index <= cards.length; index++) {
         if (index >= cardLimit) {
            return cardsToRender;
         }
         cardsToRender.push(<Cards {...cards[index]} />);
         console.log(cards)
      }
      return cardsToRender;
   }

   return (
      <Container fluid className={styles.cards}>
         <h4 className={styles.title}>
            {titles[languageContext.language][0]}
         </h4>
         <img
            src="https://emvwr2994ad.exactdn.com/wp-content/uploads/2018/11/wave-line.png?strip=all&lossy=1&quality=77&resize=200%2C12&ssl=1"
            width="200"
            height="10"
            className={`d-inline-block align-top ${styles.margin}`}
            alt="value"
         />
         <Row xs={1} md={2} lg={3} className="g-5">
            {returnCards()}
         </Row >
         <Button disabled={counter>=2} onClick={() => {setCardLimit(cardLimit + 3); setCounter(counter + 1)}} variant="dark" className={styles.button}>load more articles</Button>
      </Container>
   );
}

const cards = [
   //1 line
   {
      textCard: {
        en: "Stockholm's best shopping malls",
        se: "Stockholms bästa gallerior och köpcentrum"
      },
      linkCard: "#", srcImg: "images/card6.jpg"
   },

   {
    textCard: {
      en: "Stockholm's best shops for women's clothes",
      se: "Stockholms bästa butiker för damkläder"
    },
      linkCard: "#", srcImg: "images/card9.jpg"
   },

   {
    textCard: {
      en: "Your guide to Stockholm's best toy stores",
      se: "Din guide till Stockholms bästa leksaksaffärer"
    },
      linkCard: "#", srcImg: "images/card11.jpg"
   },
   //2 line
   {
    textCard: {
      en: "Stockholm's best streetwear stores",
      se: "Stockholms bästa streetwearbutiker"
    },
      linkCard: "#", srcImg: "images/shopCard4.webp"
   },

   {
    textCard: {
      en: "Shop designer bags in Stockholm",
      se: "Shoppa designerväskor i Stockholm"
    },
      linkCard: "#", srcImg: "images/shopCard5.webp"
   },

   {
    textCard: {
      en: "Stockholm's best opticians",
      se: "Stockholms bästa optiker"
    },
      linkCard: "#", srcImg: "images/shopCard6.webp"
   },
   //3 line
   {
    textCard: {
      en: "Stockholm's best menswear stores",
      se: "Stockholms bästa herrekiperingar"
    },
      linkCard: "#", srcImg: "images/shopCard7.webp"
   },

   {
    textCard: {
      en: "Stockholm's Best Organic Food Stores",
      se: "Stockholms bästa Organic Food Stores"
    },
      linkCard: "#", srcImg: "images/shopCard8.webp"
   },

   {
    textCard: {
      en: "5 specialty gift shops in Stockholm",
      se: "5 presentbutiker i Stockholm för dig som vill hitta speciella gåvor"
    },
      linkCard: "#", srcImg: "images/shopCard9.webp"
   },
   //4 line
   {
    textCard: {
      en: "Stockholm's 10 best shopping streets",
      se: "Stockholms 10 bästa shoppinggator"
    },
      linkCard: "#", srcImg: "images/shopCard10.webp"
   },

   {
    textCard: {
      en: "Best Vintage Clothing Shops in Stockholm",
      se: "Stockholms bästa vintagebutiker för kläder"
    },
      linkCard: "#", srcImg: "images/shopCard11.webp"
   },

   {
    textCard: {
      en: "Ho ho ho! Stockholm's best Christmas markets",
      se: "Ho ho ho! Stockholms bästa julmarknader"
    },
      linkCard: "#", srcImg: "images/shopCard12.webp"
   }
  ]
   