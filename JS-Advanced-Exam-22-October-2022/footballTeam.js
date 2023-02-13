class footballTeam {
  // •	clubName - string
  // •	country - string
  // •	invitedPlayers - empty array

  constructor(clubName, country) {
    this.clubName = clubName;
    this.country = country;
    this.invitedPlayers = [];
  }

  newAdditions(footballPlayers) {
    // This method adds players to the invitation list. The method takes one argument: footballPlayers (array of strings).
    // •	Every element into this array is information about player in the format:
    // "{name}/{age}/{playerValue}"
    // o	They are separated by slash symbol "/". The playerValue is in millions. Example: ["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"…]
    // •	If the name of the current player is already present in invitedPlayers array, update the old playerValue only if the current one is higher.
    footballPlayers.forEach((player) => {
      let [name, age, playerValue] = player.split('/');
      age = Number(age);
      playerValue = Number(playerValue);

      let currentPlayer = this.invitedPlayers.find(
        (player) => player.name == name
      );

      if (!currentPlayer) {
        this.invitedPlayers.push({ name, age, playerValue });
      } else {
        if (currentPlayer.playerValue < playerValue) {
          currentPlayer.playerValue = playerValue;
        }
      }
    });
    // •	Otherwise, should add the player, with properties: {name, age, playerValue} to the invitedPlayers array.
    // •	In all cases, you must finally return a string in the following format:
    // "You successfully invite {name1}, {name2}, …{nameN}."
    //        Note: When returning the string, keep in mind that the different names of football Players must be:
    // •	Unique - for instance:
    // o	" You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres " - is a correctly returned string
    // o	" You successfully invite Kylian Mbappé, Lionel Messi, Kylian Mbappé "- is not a correctly returned string
    // •	Separated by comma and space (, )
    let playersName = [];
    for (let i of this.invitedPlayers) {
      playersName.push(i.name);
    }
    return `You successfully invite ${playersName.join(', ')}.`;
  }

  signContract(selectedPlayer) {
    // With this method, manager can sign contracts with player from the invited list. The method takes one argument: selectedPlayer (string).
    // •	Тhe string about the selected player is in the format:
    // "{name}/{playerOffer}"
    // •	Check:
    // o	If the name of the current player is not present in invitedPlayers array, an error with the following message should be thrown:
    // "{name} is not invited to the selection list!"
    let [name, playerOffer] = selectedPlayer.split('/');
    playerOffer = Number(playerOffer);

    let currentPlayer = this.invitedPlayers.find(
      (player) => player.name == name
    );

    if (!currentPlayer) {
      throw new Error(`${name} is not invited to the selection list!`);
    } else {
      if (currentPlayer.playerValue > playerOffer) {
        throw new Error(
          `"The manager's offer is not enough to sign a contract with ${name}, ${
            currentPlayer.playerValue - playerOffer
          } million more are needed to sign the contract!`
        );
      }
    }
    // o	If the playerOffer selected by the manager for a given player is less than the value recorded in the array invitedPlayers, an error with the following message should be thrown:
    // "The manager's offer is not enough to sign a contract with {name}, {priceDifference} million more are needed to sign the contract!"
    // 	priceDifference - is the difference between playerValue and playerOffer.
    // o	Otherwise, if the above conditions are not met, you must replace playerValue with the string "Bought"
    // o	Finally, you need to return the string in the following format:
    // "Congratulations! You sign a contract with {BoughtPlayer} for {BuyingPrice} million dollars."
    currentPlayer.playerValue = 'Bought';

    return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
  }

  ageLimit(name, age) {
    age = Number(age);

    // With this method, we make sure that the players are young enough to sign a five-year contract with the team, a reduced-time contract, or no contract at all. The method takes two arguments:
    // o	name (string)
    // o	age (number)
    // •	If the submitted name is not present in the invitedPlayers array, an error with the following message should be thrown:
    //   "{name} is not invited to the selection list!"

    let currentPlayer = this.invitedPlayers.find(
      (player) => player.name == name
    );

    if (!currentPlayer) {
      throw new Error(`${name} is not invited to the selection list!`);
    } else {
      let ageDifference = age - currentPlayer.age;
      if (ageDifference < 5 && ageDifference > 0) {
        return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
      } else if (ageDifference > 5) {
        return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
      } else {
        return `${name} is above age limit!`;
      }
    }
    // •	If the age recorded in the invitedPlayers array is less than the age submitted as an argument, you must check the difference between limit age and player age. If the difference is less than 5 years, return the following string: "{name} will sign a contract for {ageDifference} years with {clubName} in {country}!"
    // o	ageDifference - is the difference between limit age and player age.
    // •	 If the age difference is more than 5 years, return the following message:
    // "{name} will sign a full 5 years contract for {clubName} in {country}!"
    // •	If the player age from the invitedPlayers array is greater or equal than the age submitted as an argument, return the following message: "{name} is above age limit!"
  }

  transferWindowResult() {
    let buffer = [];
    buffer.push('Players list:');

    this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name));
    // o	This method returns all players, The first line shows the following message:
    // "Players list:"
    // o	On the new line, display information about each player sorted in ascending order of name:
    // "Player {name}-{playerValue}"

    this.invitedPlayers.forEach((player) => {
      buffer.push(`Player ${player.name}-${player.playerValue}`);
    });

    return buffer.join('\n');
  }
}
