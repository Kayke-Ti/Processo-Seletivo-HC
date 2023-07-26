<?php
function isPrime($num) {
  if ($num <= 1) return false;
  if ($num <= 3) return true;

  if ($num % 2 === 0 || $num % 3 === 0) return false;

  $i = 5;
  while ($i * $i <= $num) {
    if ($num % $i === 0 || $num % ($i + 2) === 0) return false;
    $i += 6;
  }

  return true;
}

function findPrimesAroundNumber($num) {
  $smallerPrime = $num - 1;
  $largerPrime = $num + 1;

  while (!isPrime($smallerPrime)) {
    $smallerPrime--;
  }

  while (!isPrime($largerPrime)) {
    $largerPrime++;
  }

  return [$smallerPrime, $largerPrime];
}

// Exemplo de uso:
$number = 15;
list($smaller, $larger) = findPrimesAroundNumber($number);
echo "O primeiro número primo menor que $number é: $smaller" . PHP_EOL;
echo "O primeiro número primo maior que $number é: $larger" . PHP_EOL;
?>