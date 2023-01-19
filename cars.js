function cars(arr) {
  const object = {};

  const closure = {
    create: (name, inherits, name2) => {
      if (inherits === undefined) {
        object[name] = {};
      } else {
        const newObj = Object.create(object[name2]);

        object[name] = newObj;
      }
    },
    set: (name, key, value) => {
      object[name][key] = value;
    },
    print: (name) => {
      const result = [];

      for (let key in object[name]) {
        result.push(`${key}:${object[name][key]}`);
      }

      console.log(result.join(','));
    },
  };

  arr.forEach((element) => {
    let [command, name, key, value] = element.split(' ');

    closure[command](name, key, value);
  });
}

cars([
  'create c1',
  'create c2 inherit c1',
  'set c1 color red',
  'set c2 model new',
  'print c1',
  'print c2',
]);
