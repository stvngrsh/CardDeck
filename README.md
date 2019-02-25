# Deck of Cards

Deck of cards implementation using TypeScript. Tests written in Jest.

## Building

Run `npm i` to install dev dependencies and `npm run build` to compile the TypeScript.

## Testing

Run `npm run test` to run Jest unit tests. Code coverage is enabled and should be at 100% for all files.

## Getting started

To create a new deck, call the constructor. A new deck is created as a standard 52 card playing deck, no jokers. Deck is automatically shuffled once when created.

```JavaScript
const deck = new CardDeck();
```

There are two methods on the CardDeck object:

- `shuffle()` - Resets and shuffles the 52 card deck. Shuffle will always reset the deck to 52 cards.
- `drawOneCard()` - Returns a single card object from the top of the deck

## A few notes

There are some choices made with this implementation that may not work with every type of card game. I chose Solitare as the basis for my deck design, which explains a few choices.

1. Shuffle resets the deck. The requirements did not clearly state if this was necessary. In the context of solitare, you would never shuffle the deck unless you were restarting a game with a full 52 card deck. This implementation could be ammended with a 'reset()' method in the future, and the reset could be decoupled from the shuffle without modifying the shuffle algorithm.

2. Deck is not modified when a card is drawn. Because the deck is reset on shuffle, there is no need to actually modify the deck, or 'pop()' a card off the deck. Instead, an index tracks the top of the deck. While a minor optimization, it does eliminate the recreation of a 52 card deck on every shuffle. That only needs to happen once in the constructor.

3. Aces low. Ace's have a value of 1 in this implemntation. This follows the ranking in a game of solitare, in contract to aces high in a game such as poker.

4. The deck does not return an error when drawing a card from an empty deck. The user of this class shouldn't be forced to maintain a count of the cards left in the deck to avoid an error, and if using TypeScript, the user will be well aware the drawn card may be undefined.
