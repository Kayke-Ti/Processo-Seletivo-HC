<?php
function multiplyMatrices($dimensionsA, $dimensionsB, $matrixA, $matrixB) {
  list($rowsA, $colsA) = $dimensionsA;
  list($rowsB, $colsB) = $dimensionsB;

  // Verifica se a multiplicação de matrizes é possível
  if ($colsA !== $rowsB) {
    echo 'Não é possível multiplicar as matrizes. O número de colunas da matriz A deve ser igual ao número de linhas da matriz B.';
    return;
  }

  // Inicializa a matriz resultante com zeros
  $resultMatrix = array_fill(0, $rowsA, array_fill(0, $colsB, 0));

  // Realiza a multiplicação de matrizes
  for ($i = 0; $i < $rowsA; $i++) {
    for ($j = 0; $j < $colsB; $j++) {
      for ($k = 0; $k < $colsA; $k++) {
        $resultMatrix[$i][$j] += $matrixA[$i][$k] * $matrixB[$k][$j];
      }
    }
  }

  // Imprime a matriz resultante
  echo 'Matriz resultante:' . PHP_EOL;
  foreach ($resultMatrix as $row) {
    echo implode("\t", $row) . PHP_EOL;
  }

  return $resultMatrix;
}

// Exemplo de uso
$dimensionsA = [2, 3]; // Matriz A com 2 linhas e 3 colunas
$dimensionsB = [3, 4]; // Matriz B com 3 linhas e 4 colunas

$matrixA = [
  [2, 3, 1],
  [1, 0, 2],
];

$matrixB = [
  [4, 1, 2, 3],
  [3, 0, 1, 4],
  [2, 5, 0, 2],
];

multiplyMatrices($dimensionsA, $dimensionsB, $matrixA, $matrixB);
?>
