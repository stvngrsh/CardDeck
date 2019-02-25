import { CardDeck } from "../CardDeck";
import { Suit } from "../Suit";

test("Deck draws a card", () => {
  const deck = new CardDeck();
  const card = deck.dealOneCard();
  expect(card).toBeDefined();
});

test("Deck can be empty", () => {
  const deck = new CardDeck();
  for (let i = 0; i < 52; i++) {
    deck.dealOneCard();
  }
  const card = deck.dealOneCard();
  expect(card).toBeUndefined();
});

test("Deck resets after shuffle", () => {
  const deck = new CardDeck();
  for (let i = 0; i < 10; i++) {
    deck.dealOneCard();
  }
  deck.shuffle();
  const cards = [];
  for (let i = 0; i < 100; i++) {
    const card = deck.dealOneCard();
    if (card !== undefined) {
      cards.push(card);
    }
  }
  expect(cards.length).toBe(52);
});

test("Deck has only valid suits", () => {
  const deck = new CardDeck();
  const suitCount: { [key: string]: number } = {};
  for (let i = 0; i < 52; i++) {
    const card = deck.dealOneCard();
    if (card) {
      const suit = card.suit;
      if (!suitCount[suit]) {
        suitCount[suit] = 0;
      }
      suitCount[suit]++;
    }
  }

  const suits = Object.keys(suitCount);
  expect(suits.length).toBe(4);
  suits.forEach(key => {
    const isValidSuit = key === Suit.DIAMONDS || key === Suit.CLUBS || key === Suit.HEARTS || key === Suit.SPADES;
    expect(isValidSuit).toBeTruthy();
    expect(suitCount[key]).toBe(13);
  });
});

test("Deck has only valid card values", () => {
  const deck = new CardDeck();
  const valueCount: { [key: string]: number } = {};
  for (let i = 0; i < 52; i++) {
    const card = deck.dealOneCard();
    if (card) {
      const value = card.value;
      if (!valueCount[value]) {
        valueCount[value] = 0;
      }
      valueCount[value]++;
    }
  }

  const values = Object.keys(valueCount);
  expect(values.length).toBe(13);
  values.forEach(key => {
    const isValidValue = parseInt(key) >= 1 && parseInt(key) <= 13;
    expect(isValidValue).toBeTruthy();
    expect(valueCount[key]).toBe(4);
  });
});

test("Deck contains only unique cards", () => {
  const deck = new CardDeck();
  const uniqueCounts: { [key: string]: number } = {};
  for (let i = 0; i < 52; i++) {
    const card = deck.dealOneCard();
    if (card) {
      const cardName = card.suit + "." + card.value;
      if (!uniqueCounts[cardName]) {
        uniqueCounts[cardName] = 0;
      }
      uniqueCounts[cardName]++;
    }
  }

  const uniqueCards = Object.keys(uniqueCounts);
  expect(uniqueCards.length).toBe(52);
  uniqueCards.forEach(key => {
    expect(uniqueCounts[key]).toBe(1);
  });
});

test("Deck contains only valid cards", () => {
  const deck = new CardDeck();
  for (let i = 0; i < 52; i++) {
    const card = deck.dealOneCard();
    if (card) {
      const isValidValue = card.value >= 1 && card.value <= 13;
      const isValidSuit =
        card.suit === Suit.DIAMONDS ||
        card.suit === Suit.CLUBS ||
        card.suit === Suit.HEARTS ||
        card.suit === Suit.SPADES;
      expect(isValidSuit).toBeTruthy();
      expect(isValidValue).toBeTruthy();
    }
  }
});
