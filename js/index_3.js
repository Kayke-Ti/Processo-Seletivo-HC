/*
3°
  Escreva uma função que ao receber um array de números (inteiros ou
  decimais ou negativos), verificar se movendo de posição no máximo um
  número do array, o array resultante estará ordenado.
*/

function isOneMoveSortPossible(arr) {
  function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i < arr.length; i++) {
    const removed = arr.splice(i, 1);
    if (isSorted(arr)) {
      return true;
    }
    arr.splice(i, 0, removed[0]);
  }

  return false;
}

// Exemplo de uso da função:
const arrayExemplo1 = [1, 5, 3, 4, 2];
const arrayExemplo2 = [4, 2, 6, 8, 5];
console.log(isOneMoveSortPossible(arrayExemplo1)); // Deve retornar true
console.log(isOneMoveSortPossible(arrayExemplo2)); // Deve retornar false
