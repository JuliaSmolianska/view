import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./MainCards.module.css";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import store from "../../../store";
import { LanguageContext } from "../../../languageContext";
import { useContext } from "react";

const titles = {
  en: ["Everything you need to know about Stockholm"],
  se: ["Allt du behöver veta om Stockholm"],
};

function MainCards() {
  const languageContext = useContext(LanguageContext);
  const [cardLimit, setCardLimit] = useState(6);
  const [counter, setCounter] = useState(0);

  useEffect(() => {}, [cards]);

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
      <h1 className={styles.title}>The View</h1>
      <h4 className={styles.title2}>{titles[languageContext.language][0]}</h4>
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
        disabled={counter >= 3}
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

const Cards = ({ categoryCard, textCard, linkCard, srcImg }) => (
  <Col>
    <div>
      <Card>
        <Nav.Link href={linkCard}>
          <Card.Img variant="top" src={srcImg} className={styles.image} />
          <div className={styles.category}>{categoryCard}</div>
          <Card.Body className={styles.text}>
            <Card.Text>{textCard}</Card.Text>
          </Card.Body>
        </Nav.Link>
      </Card>
    </div>
  </Col>
);
export default MainCards;

const cards = [
  //1 line
  {
    categoryCard: `${store.categories[0].name}`,
    textCard: "10 reasons to visit Stockholm in the winter",
    linkCard: `${store.categories[0].link}`,
    srcImg: "images/card12.jpg",
  },

  {
    categoryCard: `${store.categories[3].name}`,
    textCard: "Best ice skating places in Stockholm",
    linkCard: `${store.categories[3].link}`,
    srcImg: "images/card13.jpg",
  },

  {
    categoryCard: `${store.categories[4].name}`,
    textCard: "Your guide to Stockholm’s best pubs",
    linkCard: `${store.categories[4].link}`,
    srcImg: "images/card14.jpg",
  },
  //2 line
  {
    categoryCard: `${store.categories[3].name}`,
    textCard: "The best playgrounds in Stockholm",
    linkCard: `${store.categories[3].link}`,
    srcImg: "images/card.jpg",
  },

  {
    categoryCard: `${store.categories[6].name}`,
    textCard: "Stockholm’s top food halls",
    linkCard: `${store.categories[6].link}`,
    srcImg: "images/card2.jpg",
  },

  {
    categoryCard: `${store.categories[3].name}`,
    textCard: "Outdoor swimming pools in Stockholm",
    linkCard: `${store.categories[3].link}`,
    srcImg: "images/card1.jpg",
  },
  //3 line
  {
    categoryCard: `${store.categories[3].name}`,
    textCard: "Stockholm’s best parks",
    linkCard: `${store.categories[3].link}`,
    srcImg: "images/card3.jpg",
  },

  {
    categoryCard: `${store.categories[1].name}`,
    textCard: "Stockholm’s best museums",
    linkCard: `${store.categories[1].link}`,
    srcImg: "images/card4.jpg",
  },

  {
    categoryCard: `${store.categories[14].name}`,
    textCard: "Stockholm’s 20 best interior design stores",
    linkCard: `${store.categories[14].link}`,
    srcImg: "images/card5.jpg",
  },
  //4 line
  {
    categoryCard: `${store.categories[14].name}`,
    textCard: "Stockholm’s best shopping malls",
    linkCard: `${store.categories[14].link}`,
    srcImg: "images/card6.jpg",
  },

  {
    categoryCard: `${store.categories[11].name}`,
    textCard: "Stay at the best hotels in Stockholm",
    linkCard: `${store.categories[11].link}`,
    srcImg: "images/card7.jpg",
  },

  {
    categoryCard: `${store.categories[4].name}`,
    textCard: "Stockholm’s best beer tastings",
    linkCard: `${store.categories[4].link}`,
    srcImg: "images/card8.jpg",
  },
  //5 line
  {
    categoryCard: `${store.categories[14].name}`,
    textCard: "Stockholm’s best shops for women’s clothes",
    linkCard: `${store.categories[14].link}`,
    srcImg: "images/card9.jpg",
  },

  {
    categoryCard: `${store.categories[7].name}`,
    textCard: "Your guide to Stockholm’s best Lebanese restaurants",
    linkCard: `${store.categories[7].link}`,
    srcImg: "images/card10.jpg",
  },

  {
    categoryCard: `${store.categories[14].name}`,
    textCard: "Your guide to Stockholm’s best toy stores",
    linkCard: `${store.categories[14].link}`,
    srcImg: "images/card11.jpg",
  },
];
