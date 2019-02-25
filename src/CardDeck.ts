import { Card } from "./Card";
import { Suit } from "./Suit";

/**
 * Object representing a 52 card deck.
 * Deck will always contain 52 unique cards, 4 suits, aces low, no jokers.
 */
export class CardDeck {
  private deck: Card[];
  private index: number;

  /**
   * Creates a 52 card deck and shuffles the deck once.
   */
  constructor() {
    this.index = 0;
    this.deck = [];
    for (let i = 1; i < 14; i++) {
      this.deck.push(new Card(Suit.CLUBS, i));
      this.deck.push(new Card(Suit.DIAMONDS, i));
      this.deck.push(new Card(Suit.HEARTS, i));
      this.deck.push(new Card(Suit.SPADES, i));
    }

    this.shuffle();
  }

  /**
   * Resets the deck to a full 52 cards and shuffles the deck.
   */
  shuffle(): void {
    this.index = 0;
    for (let i = this.deck.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[rand]] = [this.deck[rand], this.deck[i]];
    }
  }

  /**
   * Returns one card from the top of the deck
   */
  dealOneCard(): Card | undefined {
    if (this.index < 52) {
      const card = this.deck[this.index];
      this.index++;
      return card;
    }
  }
}
