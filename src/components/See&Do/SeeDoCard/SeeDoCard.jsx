import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../../Shop/ShopCard/ShopCard.module.css";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from "react";
import { LanguageContext } from "../../../languageContext";
import { useContext } from "react";

const titles = {
   en: ["The latest about what to see and do in Stockholm"],
   se: ["Det senaste om vad du kan se och göra i Stockholm"]
}

export default function SeeDoCard() {
   const languageContext = useContext(LanguageContext);
   const [cardLimit, setCardLimit] = useState(6);
   const [counter, setCounter] = useState(0);

   useEffect(() => { }, [cards]);

   const Cards = ({ category, textCard, linkCard, srcImg }) => (
    <Col>
       <div>
          <Card>
             <Nav.Link href={linkCard}>
                <Card.Img variant="top" src={srcImg} className={styles.image} />
                <div className={styles.category}>{category[languageContext.language||"en"]}</div>
                <Card.Body className={styles.text}>
                   <Card.Text>
                      {textCard[languageContext.language||"en"]}
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
      category: {
         en: "see&do",
         se: "SE&GÖRA"
      },
      textCard: {
        en: "Work out at the best gyms in Stockholm",
        se: "Träna på Stockholms bästa gym"
      },
      linkCard: "#", srcImg: "images/see_doCard1.webp"
   },

   {
      category: {
         en: "activities",
         se: "aktiviteter"
      },
      textCard: {
      en: "Your guide to experiences in Stockholm",
      se: "Din guide till upplevelser i Stockholm"
    },
      linkCard: "#", srcImg: "images/see_doCard2.webp"
   },

   {
      category: {
         en: "health&beauty",
         se: "hälsa&skönhet"
      },
      textCard: {
      en: "Your guide to mini-golf in Stockholm",
      se: "Din guide till minigolf i Stockholm"
    },
      linkCard: "#", srcImg: "images/see_doCard3.webp"
   },
   //2 line
   {
      category: {
         en: "intertainment",
         se: "underhållning"
      },
      textCard: {
      en: "The best Comedy Clubs in Stockholm",
      se: "Stockholms bästa Comedy Clubs"
    },
      linkCard: "#", srcImg: "images/see_doCard4.webp"
   },

   {
      category: {
         en: "activities",
         se: "aktiviteter"
      },
      textCard: {
      en: "Play padel in Stockholm",
      se: "Spela padel i Stockholm"
    },
      linkCard: "#", srcImg: "images/see_doCard5.webp"
   },

   {
      category: {
         en: "see&do",
         se: "SE&GÖRA"
      },
      textCard: {
      en: "40+ Fun Things to Do (as a Tourist) in Stockholm",
      se: "40+ roliga saker att göra i Stockholm som turist"
    },
      linkCard: "#", srcImg: "images/see_doCard6.webp"
   },
   //3 line
   {
      category: {
         en: "health&beauty",
         se: "hälsa&skönhet"
      },
      textCard: {
      en: "Your guide to tattoos in Stockholm",
      se: "Din guide till tatueringar i Stockholm"
    },
      linkCard: "#", srcImg: "images/see_doCard7.webp"
   },

   {
      category: {
         en: "see&do",
         se: "SE&GÖRA"
      },
      textCard: {
      en: "Discover the literary Stockholm",
      se: "Upptäck det litterära Stockholm"
    },
      linkCard: "#", srcImg: "images/see_doCard8.webp"
   },

   {
      category: {
         en: "activities",
         se: "aktiviteter"
      },
      textCard: {
      en: "Your guide to Stockholm's best escape rooms",
      se: "Din guide till Stockholms bästa escape rooms"
    },
      linkCard: "#", srcImg: "images/see_doCard9.webp"
   },
   //4 line
   {
      category: {
         en: "culture",
         se: "KULTUR"
      },
      textCard: {
      en: "Enjoy world-class concerts at Stockholm Concert Hall",
      se: "Njut av konserter i världsklass på Konserthuset Stockholm"
    },
      linkCard: "#", srcImg: "images/see_doCard10.webp"
   },

   {
      category: {
         en: "see&do",
         se: "SE&GÖRA"
      },
      textCard: {
      en: "Stockholm Tourist Information",
      se: "Turistinformation för dig som ska resa till Stockholm"
    },
      linkCard: "#", srcImg: "images/see_doCard11.webp"
   },

   {
      category: {
         en: "outdoors",
         se: "UTOMHUS"
      },
      textCard: {
      en: "Rent a bike in Stockholm",
      se: "Hyra cykel i Stockholm"
    },
      linkCard: "#", srcImg: "images/see_doCard12.webp"
   }
  ]
   