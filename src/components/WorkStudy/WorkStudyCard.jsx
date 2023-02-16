import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../Shop/ShopCard/ShopCard.module.css";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/esm/Container";
import React, { useEffect, useState } from "react";
import { LanguageContext } from "../../languageContext";
import { useContext } from "react";

const titles = {
  en: ["The latest about work and study in Stockholm"],
  se: ["Det senaste om att jobba och studera i Stockholm"],
};

export default function WorkStudyCard() {
  const languageContext = useContext(LanguageContext);
  const [cardLimit, setCardLimit] = useState(3);

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
    </Container>
  );
      }

const cards = [
  {
    category: {
      en: "WORK&STUDY",
      se: "JOBBA&STUDERA",
    },
    textCard: {
      en: "Have a conference in Stockholm",
      se: "Ha konferens i Stockholm",
    },
    linkCard: "#",
    srcImg: "images/work_studyCard1.webp",
  },

  {
    category: {
      en: "WORK&STUDY",
      se: "JOBBA&STUDERA",
    },
    textCard: {
      en: "Stockholm's best coworking spaces",
      se: "Stockholm's bästa kontorshotell",
    },
    linkCard: "#",
    srcImg: "images/work_studyCard2.webp",
  },

  {
    category: {
      en: "WORK&STUDY",
      se: "JOBBA&STUDERA",
    },
    textCard: {
      en: "Studio Swedish – the online Swedish course",
      se: "Studio Swedish – onlinekurs i svenska",
    },
    linkCard: "#",
    srcImg: "images/work_studyCard3.webp",
  },
];
