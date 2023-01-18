function cars(arr) {
  const object = {};

  const closure = {
    create: (name, inherits, name2) => {
      //     (object[name] = inherits ? Object.create(object[name2]) : {}),
      if (inherits === undefined) {
        object[name] = {};
      } else {
        Object.create(object[name2]);
      }
    },
    // console.log(nameOne, inherit, nameTwo);

    set: (name, key, value) => {
      object[name][key] = value;
    },
    print: (name) => {},
  };

  arr.forEach((element) => {
    let [command, name, key, value] = element.split(' ');

    closure[command](name, key, value);
  });

  console.log(object);
}

cars([
  'create c1',
  'create c2 inherit c1',
  'set c1 color red',
  // 'set c2 model new',
  // 'print c1',
  // 'print c2',
]);
