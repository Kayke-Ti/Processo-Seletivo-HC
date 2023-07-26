/*
2°
  Escreva uma função que receba como parâmetro um ano e retorne o
  século a qual o ano se refere.
*/

function calcularSeculo(ano) {
  // Divide o ano por 100 e arredonda para cima
  const seculo = Math.ceil(ano / 100);
  return seculo;
}

// Exemplo de uso da função:
const anoExemplo = 2023;
const seculoDoAno = calcularSeculo(anoExemplo);
console.log(`O ano ${anoExemplo} pertence ao século ${seculoDoAno}.`);
