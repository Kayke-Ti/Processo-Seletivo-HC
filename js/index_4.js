/*
4°
  Escreva uma função que receba como parâmetro um número inteiro e
  retorne dois números primos, um sendo o primeiro número primo
  menor que o número do parâmetro e o outro o primeiro maior que o
  número do argumento. Faça em Javascript 

*/

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }

  return true;
}

function findPrimesAroundNumber(num) {
  let smallerPrime = num - 1;
  let largerPrime = num + 1;

  while (!isPrime(smallerPrime)) {
    smallerPrime--;
  }

  while (!isPrime(largerPrime)) {
    largerPrime++;
  }

  return [smallerPrime, largerPrime];
}

// Exemplo de uso:
const number = 15;
const [smaller, larger] = findPrimesAroundNumber(number);
console.log(`O primeiro número primo menor que ${number} é: ${smaller}`);
console.log(`O primeiro número primo maior que ${number} é: ${larger}`);
