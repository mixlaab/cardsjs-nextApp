import { Deck } from "../../../lib/game";

const deck = new Deck();

export default function handler(req, res) {
  const data = req.query;
  const table = deck.dispatchCardsOnce(parseInt(data.quantity));
  res.status(200).json(table);
}
