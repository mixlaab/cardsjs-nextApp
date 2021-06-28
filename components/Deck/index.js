import React, { useState, useEffect } from "react";
import Card from "../Card";
import styles from "./Deck.module.scss";

const Deck = (props) => {
  return (
    <div>
      {props.cards.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2 className={styles.subtitle}>{props.title}</h2>
          <div>
            {props.cards.map((card, index) => {
              const number = card["number"];
              const symbol = card["symbol"];
              return (
                <Card
                  key={index}
                  number={number}
                  symbol={symbol}
                  flipped={index < props.flipped}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Deck;
