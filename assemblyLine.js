function createAssemblyLine(myCar) {
  const carFunction = {
    hasClima(myCar) {
      myCar.temp = 21;
      myCar.tempSettings = 21;
      myCar.adjustTemp = () => {
        if (myCar.temp < myCar.tempSettings) myCar.temp++;
        if (myCar.temp > myCar.tempSettings) myCar.temp--;
      };
    },

    hasAudio(myCar) {
      myCar.currentTrack = {
        name: '',
        artist: '',
      };
      myCar.nowPlaying = () => {
        if (myCar.currentTrack.name && myCar.currentTrack.artist) {
          console.log(
            `Now playing '${myCar.currentTrack.name}' by ${myCar.currentTrack.artist}`
          );
        }
      };
    },

    hasParktronic(myCar) {
      myCar.checkDistance = (number) => {
        if (number < 0.1) console.log('Beep! Beep! Beep!');
        else if (number >= 0.1 && number < 0.25) console.log('Beep! Beep!');
        else if (number >= 0.25 && number < 0.5) console.log('Beep!');
        else console.log('');
      };
    },
  };

  return carFunction;
}

const assemblyLine = createAssemblyLine();

const myCar = {
  make: 'Toyota',
  model: 'Avensis',
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);

myCar.currentTrack = {
  name: 'Never Gonna Give You Up',
  artist: 'Rick Astley',
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.table(myCar);
