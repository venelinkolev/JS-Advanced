function cars(arr) {
  const object = {};

  const closure = {
    create: (name, inherits, name2) => {
      //(object[name] = inherits ? Object.create(object[name2]) : {}),

      if (inherits === undefined) {
        object[name] = {};
      } else {
        //debugger;
        object[name] = Object.create(object[name2]);
        //debugger;
        //object[name] = newObj;
      }

      // console.log(nameOne, inherit, nameTwo);
    },
    set: (name, key, value) => {
      object[name][key] = value;
    },
    print: (name) => { },
  };

  arr.forEach((element) => {
    let [command, name, key, value] = element.split(' ');

    closure[command](name, key, value);
  });

  console.log(object);
}

/*
function cars(input) {

  const data = {};

  const result = {
      create: (name, inherits, name2) => (data[name] = inherits ? Object.create(data[name2]) : {}),
      set: (name, key, value) => (data[name][key] = value),
      print: (name) => {
          const entry = [];
          for (const key in data[name]) {
              entry.push(`${key}:${data[name][key]}`);
          }
          console.log(entry.join(","));
      },
  };
debugger;
  input.forEach((line) => {
      const [command, name, key, value] = line.split(" ");
      result[command](name, key, value);
  });
}
*/
cars([
  'create c1',
  'create c2 inherit c1',
  'set c1 color red',
  'set c2 model new',
  'print c1',
  'print c2',
]);
