/* const defaultResult = 0;

let currentResult = defaultResult;
let logEntries = [];

// create getInput function
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// refactoring code to avoid repeat!!! 
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}


// create add function
function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  const logEntry = {
    operation: 'Add',
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult,
  };
  createAndWriteOutput('+', initialResult, enteredNumber);
  logEntries.push(logEntry);
  console.log(logEntries);
}

// create substract function
function substract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
}

// create multiply function
function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
}

// create divide function
function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);

substractBtn.addEventListener('click', substract);

multiplyBtn.addEventListener('click', multiply);

divideBtn.addEventListener('click', divide);
 */

const defaultResult = 0;

let currentResult = defaultResult;

// start create Refactoring magic
function getUserInputNumber() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

// add some array
const logEntries = [];

function writeLog(operator, initialResult, enteredNumber, currentResult) {
  const logEntry = {
    operation: operator,
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult,
  };

  logEntries.push(logEntry);
  console.log(logEntries);
}
// end Refactoring magic

// use IF steatements
function calculationResult(calculationType) {
  const enteredNumber = getUserInputNumber();
  const initialResult = currentResult;
  let mathOperator;

  if (isNaN(enteredNumber)) {
    return 0;
  } else {
    if (calculationType === 'ADD') {
      currentResult += enteredNumber;
      mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
      currentResult -= enteredNumber;
      mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
      currentResult *= enteredNumber;
      mathOperator = '*';
    } else if (calculationType === 'DIVIDE') {
      currentResult /= enteredNumber;
      mathOperator = '/';
    }
  }
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeLog(calculationType, initialResult, enteredNumber, currentResult);
}

// function add
function add() {
  calculationResult('ADD');
}
// function substract
function subtract() {
  calculationResult('SUBTRACT');
}
// function multiply
function multiply() {
  calculationResult('MULTIPLY');
}

function divide() {
  calculationResult('DIVIDE');
  
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
