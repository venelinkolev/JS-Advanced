function previousDay(year, month, day) {
  let date = new Date(year, month - 1, day);

  date.setDate(date.getDate() - 1);

  //console.log(newDate);
  console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
}

previousDay(2016, 3, 1);
previousDay(2015, 5, 1);
