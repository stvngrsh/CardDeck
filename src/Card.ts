import { Suit } from "./Suit";

/**
 * Object representing a single playing card from a standard 52 card deck.
 * Stores a suit from one of four playing card suits and a value between 1 and 13.
 */
export class Card {
  private _suit: Suit;
  private _value: number;

  /**
   * Creates a card object
   * @param suit A valid playing card suit (hearts, spades, diamonds or clubs)
   * @param value A valid playing card value (1 - 13 inclusive)
   */
  constructor(suit: Suit, value: number) {
    if (value < 1 || value > 13) {
      throw "Invalid card value";
    }
    if (suit !== Suit.CLUBS && suit !== Suit.DIAMONDS && suit !== Suit.HEARTS && suit !== Suit.SPADES) {
      throw "Invalid suit";
    }
    this._suit = suit;
    this._value = value;
  }

  /**
   * Returns the suit of the card
   */
  get suit(): Suit {
    return this._suit;
  }

  /**
   * Returns the value of the card
   */
  get value(): number {
    return this._value;
  }

  /**
   * Returns the string representation of the value of the card
   */
  getName(): string {
    if (this.value === 1) {
      return "Ace";
    } else if (this.value === 11) {
      return "Jack";
    } else if (this.value === 12) {
      return "Queen";
    } else if (this.value === 13) {
      return "King";
    } else {
      return this.value.toString();
    }
  }

  /**
   * Returns a string representation of the card, includes value and suit
   */
  getFullName(): string {
    return this.getName() + " of " + this.suit;
  }
}
