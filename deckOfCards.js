function deckOfCards(arr) {
  const faces = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A',
  ];
  const suits = ['S', 'H', 'D', 'C'];

  let isEnd = false;
  let face = undefined;
  let suit = undefined;
  const card = [];

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    let isFace = false;
    let isSuit = false;
    if (element.length > 2) {
      face = element.slice(0, 2);
      suit = element.slice(2);
    } else {
      face = element.slice(0, 1);
      suit = element.slice(1);
    }

    face = face.toUpperCase();
    suit = suit.toUpperCase();

    faces.forEach((el) => {
      if (face === el) isFace = true;
    });

    suits.forEach((el) => {
      if (suit === el) isSuit = true;
    });

    if (!isFace || !isSuit) {
      isEnd = true;
      return console.log(`Invalid card: ${face + suit}`);
    }

    // · \u2660 – Spades (♠)
    // · \u2665 – Hearts (♥)
    // · \u2666 – Diamonds (♦)
    // · \u2663 – Clubs (♣)

    switch (suit) {
      case 'S':
        suit = '\u2660';
        break;
      case 'H':
        suit = '\u2665';
        break;
      case 'D':
        suit = '\u2666';
        break;
      case 'C':
        suit = '\u2663';
        break;
    }

    card.push(face + suit);
  }

  if (isEnd) return;

  console.log(card.join(' '));
}

deckOfCards(['AS', '10D', 'KH', '2C']);
deckOfCards(['5S', '3D', 'QD', '1C']);
