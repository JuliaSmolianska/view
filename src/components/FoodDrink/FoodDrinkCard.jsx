import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../Shop/ShopCard/ShopCard.module.css";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import { LanguageContext } from "../../languageContext";
import { useContext } from "react";

const titles = {
  en: ["The latest about food and drink in Stockholm"],
  se: ["Det senaste om mat och dryck i Stockholm"],
};

export default function FoodDrinkCard() {
  const languageContext = useContext(LanguageContext);
  const [cardLimit, setCardLimit] = useState(6);
  const [counter, setCounter] = useState(0);

  useEffect(() => {}, [cards]);

  const Cards = ({ category, textCard, linkCard, srcImg }) => (
    <Col>
      <div>
        <Card>
          <Nav.Link href={linkCard}>
            <Card.Img variant="top" src={srcImg} className={styles.image} />
            <div className={styles.category}>
              {category[languageContext.language]}
            </div>
            <Card.Body className={styles.text}>
              <Card.Text>{textCard[languageContext.language]}</Card.Text>
            </Card.Body>
          </Nav.Link>
        </Card>
      </div>
    </Col>
  );

  function returnCards() {
    const cardsToRender = [];
    for (let index = 0; index <= cards.length; index++) {
      if (index >= cardLimit) {
        return cardsToRender;
      }
      cardsToRender.push(<Cards {...cards[index]} />);
      console.log(cards);
    }
    return cardsToRender;
  }

  return (
    <Container fluid className={styles.cards}>
      <h4 className={styles.title}>{titles[languageContext.language][0]}</h4>
      <img
        src="https://emvwr2994ad.exactdn.com/wp-content/uploads/2018/11/wave-line.png?strip=all&lossy=1&quality=77&resize=200%2C12&ssl=1"
        width="200"
        height="10"
        className={`d-inline-block align-top ${styles.margin}`}
        alt="value"
      />
      <Row xs={1} md={2} lg={3} className="g-5">
        {returnCards()}
      </Row>
      <Button
        disabled={counter >= 2}
        onClick={() => {
          setCardLimit(cardLimit + 3);
          setCounter(counter + 1);
        }}
        variant="dark"
        className={styles.button}
      >
        load more articles
      </Button>
    </Container>
  );
}

const cards = [
  //1 line
  {
    category: {
      en: "RESTAURANTS",
      se: "RESTAURANGER",
    },
    textCard: {
      en: "The best restaurants in Stockholm",
      se: "De bästa restaurangerna i Stockholm",
    },
    linkCard: "#",
    srcImg: "images/food_card1.webp",
  },

  {
    category: {
      en: "BARS&PABS",
      se: "BARER&PUBAR",
    },
    textCard: {
      en: "Stockholm's best beer tastings",
      se: "Stockholms bästa ölprovningar",
    },
    linkCard: "#",
    srcImg: "images/card8.jpg",
  },

  {
    category: {
      en: "RESTAURANTS",
      se: "RESTAURANGER",
    },
    textCard: {
      en: "Your guide to Stockholm's best Lebanese restaurants",
      se: "Din guide till Stockholms bästa libanesiska restauranger",
    },
    linkCard: "#",
    srcImg: "images/food_card3.webp",
  },
  //2 line
  {
    category: {
      en: "RESTAURANTS",
      se: "RESTAURANGER",
    },
    textCard: {
      en: "Stockholm's best Latin American restaurants",
      se: "Stockholms bästa latinamerikanska restauranger",
    },
    linkCard: "#",
    srcImg: "images/food_card4.webp",
  },

  {
    category: {
      en: "RESTAURANTS",
      se: "RESTAURANGER",
    },
    textCard: {
      en: "Fine dining restaurants in Stockholm",
      se: "Din guide till lyxrestauranger i Stockholm",
    },
    linkCard: "#",
    srcImg: "images/food_card5.webp",
  },

  {
    category: {
      en: "FOOD&DRINK",
      se: "MAT&DRYNK",
    },
    textCard: {
      en: "Stockholm's top food halls",
      se: "Food courts i Stockholm",
    },
    linkCard: "#",
    srcImg: "images/card2.jpg",
  },
  //3 line
  {
    category: {
      en: "RESTAURANTS",
      se: "RESTAURANGER",
    },
    textCard: {
      en: "Stockholm's best sushi restaurants",
      se: "Stockholms bästa sushi",
    },
    linkCard: "#",
    srcImg: "images/food_card7.webp",
  },

  {
    category: {
      en: "RESTAURANTS",
      se: "RESTAURANGER",
    },
    textCard: {
      en: "The best restaurants in Södermalm",
      se: "De bästa restaurangerna på Södermalm",
    },
    linkCard: "#",
    srcImg: "images/food_card8.webp",
  },

  {
    category: {
      en: "CAFES",
      se: "KAFEER",
    },
    textCard: {
      en: "Your guide to bubble tea/boba tea in Stockholm",
      se: "Din guide till bubble tea/boba tea i Stockholm",
    },
    linkCard: "#",
    srcImg: "images/food_card9.webp",
  },
  //4 line
  {
    category: {
      en: "CAFES",
      se: "KAFEER",
    },
    textCard: {
      en: "Enjoy Stockholm's best semla",
      se: "Njut av Stockholms godaste semla",
    },
    linkCard: "#",
    srcImg: "images/food_card10.webp",
  },

  {
    category: {
      en: "FOOD&DRINK",
      se: "MAT&DRYNK",
    },
    textCard: {
      en: "Stockholm's best vegan restaurants",
      se: "Stockholms bästa veganska restauranger",
    },
    linkCard: "#",
    srcImg: "images/food_card11.webp",
  },

  {
    category: {
      en: "RESTAURANTS",
      se: "RESTAURANGER",
    },
    textCard: {
      en: "Your guide to tapas in Stockholm",
      se: "Din guide till tapas i Stockholm",
    },
    linkCard: "#",
    srcImg: "images/food_card12.webp",
  },
];
