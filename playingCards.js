function playingCards(face, suit) {
  //· Valid card faces are: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
  //· Valid card suits are: S (♠), H (♥), D (♦), C (♣)
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

  face = face.toUpperCase();
  suit = suit.toUpperCase();

  let isOK = false;
  faces.forEach((el) => {
    if (face === el) isOK = true;
  });

  if (!isOK) throw new Error('Erorr');

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

  const card = {
    face: face,
    suit: suit,

    toString() {
      return this.face + this.suit;
    },
  };

  return card.toString();
  console.log();
}

console.log(playingCards('A', 'S'));
console.log(playingCards('10', 'H'));
console.log(playingCards('1', 'C'));
