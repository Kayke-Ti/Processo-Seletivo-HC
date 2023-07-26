<?php
function isSorted($arr) {
    for ($i = 1; $i < count($arr); $i++) {
        if ($arr[$i] < $arr[$i - 1]) {
            return false;
        }
    }
    return true;
}

function isOneMoveSortPossible($arr) {
    for ($i = 0; $i < count($arr); $i++) {
        $removed = array_splice($arr, $i, 1);
        if (isSorted($arr)) {
            return true;
        }
        array_splice($arr, $i, 0, $removed[0]);
    }

    return false;
}

// Exemplo de uso da função:
$arrayExemplo1 = [1, 5, 3, 4, 2];
$arrayExemplo2 = [4, 2, 6, 8, 5];
var_dump(isOneMoveSortPossible($arrayExemplo1)); // Deve retornar true
var_dump(isOneMoveSortPossible($arrayExemplo2)); // Deve retornar false
?>
