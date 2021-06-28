import { useState } from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  const [cardFace, setCardFace] = useState(props.flipped);
  const isNumber = !isNaN(props.number);
  let cardContent;
  if (props.number === "A") {
    cardContent = <div className={styles.qty}>{props.symbol}</div>;
  }
  if (isNumber) {
    cardContent = new Array(parseInt(props.number))
      .fill(props.symbol)
      .map((cardSymbol, index) => (
        <div key={index} className={styles.qty}>
          {cardSymbol}
        </div>
      ));
  }

  return (
    <div
      onClick={() => setCardFace(!cardFace)}
      className={
        cardFace ? [styles["card"], styles["flipped"]].join(" ") : styles.card
      }
      number={props.number}
      symbol={props.symbol}
    >
      <div className={styles["card-inner"]}>
        <div className={styles["card-front"]}>
          <div
            className={[styles["card-corner"], styles["top-left"]].join(" ")}
          >
            <div>{props.number}</div>
            <div>{props.symbol}</div>
          </div>
          <div className={styles.symbols}>{cardContent}</div>
          <div
            className={[styles["card-corner"], styles["bottom-right"]].join(
              " "
            )}
          >
            <div>{props.number}</div>
            <div>{props.symbol}</div>
          </div>
        </div>
        <div className={styles["card-back"]}></div>
      </div>
    </div>
  );
};

export default Card;
