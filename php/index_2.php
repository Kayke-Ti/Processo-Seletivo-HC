<?php
function calcularSeculo($ano) {
  // Divide o ano por 100 e arredonda para cima
  $seculo = ceil($ano / 100);
  return $seculo;
}

// Exemplo de uso da função:
$anoExemplo = 2023;
$seculoDoAno = calcularSeculo($anoExemplo);
echo "O ano $anoExemplo pertence ao século $seculoDoAno.";
?>
