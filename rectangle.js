function rectangle(width, height, color) {
  const objectInfo = {
    width,
    height,
    color,
    calcArea() {
      return this.width * this.height;
    },
  };
  objectInfo.color =
    objectInfo.color[0].toUpperCase() + objectInfo.color.substring(1);

  return objectInfo;
}

let rect = rectangle(4, 5, 'red');

console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
