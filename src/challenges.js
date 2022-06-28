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

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gato1 = Math.abs(mouse - cat1);
  let gato2 = Math.abs(mouse - cat2);
  if (gato1 > gato2) {
    return 'cat2';
  } else if (gato2 > gato1) {
    return 'cat1';
  } else if (gato1 === gato2) {
    let empate = 'os gatos trombam e o rato foge';
    return empate;
  }
}

// Desafio 8
function fizzBuzz(arg1) {
  let newArray = [];
  for (let i of arg1) {
    if (i % 3 === 0 && i % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (i % 3 === 0) {
      newArray.push('fizz');
    } else if (i % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9
function encode(arg1) {
  let frase = '';
  for (let i in arg1) {
    if (arg1[i].toLowerCase() === 'a') {
      frase = frase + '' + 1;
    } else if (arg1[i].toLowerCase() === 'e') {
      frase = frase + '' + 2;
    } else if (arg1[i].toLowerCase() === 'i') {
      frase = frase + '' + 3;
    } else if (arg1[i].toLowerCase() === 'o') {
      frase = frase + '' + 4;
    } else if (arg1[i].toLowerCase() === 'u') {
      frase = frase + '' + 5;
    } else {
      frase = frase + arg1[i];
    }
  }
  return frase;
}
function decode(arg1) {
  let frase = '';
  for (let i in arg1) {
    if (arg1[i].toLowerCase() === '1') {
      frase = frase + '' + 'a';
    } else if (arg1[i].toLowerCase() === '2') {
      frase = frase + '' + 'e';
    } else if (arg1[i].toLowerCase() === '3') {
      frase = frase + '' + 'i';
    } else if (arg1[i].toLowerCase() === '4') {
      frase = frase + '' + 'o';
    } else if (arg1[i].toLowerCase() === '5') {
      frase = frase + '' + 'u';
    } else {
      frase = frase + arg1[i];
    }
  }
  return frase;
}

// Desafio 10
function techList(arg1, arg2) {
  let newArray = [];
  arg1.sort();
  if (arg1.length >= 0 && arg2 !== '') {
    for (let i of arg1) {
      newArray.push({tech: i, name: arg2});
    }
  }
  if (newArray.length > 0) {
    return newArray;
  }
  return 'Vazio!';
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
