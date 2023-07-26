/*
1° 
  Escreva uma função que receba como parâmetro as dimensões de duas
  matrizes e as duas matrizes. Efetuar a multiplicação de matrizes se
  possível. Se for possível efetuar a multiplicação de matrizes, imprimir a
  matriz resultante, caso contrário imprimir o motivo pelo qual não é
  possível aplicar a multiplicação das matrizes.
*/

function multiplyMatrices(dimensionsA, dimensionsB, matrixA, matrixB) {
  const [rowsA, colsA] = dimensionsA;
  const [rowsB, colsB] = dimensionsB;

  // Verifica se a multiplicação de matrizes é possível
  if (colsA !== rowsB) {
    console.log('Não é possível multiplicar as matrizes. O número de colunas da matriz A deve ser igual ao número de linhas da matriz B.');
    return;
  }

  // Inicializa a matriz resultante com zeros
  const resultMatrix = new Array(rowsA).fill(0).map(() => new Array(colsB).fill(0));

  // Realiza a multiplicação de matrizes
  for (let i = 0; i < rowsA; i++) {
    for (let j = 0; j < colsB; j++) {
      for (let k = 0; k < colsA; k++) {
        resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
      }
    }
  }

  // Imprime a matriz resultante
  console.log('Matriz resultante:');
  for (let i = 0; i < rowsA; i++) {
    console.log(resultMatrix[i].join('\t'));
  }

  return resultMatrix;
}

// Exemplo de uso
const dimensionsA = [2, 3]; // Matriz A com 2 linhas e 3 colunas
const dimensionsB = [3, 4]; // Matriz B com 3 linhas e 4 colunas

const matrixA = [
  [2, 3, 1],
  [1, 0, 2],
];

const matrixB = [
  [4, 1, 2, 3],
  [3, 0, 1, 4],
  [2, 5, 0, 2],
];

multiplyMatrices(dimensionsA, dimensionsB, matrixA, matrixB);
