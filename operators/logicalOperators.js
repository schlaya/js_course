
// Logical AND (&&)
// Returns TRUE if both operands are TRUE
console.log(true && false); // returns false
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

// Logical OR (||)
// Returns TRUE if one of the operands is TRUE
let highIncome2 = true;
let goodCreditScore2 = false;
let eligibleForLoan2 = highIncome2 && goodCreditScore2;

// NOT (!)
let applicationRefused = !eligibleForLoan