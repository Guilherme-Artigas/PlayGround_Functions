// Desafio 11
function generatePhoneNumber(arg1) {
  let repeteTres = null;
  let contador = null;
  let phone = '(';
  for (let i1 of arg1) {
    for (let i2 of arg1) {
      if (i1 === i2) {
        contador += 1;
      };
      if (contador >= 3) {
        repeteTres = contador;
      }
    };
    contador = 0;
  };

  if (arg1.length !== 11) {
    return 'Array com tamanho incorreto.';
  };
  for (let i in arg1) {
    if (arg1[i] < 0 || arg1[i] > 9 || repeteTres >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    } else if (i === '1') {
      phone += arg1[i] + ')';
    } else if (i === '2') {
      phone += ' ' + arg1[i];
    } else if (i === '7') {
      phone += '-' + arg1[i];
    } else {
      phone += arg1[i];
    };
  };
  return phone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB+lineC || lineB > lineA+lineC || lineC > lineA+lineB) {
    return false;
  }

  if (lineA < Math.abs(lineB-lineC) || lineB < Math.abs(lineA-lineC) || lineC < Math.abs(lineA-lineB)) {
    return false;
  }

  return true;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
