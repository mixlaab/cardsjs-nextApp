import { Deck } from "./../../../lib/deck";

const deck = new Deck();

export default function handler(req, res) {
  const data = req.query;
  const table = deck.dispatchCards(parseInt(data.quantity));
  res.status(200).json(table);
}
