function functionalSum(number) {
    const currentSum = (a) => {
        number += a;
        return currentSum;
    }; 

    currentSum.toString = () => {
        return number;
    };

    return currentSum;
}
debugger;
console.log(functionalSum(1).toString());
console.log(functionalSum(1)(6)(-3).toString());

//add(1) result 1

//add(1)(6)(-3) result 4
