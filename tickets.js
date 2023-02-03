function tickets(arr, sortMethod) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }

  const ticketList = [];

  for (let i of arr) {
    let [destination, price, status] = i.split('|');
    price = Number(price);

    const currentTicket = new Ticket(destination, price, status);

    ticketList.push(currentTicket);

    //    console.log(currentLine);
  }

  if (sortMethod == 'price') {
    return ticketList.sort((a, b) => a - b);
  } else {
    return ticketList.sort((a, b) =>
      a[sortMethod].localeCompare(b[sortMethod])
    );
  }

  //console.log(ticketList);
}

console.log(
  tickets(
    [
      'Philadelphia|94.20|available',
      'New York City|95.99|available',
      'New York City|95.99|sold',
      'Boston|126.20|departed',
    ],
    'destination'
  )
);
console.log(
  tickets(
    [
      'Philadelphia|94.20|available',
      'New York City|95.99|available',
      'New York City|95.99|sold',
      'Boston|126.20|departed',
    ],
    'status'
  )
);
