import styles from "./Symbols.module.scss";

const Symbols = (props) => {
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
  return <div className={styles.symbols}>{cardContent}</div>;
};

export default Symbols;
