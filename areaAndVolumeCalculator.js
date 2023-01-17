function areas() {
  return Math.abs(this.x * this.y);
}

function vol() {
  return Math.abs(this.x * this.y * this.z);
}

function areaAndVolumeCalculator(areas, vol, input) {
  let coordinates = JSON.parse(input);
  let result = [];

  coordinates.forEach((coordinate) => {
    let area = areas.call(coordinate);
    let volume = vol.call(coordinate);

    result.push({ area, volume });
  });

  return result;
  console.log(result);
}

areaAndVolumeCalculator(
  areas,
  vol,
  `[

    {"x":"1","y":"2","z":"10"},
    
    {"x":"7","y":"7","z":"10"},
    
    {"x":"5","y":"2","z":"10"}
    
    ]`
);
areaAndVolumeCalculator(
  areas,
  vol,
  `[

    {"x":"10","y":"-22","z":"10"},
    
    {"x":"47","y":"7","z":"-5"},
    
    {"x":"55","y":"8","z":"0"},
    
    {"x":"100","y":"100","z":"100"},
    
    {"x":"55","y":"80","z":"250"}
    
    ]`
);
