import { Deck } from "../../../lib/game";

const deck = new Deck();
const table = deck.dispatchCardsOnce(5);

export default function handler(req, res) {
  res.status(200).send(table);
}
