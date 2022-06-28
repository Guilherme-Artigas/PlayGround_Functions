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
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))
// Desafio 12
function triangleCheck() {
  // seu código aqui
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
