class Triathlon {
  //     •	competitionName – a string
  // •	participants – an empty object
  // •	listOfFinalists – an empty array

  constructor(competitionName) {
    this.competitionName = competitionName;
    this.participants = {};
    this.listOfFinalists = [];
  }

  addParticipant(participantName, participantGender) {
    // This method adds a new participant to the participants object. The method accepts 2 arguments:
    // •	participantName – a string
    // •	participantGender – a string
    // If the participant exists in the participants object, return the following message:
    // `${participantName} has already been added to the list`
    // Otherwise, add the new participant to the participants object in the following format {‘Peter’ : ‘male’} and return the following message:
    // `A new participant has been added - ${participantName}`

    for (let key in this.participants) {
      if (key == participantName) {
        return `${participantName} has already been added to the list`;
      }
    }
    this.participants[participantName] = participantGender;

    return `A new participant has been added - ${participantName}`;
  }

  completeness(participantName, condition) {
    //  Accept 2 arguments:
    // •	participantName – a string
    // •	condition – a number (0 – 100)
    // If the participant doesn’t exist in the participants object, throw new Error:
    // `${participantName} is not in the current participants list`

    let isNotInList = false;
    for (let key in this.participants) {
      if (key == participantName) {
        isNotInList = false;
        break;
      } else {
        isNotInList = true;
      }
    }
    if (isNotInList) {
      throw new Error(
        `${participantName} is not in the current participants list`
      );
    }

    // There are three disciplines in the triathlon and each requires the participant condition to be at least 30 for a discipline to be completed.
    // If the participant exists in the participants object but his condition is lower than 30, throw new Error:
    // `${participantName} is not well prepared and cannot finish any discipline`

    if (condition < 30) {
      throw new Error(
        `${participantName} is not well prepared and cannot finish any discipline`
      );
    } else if (condition >= 30 && condition < 60) {
      return `${participantName} could only complete 1 of the disciplines`;
    } else if (condition >= 60 && condition < 90) {
      return `${participantName} could only complete 2 of the disciplines`;
    } else {
      for (let key in this.participants) {
        if (key == participantName) {
          this.listOfFinalists.push({
            [participantName]: this.participants[key],
          });
          delete this.participants[key];
        }
      }

      return `Congratulations, ${participantName} finished the whole competition`;
    }

    // Afterwards, find how many disciplines is the participant able to complete depending on his condition (condition divided by 30). If they completed only one or two disciplines, return the following message:
    // `${participantName} could only complete ${completedCount} of the disciplines`
    // Otherwise extract the participant from the participants object and add him to the list of finalists in the following format: { participantName, participantGender }
    // Return the following message:
    // `Congratulations, ${participantName} finished the whole competition`
  }

  rewarding(participantName) {
    // Accept 1 argument:
    // •	participantName – a string
    // If the participantName is not present in the list of finalists, return the following message:
    // `${participantName} is not in the current finalists list`
    // Otherwise, return the following message:${participantName} was rewarded with a trophy for his performance
    // `${participantName} was rewarded with a trophy for his performance`

    for (let i of this.listOfFinalists) {
      if (i[participantName]) {
        return `${participantName} was rewarded with a trophy for his performance`;
      }
    }
    return `${participantName} is not in the current finalists list`;
  }

  showRecord(criteria) {
    // Accept 1 argument:
    // •	criteria – a string
    // This method returns information based on the criteria. The three possible types of criteria are: "male", "female" or "all".
    // If the list of finalists is empty, return the following message:
    // `There are no finalists in this competition`

    let result = [];
    //result.push(`List of all ${this.competitionName} finalists:`);
    let isGender = false;

    if (this.listOfFinalists.length == 0) {
      return `There are no finalists in this competition`;
    } else {
      for (let finalists of this.listOfFinalists) {
        let currentFinalists = Object.entries(finalists);
        if (currentFinalists[0][1] == criteria && criteria != 'all') {
          isGender = true;
          return `${currentFinalists[0][0]} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
        } else if (currentFinalists[0][1] != criteria && criteria == 'all') {
          result.push(currentFinalists);
          isGender = true;
        }
      }
      if (!isGender) {
        return `There are no ${criteria}'s that finished the competition`;
      }
    }

    let buffer = [];
    result.sort((a, b) => a[0][0][0].localeCompare(b[0][0][0]));
    buffer.push(`List of all ${this.competitionName} finalists:`);
    for (let i of result) {
      buffer.push(i[0][0]);
    }
    return buffer.join('\n');
    // If there are no finalists with the given criteria, return:
    // `There are no ${participantGender}'s that finished the competition`
    // If there are finalists with the given criteria, return a message with the firstly added participant in the following format:
    // `${participantName} is the first ${criteria} that finished the ${competitionName} triathlon`;
    // Otherwise if the criteria is all, return all finalists from the list of finalists array in following format:
    // •	On first line show the following message:
    // `List of all ${competitionName} finalists:`
    // •	On the following lines, display the names of each finalist sorted  in ascending order:
    // `${participantName}`
  }
}

const contest = new Triathlon('Dynamos');
console.log(contest.addParticipant('Peter', 'male'));
console.log(contest.addParticipant('Sasha', 'female'));
console.log(contest.addParticipant('George', 'male'));
console.log(contest.completeness('Peter', 100));
console.log(contest.completeness('Sasha', 90));
console.log(contest.completeness('George', 95));
console.log(contest.rewarding('Peter'));
console.log(contest.rewarding('Sasha'));
console.log(contest.rewarding('George'));
console.log(contest.showRecord('male'));
console.log(contest.showRecord('female'));
console.log(contest.showRecord('all'));
console.log(contest.showRecord('pesho'));
