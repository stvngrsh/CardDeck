import { Card } from "../Card";
import { Suit } from "../Suit";

test("Card is created", () => {
  const card = new Card(Suit.SPADES, 5);
  expect(card).toBeDefined();
  expect(card.suit).toBe(Suit.SPADES);
  expect(card.value).toBe(5);
});

test("Card cannot be less than 1 (Ace)", () => {
  function createCard() {
    new Card(Suit.SPADES, 0);
  }
  expect(createCard).toThrowError();
});

test("Card cannot be greater than 13 (King)", () => {
  function createCard() {
    new Card(Suit.SPADES, 14);
  }
  expect(createCard).toThrowError();
});

test("All valid values of card can be created", () => {
  const cards = [];
  for (let i = 1; i < 14; i++) {
    cards.push(new Card(Suit.CLUBS, i));
  }
  cards.forEach((card, i) => expect(card.value).toBe(i + 1));
  expect(cards.length).toBe(13);
});

test("Card cannot have invalid suit", () => {
  function createCard() {
    //@ts-ignore;
    new Card("TEST", 5);
  }
  expect(createCard).toThrowError();
});

test("All valid suits can be created", () => {
  const cards: Card[] = [];
  const suits = [Suit.CLUBS, Suit.SPADES, Suit.HEARTS, Suit.DIAMONDS];
  suits.forEach(suit => cards.push(new Card(suit, 5)));
  cards.forEach(card => expect(suits).toContain(card.suit));
  expect(cards.length).toBe(4);
});

test("Card suit field has no setter", () => {
  const card = new Card(Suit.CLUBS, 5);

  let error;
  try {
    //@ts-ignore
    card.suit = Suit.DIAMONDS;
  } catch (e) {
    error = e;
  }
  expect(error).toBeInstanceOf(Error);
  expect(card.suit).toBe(Suit.CLUBS);
});

test("Card value field has no setter", () => {
  const card = new Card(Suit.CLUBS, 5);

  let error;
  try {
    //@ts-ignore
    card.value = 10;
  } catch (e) {
    error = e;
  }
  expect(error).toBeInstanceOf(Error);
  expect(card.value).toBe(5);
});

test("Card value of one is Ace", () => {
  const card = new Card(Suit.CLUBS, 1);
  expect(card.getFullName()).toBe("Ace of clubs");
});

test("Card values > 10 are face cards", () => {
  const jack = new Card(Suit.HEARTS, 11);
  expect(jack.getFullName()).toBe("Jack of hearts");
  const queen = new Card(Suit.DIAMONDS, 12);
  expect(queen.getFullName()).toBe("Queen of diamonds");
  const king = new Card(Suit.SPADES, 13);
  expect(king.getFullName()).toBe("King of spades");
});

test("Card values > 1 and < 11 are normal cards", () => {
  const cards = [];
  for (let i = 2; i < 11; i++) {
    cards.push(new Card(Suit.SPADES, i));
  }

  cards.forEach((card, i) => expect(card.getFullName()).toBe(i + 2 + " of spades"));
});
