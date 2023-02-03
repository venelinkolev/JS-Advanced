class Point {
  static distance(pointOne, pointTwo) {
    //
    //d = ( x 2 − x 1 ) 2 + ( y 2 − y 1 ) 2
    return Math.sqrt(
      (pointTwo.coordX - pointOne.coordX) ** 2 +
        (pointTwo.coordY - pointOne.coordY) ** 2
    );
  }
  constructor(coordX, coordY) {
    this.coordX = coordX;
    this.coordY = coordY;
  }
}

let p1 = new Point(5, 5);

let p2 = new Point(9, 8);

console.log(Point.distance(p1, p2));
