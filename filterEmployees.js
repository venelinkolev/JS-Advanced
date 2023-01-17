function filterEmployees(data, criteria) {
  const employees = JSON.parse(data);
  let [key, value] = criteria.split('-');

  let filterResult = employees.filter((obj) => {
    return obj[key] === value;
  });

  filterResult.forEach((obj, index) => {
    //let currentObject = Object.keys(obj);
    console.log(
      `${index}. ${obj['first_name']} ${obj['last_name']} - ${obj['email']}`
    );
  });

  //.log(filterResult);
  //   console.log(employees);
  //   console.log(key, value);
}

filterEmployees(
  `[{
    "id": "1",
    "first_name": "Ardine", 
    "last_name": "Bassam",    
    "email": "abassam0@cnn.com",    
    "gender": "Female"    
    }, {    
    "id": "2", 
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
    },
    {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
    }]`,
  'gender-Female'
);
filterEmployees(
  `[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
    }, {"id": "2", "first_name": "Kizzee", "last_name": "Johnson", "email": "kjost1@forbes.com", "gender": "Female" }, { "id": "3", "first_name": "Evanne", "last_name": "Maldin", "email": "emaldin2@hostgator.com", "gender": "Male" }, { "id": "4", "first_name": "Evanne", "last_name": "Johnson", "email": "ev2@hostgator.com", "gender": "Male" }]`,
  'last_name-Johnson'
);
