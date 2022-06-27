// Desafio 1
function compareTrue(arg1, arg2) {
  if (arg1 === true && arg2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(arg1) {
  let newArray = [];
  newArray = arg1.split(' ');
  return newArray;
}

// Desafio 4
function concatName(arg1) {
  let ultimo = arg1.length - 1;
  return arg1[ultimo] + ', ' + arg1[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(arg1) {
  let maior = 0;
  let qnt = 0;
  for (let i in arg1) {
    if (i == 0) {
      maior = arg1[i];
    } else if (arg1[i] > maior) {
      maior = arg1[i];
    }
  }
  for (let i in arg1) {
    if (maior === arg1[i]) {
      qnt += 1;
    }
  }
  return qnt;
}
console.log(highestCount([-2, -2, -1]))
// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
