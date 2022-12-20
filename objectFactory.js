function objectFactory() {
  const library = {
    print: function () {
      console.log(`${this.name} is printing a page`);
    },

    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },

    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
  };

  const orders = [
    {
      template: { name: 'ACME Printer' },
      parts: ['print'],
    },

    {
      template: { name: 'Initech Scanner' },
      parts: ['scan'],
    },

    {
      template: { name: 'ComTron Copier' },
      parts: ['scan', 'print'],
    },

    {
      template: { name: 'BoomBox Stereo' },
      parts: ['play'],
    },
  ];

  function factory(library, orders) {
    let result = [];

    for (let order of orders) {
      let currentObject = Object.assign({}, order.template);
      let currentFunc = order.parts;

      for (let func of currentFunc) {
        currentObject[func] = library[func];
      }

      result.push(currentObject);
      //console.log(currentObject);
    }

    return result;
  }

  const products = factory(library, orders);
  console.log(products);
}

objectFactory();
