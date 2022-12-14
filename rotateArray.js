function rotateArray(arr, number) {
  for (let i = 0; i < number; i++) {
    let temp = arr.pop();
    arr.unshift(temp);
  }

  console.log(arr.join(' '));
}

rotateArray(['1', '2', '3', '4'], 2);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);
